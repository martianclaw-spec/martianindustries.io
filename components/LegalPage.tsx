import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/Prose";

/** A legal page (privacy, terms, acceptable use): the article layout, plus tables. */
export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="relative">
      <header className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-[0.3] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <Container className="relative">
          <div className="max-w-3xl py-16 md:py-20">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">Legal</p>
            <h1 className="text-balance text-4xl font-semibold tracking-tightish text-white md:text-5xl">{title}</h1>
          </div>
        </Container>
      </header>
      <Container>
        <div className="max-w-3xl py-14 md:py-20">
          <Prose className="[&_.legal-table]:mt-6 [&_.legal-table]:overflow-x-auto [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_td]:border [&_td]:border-line [&_td]:p-3 [&_td]:align-top [&_th]:border [&_th]:border-line [&_th]:bg-bg-panel [&_th]:p-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-white">
            {children}
          </Prose>
        </div>
      </Container>
    </article>
  );
}
