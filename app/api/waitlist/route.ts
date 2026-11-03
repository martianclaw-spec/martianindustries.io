import { NextResponse } from "next/server";

/**
 * The Martian Core waitlist (martianindustries.io/core). Each sign-up is kept in
 * Martian itself: the Core project "Core waitlist", table `waitlist`, reached
 * with CORE_URL, CORE_PROJECT_ID and CORE_SERVICE_TOKEN. Someone already on the
 * list is told so, not added twice. A filled-in honeypot field is thanked and
 * dropped.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INTERESTS = new Set(["core", "brain", "both"]);

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

async function core<T>(path: string, body: unknown): Promise<T> {
  const base = (process.env.CORE_URL ?? "").replace(/\/+$/, "");
  const res = await fetch(`${base}/api/sdk${path}`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${process.env.CORE_SERVICE_TOKEN}` },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`Core returned ${res.status}`);
  return (await res.json()) as T;
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ ok: false, error: "Something went wrong. Try again." }, { status: 400 });
  if (str(body.company_website, 200)) return NextResponse.json({ ok: true });

  const email = str(body.email, 200).toLowerCase();
  if (!EMAIL.test(email)) return NextResponse.json({ ok: false, error: "Enter a valid email." }, { status: 400 });
  const interest = INTERESTS.has(str(body.interest, 10)) ? str(body.interest, 10) : "core";

  const projectId = process.env.CORE_PROJECT_ID;
  if (!projectId || !process.env.CORE_URL || !process.env.CORE_SERVICE_TOKEN) {
    console.error("[waitlist] Core isn't configured; sign-up not kept", email);
    return NextResponse.json({ ok: false, error: "The waitlist isn't open yet. Email hello@martianindustries.io instead." }, { status: 503 });
  }

  try {
    const have = await core<{ rows: unknown[] }>("/db/query", { projectId, table: "waitlist", where: { email }, limit: 1 });
    if (have.rows.length) return NextResponse.json({ ok: true, already: true });
    await core("/db/insert", {
      projectId,
      table: "waitlist",
      values: { email, name: str(body.name, 120) || null, building: str(body.building, 600) || null, interest, page: str(body.page, 200) || "/core" },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[waitlist] couldn't keep a sign-up", e instanceof Error ? e.message : e);
    return NextResponse.json({ ok: false, error: "That didn't go through. Try again in a minute." }, { status: 502 });
  }
}
