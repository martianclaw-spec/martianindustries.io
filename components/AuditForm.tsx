"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "./ui/Button";

type Status = "idle" | "submitting" | "submitted";

export function AuditForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      venue: String(data.get("venue") ?? "").trim(),
      bays: String(data.get("bays") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let message =
          "Could not send your request. Please try again or email hello@martianindustries.io.";
        try {
          const data = (await res.json()) as { error?: unknown };
          if (typeof data?.error === "string" && data.error.length) {
            message = data.error;
          }
        } catch {
          /* fall through to default message */
        }
        setError(message);
        setStatus("idle");
        return;
      }

      form.reset();
      setStatus("submitted");
    } catch {
      setError(
        "Network error. Please try again or email hello@martianindustries.io.",
      );
      setStatus("idle");
    }
  }

  if (status === "submitted") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-line bg-bg-raised p-8 text-center md:p-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-panel px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-rust-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-rust" aria-hidden />
          Confirmed
        </div>
        <p className="mt-4 text-pretty text-lg text-white">
          Request received. I will follow up soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-ink-muted underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="rounded-lg border border-line bg-bg-raised p-6 text-left md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" htmlFor="audit-name" required>
          <input
            id="audit-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </Field>

        <Field label="Email" htmlFor="audit-email" required>
          <input
            id="audit-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>

        <Field label="Venue name" htmlFor="audit-venue">
          <input
            id="audit-venue"
            name="venue"
            type="text"
            autoComplete="organization"
            className={inputClass}
          />
        </Field>

        <Field label="Number of simulators or bays" htmlFor="audit-bays">
          <input
            id="audit-bays"
            name="bays"
            type="number"
            min={0}
            inputMode="numeric"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" htmlFor="audit-message" required>
          <textarea
            id="audit-message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your venue"
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request an audit"}
        </Button>
        {error ? (
          <span
            role="alert"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust-soft"
          >
            {error}
          </span>
        ) : (
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
            No long-term commitment
          </span>
        )}
      </div>
    </form>
  );
}

const inputClass =
  "block w-full rounded-md border border-line bg-bg-panel px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-dim transition-colors duration-150 focus:border-rust/70 focus:outline-none focus:ring-2 focus:ring-rust/30";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
        {label}
        {required ? (
          <span className="text-rust-soft" aria-hidden>
            *
          </span>
        ) : (
          <span className="text-ink-dim/70">(optional)</span>
        )}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
