import { Container } from "./ui/Container";
import { AuditForm } from "./AuditForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rust/10 blur-[120px]"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-bg-raised/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-rust" aria-hidden />
            Now booking audits
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tighter2 text-white md:text-5xl">
            Tighten up the systems your venue runs on.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-ink-muted md:text-lg">
            Tell me about your venue. I will review it and follow up with next
            steps for an audit. You will get a clear answer on what to fix
            first.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
            <span className="text-ink-dim/70">Or reach me directly</span>
            <a
              href="tel:+18142157925"
              className="transition-colors hover:text-white"
            >
              (814) 215-7925
            </a>
            <span aria-hidden>·</span>
            <a
              href="mailto:hello@martianindustries.io"
              className="transition-colors hover:text-white"
            >
              hello@martianindustries.io
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl md:mt-12">
          <AuditForm />
        </div>
      </Container>
    </section>
  );
}
