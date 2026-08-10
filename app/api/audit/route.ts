import { NextResponse } from "next/server";
import { Resend } from "resend";

// Use the Node.js runtime so the Resend SDK runs identically in dev and prod.
export const runtime = "nodejs";
// Always handle dynamically; never cache form submissions.
export const dynamic = "force-dynamic";

type AuditPayload = {
  name?: unknown;
  email?: unknown;
  venue?: unknown;
  bays?: unknown;
  message?: unknown;
};

// Set RESEND_TO_EMAIL in the environment to control where audit submissions
// land. Defaults to hello@martianindustries.io.
//
// IMPORTANT: while Resend is running in sandbox mode (i.e. RESEND_FROM_EMAIL
// is not set and the FROM address is onboarding@resend.dev), Resend will
// ONLY deliver mail to the email address that owns your Resend account.
// If your Resend account is on martianclaw@gmail.com, set
//   RESEND_TO_EMAIL=martianclaw@gmail.com
// in Vercel so submissions actually get delivered. Once you verify your
// domain in Resend and set RESEND_FROM_EMAIL to something on that domain,
// you can point RESEND_TO_EMAIL back at hello@martianindustries.io (or any
// other real inbox).
const RECIPIENT = process.env.RESEND_TO_EMAIL ?? "hello@martianindustries.io";

// Resend requires `from` to use a verified sending domain. Once
// martianindustries.io is verified in Resend (Domains tab, add SPF/DKIM
// records to Porkbun), set RESEND_FROM_EMAIL in the environment to
// something like:  Martian Industries <audit@martianindustries.io>
// Until then, fall back to Resend's shared sandbox sender.
const FROM_FALLBACK = "Martian Industries Audit <onboarding@resend.dev>";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured. Try again later." },
      { status: 500 },
    );
  }

  let body: AuditPayload;
  try {
    body = (await request.json()) as AuditPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const venue = asString(body.venue);
  const bays = asString(body.bays);
  const message = asString(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isLikelyEmail(email)) {
    return NextResponse.json(
      { error: "That email address does not look valid." },
      { status: 400 },
    );
  }

  // Reject absurdly long input to keep payloads reasonable.
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { error: "Submission is too long." },
      { status: 413 },
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL || FROM_FALLBACK;

  const subject = `Audit request: ${name}${venue ? ` (${venue})` : ""}`;

  const text = [
    `New audit request from ${name}`,
    "",
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Venue:   ${venue || "(not provided)"}`,
    `Bays:    ${bays || "(not provided)"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family:-apple-system,system-ui,Segoe UI,Roboto,sans-serif;color:#111;line-height:1.5;">
      <h2 style="margin:0 0 16px;font-size:18px;">New audit request</h2>
      <table style="border-collapse:collapse;font-size:14px;">
        <tbody>
          <tr><td style="padding:4px 16px 4px 0;color:#666;">Name</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#666;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#666;">Venue</td><td>${escapeHtml(venue || "(not provided)")}</td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#666;">Bays</td><td>${escapeHtml(bays || "(not provided)")}</td></tr>
        </tbody>
      </table>
      <h3 style="margin:24px 0 8px;font-size:14px;color:#666;text-transform:uppercase;letter-spacing:0.08em;">Message</h3>
      <pre style="white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;">${escapeHtml(message)}</pre>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to: RECIPIENT,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      // Full error detail to Vercel logs so it's easy to diagnose from
      // the Deployments → Logs tab.
      console.error(
        "Resend send error:",
        JSON.stringify(error, null, 2),
        "  from:",
        from,
        "  to:",
        RECIPIENT,
      );
      const errString = JSON.stringify(error).toLowerCase();
      if (
        errString.includes("sandbox") ||
        errString.includes("verify") ||
        errString.includes("verified") ||
        errString.includes("only send") ||
        errString.includes("domain")
      ) {
        console.error(
          "[audit-hint] Resend appears to be blocking due to sandbox / " +
            "domain verification. Either verify your sending domain in " +
            "Resend's Domains tab and set RESEND_FROM_EMAIL to an address " +
            "on that domain, OR set RESEND_TO_EMAIL to the address that " +
            "owns your Resend account (sandbox mode only delivers there).",
        );
      }
      return NextResponse.json(
        {
          error:
            "Could not send your request. Please try again, or email hello@martianindustries.io directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Audit route exception:", err);
    return NextResponse.json(
      {
        error:
          "Could not send your request. Please try again, or email hello@martianindustries.io directly.",
      },
      { status: 500 },
    );
  }
}

function asString(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

function isLikelyEmail(value: string): boolean {
  // Permissive shape check; final validation is the actual email send.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
