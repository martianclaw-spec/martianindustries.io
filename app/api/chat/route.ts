import Anthropic from "@anthropic-ai/sdk";
import { CHAT_BRIEF } from "@/lib/chat-brief";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const MODEL = "claude-sonnet-5";
const MAX_TURNS = 24;
const MAX_CHARS = 1500;

/** Requests allowed per IP per window. */
const RATE_LIMIT = 30;
const RATE_WINDOW_MS = 10 * 60 * 1000;

/**
 * Per-instance rate limiting. Serverless means each instance keeps its own
 * counter, so this is a speed bump rather than a wall. It is enough to stop a
 * casual script from running up a bill, and the real ceiling is the short
 * max_tokens below. A shared store would be the answer if this ever gets real
 * traffic.
 */
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
}

type Msg = { role: "user" | "assistant"; content: string };

function clean(body: unknown): Msg[] | null {
  if (typeof body !== "object" || body === null) return null;
  const raw = (body as { messages?: unknown }).messages;
  if (!Array.isArray(raw)) return null;

  const msgs: Msg[] = [];
  for (const m of raw.slice(-MAX_TURNS)) {
    if (typeof m !== "object" || m === null) continue;
    const { role, content } = m as { role?: unknown; content?: unknown };
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string") continue;
    const text = content.trim().slice(0, MAX_CHARS);
    if (text) msgs.push({ role, content: text });
  }
  // The model requires the conversation to start with a user turn.
  while (msgs.length && msgs[0].role !== "user") msgs.shift();
  return msgs.length ? msgs : null;
}

const NO_KEY_REPLY =
  "I am not connected to my language model right now, so I cannot answer freely. What I can tell you: we build booking and payment flows, hardware and third-party integrations, internal tools and dashboards, and AI tooling, and we are not limited to any one industry. Leave your email below, or write to hello@martianindustries.io, and Matthew will reply himself.";

function textStream(s: string) {
  return new Response(
    new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode(s));
        controller.close();
      },
    }),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return textStream(
      "You have hit the message limit for now. Use the contact form or email hello@martianindustries.io and Matthew will pick it up directly.",
    );
  }

  let messages: Msg[] | null;
  try {
    messages = clean(await req.json());
  } catch {
    messages = null;
  }
  if (!messages) {
    return new Response("Bad request", { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  // Answer usefully rather than erroring when the key is absent, so the widget
  // still captures the lead. Same instinct as shipping a degraded valuation
  // that says on its face that it is degraded.
  if (!apiKey) return textStream(NO_KEY_REPLY);

  try {
    const client = new Anthropic({ apiKey });
    const stream = client.messages.stream({
      model: MODEL,
      max_tokens: 400,
      system: CHAT_BRIEF,
      messages,
    });

    const encoder = new TextEncoder();
    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            for await (const event of stream) {
              if (
                event.type === "content_block_delta" &&
                event.delta.type === "text_delta"
              ) {
                controller.enqueue(encoder.encode(event.delta.text));
              }
            }
          } catch {
            controller.enqueue(
              encoder.encode(
                "\n\nSomething went wrong on my end. Email hello@martianindustries.io and Matthew will reply directly.",
              ),
            );
          } finally {
            controller.close();
          }
        },
      }),
      {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (err) {
    console.error("Chat error:", err);
    return textStream(
      "I could not reach my language model just now. Leave your email below, or write to hello@martianindustries.io.",
    );
  }
}
