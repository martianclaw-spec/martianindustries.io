"use client";

import { useEffect, useRef, useState } from "react";
import { CHAT_GREETING, CHAT_STARTERS } from "@/lib/chat-brief";

type Msg = { role: "user" | "assistant"; content: string };

/**
 * Lead capture that answers questions first.
 *
 * The conversation is the qualifying step and the email field is the
 * conversion, so the field only appears once there is something worth
 * following up on. Captured leads go through the same Resend route as the
 * contact form, transcript attached, rather than a second delivery path that
 * could rot independently.
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState("");
  const [leadState, setLeadState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const exchanges = messages.filter((m) => m.role === "assistant").length;
  const askForEmail = exchanges >= 2 && leadState !== "sent";

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, askForEmail, leadState]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    inputRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || busy) return;

    const next: Msg[] = [...messages, { role: "user", content: question }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const reader = res.body?.getReader();
      if (!reader) throw new Error("no stream");
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: acc }]);
      }
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "That did not go through. Email hello@martianindustries.io and Matthew will reply directly.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  async function sendLead(e: React.FormEvent) {
    e.preventDefault();
    if (leadState === "sending") return;
    setLeadState("sending");
    try {
      const transcript = messages
        .map((m) => `${m.role === "user" ? "Visitor" : "Assistant"}: ${m.content}`)
        .join("\n\n");
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Website chat",
          email,
          company: "",
          budget: "",
          message: `Lead captured from the site chat.\n\n${transcript}`,
        }),
      });
      setLeadState(res.ok ? "sent" : "error");
    } catch {
      setLeadState("error");
    }
  }

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Ask a question"}
        className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 border border-rust/60 bg-rust px-3.5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_-12px_rgba(194,85,45,0.8)] transition-transform duration-200 hover:-translate-y-0.5 md:bottom-7 md:right-7"
      >
        <span
          aria-hidden
          className="h-1.5 w-1.5 shrink-0 animate-breathe bg-white"
        />
        {open ? (
          "Close"
        ) : (
          <>
            Ask
            {/* The rest of the invitation slides out on hover, so the resting
                footprint stays small and stops covering page content. */}
            <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap transition-[max-width] duration-300 ease-out group-hover:max-w-[160px] group-focus-visible:max-w-[160px]">
              &nbsp;us anything
            </span>
          </>
        )}
      </button>

      {/* Panel */}
      {open ? (
        <div
          role="dialog"
          aria-label="Chat with Martian Industries"
          className="fixed inset-x-3 bottom-20 z-50 flex max-h-[75vh] flex-col border border-line-strong bg-bg-panel shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] md:inset-x-auto md:bottom-24 md:right-7 md:h-[560px] md:max-h-[75vh] md:w-[390px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="h-1.5 w-1.5 animate-breathe bg-emerald-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">
                Martian · Live
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim">
              Replies in minutes
            </span>
          </div>

          {/* Transcript */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            <p className="text-[13px] leading-relaxed text-ink-muted">
              {CHAT_GREETING}
            </p>

            {messages.length === 0 ? (
              <div className="space-y-2 pt-1">
                {CHAT_STARTERS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="block w-full border border-line bg-bg-raised/60 px-3 py-2 text-left text-[13px] text-ink-muted transition-colors hover:border-rust/50 hover:text-white"
                  >
                    {s}
                  </button>
                ))}
              </div>
            ) : null}

            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] border border-line-strong bg-bg-raised px-3 py-2 text-[13px] leading-relaxed text-ink"
                    : "max-w-[92%] border-l-2 border-rust/70 pl-3 text-[13px] leading-relaxed text-ink-muted"
                }
              >
                {m.content || (
                  <span className="inline-flex gap-1" aria-label="Thinking">
                    <span className="h-1 w-1 animate-breathe bg-ink-dim" />
                    <span className="h-1 w-1 animate-breathe bg-ink-dim [animation-delay:200ms]" />
                    <span className="h-1 w-1 animate-breathe bg-ink-dim [animation-delay:400ms]" />
                  </span>
                )}
              </div>
            ))}

            {/* Conversion step, once there is something worth following up on */}
            {askForEmail ? (
              <form onSubmit={sendLead} className="border border-line bg-bg-raised/60 p-3">
                <label
                  htmlFor="chat-email"
                  className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim"
                >
                  Want Matthew to follow up?
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    id="chat-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="min-w-0 flex-1 border border-line bg-bg-panel px-2.5 py-2 text-[13px] text-ink placeholder:text-ink-dim focus:border-rust/70 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={leadState === "sending"}
                    className="shrink-0 border border-rust/60 bg-rust px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white disabled:opacity-60"
                  >
                    {leadState === "sending" ? "..." : "Send"}
                  </button>
                </div>
                {leadState === "error" ? (
                  <p className="mt-2 text-[12px] text-rust-soft">
                    That did not send. Email hello@martianindustries.io instead.
                  </p>
                ) : null}
              </form>
            ) : null}

            {leadState === "sent" ? (
              <p className="border-l-2 border-emerald-400/70 pl-3 text-[13px] text-ink-muted">
                Got it. Matthew will follow up at {email}. Keep asking questions
                if you have them.
              </p>
            ) : null}
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-line p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={1500}
              placeholder="What are you trying to build?"
              aria-label="Your message"
              className="min-w-0 flex-1 border border-line bg-bg-raised px-3 py-2 text-[13px] text-ink placeholder:text-ink-dim focus:border-rust/70 focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="shrink-0 border border-line-strong bg-bg-raised px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-rust/60 hover:text-white disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
