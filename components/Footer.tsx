import { Container } from "./ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg-raised/40">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
            Martian Industries · Operations infrastructure for simulator venues
          </div>
          <div className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
            <a
              href="mailto:hello@martianindustries.io"
              className="transition-colors hover:text-ink"
            >
              hello@martianindustries.io
            </a>
            <span className="hidden h-3 w-px bg-line md:inline-block" />
            <span>&copy; {year}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
