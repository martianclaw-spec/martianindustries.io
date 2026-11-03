"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "joined" | "already";

const inputClass =
  "block w-full border border-line bg-bg-panel px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-dim transition-colors duration-150 focus:border-rust/70 focus:outline-none focus:ring-2 focus:ring-rust/30";

/** Join the Martian Core waitlist; kept in Martian itself (app/api/waitlist). */
export function WaitlistForm({ id = "waitlist", compact = false }: { id?: string; compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [interest, setInterest] = useState("core");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");
    const f = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: f.get("email"),
          name: f.get("name"),
          building: f.get("building"),
          interest,
          company_website: f.get("company_website"),
          page: window.location.pathname,
        }),
      });
      const j = (await res.json().catch(() => ({}))) as { ok?: boolean; already?: boolean; error?: string };
      if (!res.ok || !j.ok) {
        setError(j.error ?? "That didn't go through. Try again in a minute.");
        setStatus("idle");
        return;
      }
      setStatus(j.already ? "already" : "joined");
    } catch {
      setError("That didn't go through. Try again in a minute.");
      setStatus("idle");
    }
  }

  if (status === "joined" || status === "already") {
    return (
      <div id={id} className="border border-line bg-bg-raised p-6 text-left md:p-8" role="status">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-rust-soft">{status === "joined" ? "You're on the list" : "Already on the list"}</div>
        <p className="mt-3 text-base text-ink">
          {status === "joined" ? "Thanks. You'll hear from me personally when your spot opens, before anyone else." : "You're already on the list, so there's nothing more to do. You'll hear from me when your spot opens."}
        </p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={submit} className="border border-line bg-bg-raised p-6 text-left md:p-8">
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">Email *</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={`mt-2 ${inputClass}`} />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">Name</span>
          <input name="name" type="text" autoComplete="name" className={`mt-2 ${inputClass}`} />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">What are you building?</span>
        <input name="building" type="text" placeholder="A booking app, client websites, a SaaS..." className={`mt-2 ${inputClass}`} />
      </label>
      <fieldset className="mt-4">
        <legend className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">I'm interested in</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {[
            ["core", "Martian Core"],
            ["brain", "Martian Brain"],
            ["both", "Both"],
          ].map(([v, label]) => (
            <button
              key={v}
              type="button"
              onClick={() => setInterest(v)}
              aria-pressed={interest === v}
              className={`border px-3 py-1.5 text-sm transition-colors ${interest === v ? "border-rust bg-rust/15 text-white" : "border-line text-ink-muted hover:text-ink"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>
      {/* Left empty by people; bots fill it. */}
      <input name="company_website" type="text" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
      {error ? (
        <p className="mt-4 text-sm text-rust-soft" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-rust/60 bg-rust px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-rust-soft disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        {status === "sending" ? "Joining..." : "Join the waitlist"}
      </button>
      <p className="mt-3 text-xs text-ink-dim">
        No spam, no sharing. Just one email when your spot opens. <a href="/privacy" className="underline underline-offset-4 hover:text-ink">Privacy</a>
      </p>
    </form>
  );
}
