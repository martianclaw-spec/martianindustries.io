import { Container } from "./ui/Container";
import { AuditForm } from "./AuditForm";
import { Backdrop } from "./atmos/Backdrop";

export function Contact() {
  return (
    <section
      id="contact"
      className="grain relative overflow-hidden border-t border-line py-24 md:py-32"
    >
      <Backdrop gridMask="center" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-bg-raised/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-rust" aria-hidden />
            Taking projects
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tighter2 text-white md:text-5xl">
            Tell me what you need built.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-ink-muted md:text-lg">
            Tell me about the project. What you have today, what is missing, and
            what it needs to do. I will come back with an honest read on scope
            and whether I am the right person to build it.
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
