import { Container } from "./ui/Container";
import { JsonLd } from "./JsonLd";

export type FAQItem = {
  q: string;
  /** Plain text or short HTML string. Kept as string so it can flow into JSON-LD verbatim. */
  a: string;
};

type FAQProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: FAQItem[];
  /** When true, emits FAQPage JSON-LD (default). Set false to render only the visible list. */
  emitSchema?: boolean;
};

/**
 * Semantic <details>/<summary> accordion + FAQPage JSON-LD.
 * Google surfaces FAQPage rich results as expandable accordions in SERPs, and
 * feeds them into AI Overviews. This is the single highest-visibility SEO add
 * for high-intent pages.
 *
 * Answers in the JSON-LD strip HTML — Google wants plain text there. The
 * visible answer can still contain formatting via allowRawHtml.
 */
export function FAQ({
  id = "faq",
  eyebrow = "Straight answers",
  title,
  description,
  items,
  emitSchema = true,
}: FAQProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(it.a),
      },
    })),
  };

  return (
    <section id={id} className="relative border-t border-line py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-rust-soft">
              <span className="inline-block h-px w-6 bg-rust" aria-hidden />
              <span className="font-mono">{eyebrow}</span>
            </div>
          ) : null}
          <h2 className="text-balance text-3xl font-semibold tracking-tighter2 text-white md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-pretty text-base text-ink-muted md:text-lg">
              {description}
            </p>
          ) : null}
        </div>

        <ul className="mt-12 divide-y divide-line rounded-lg border border-line bg-bg-raised md:mt-16">
          {items.map((it) => (
            <li key={it.q}>
              <details className="group px-5 py-4 md:px-7 md:py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                  <span className="text-[15px] font-medium text-white md:text-base">
                    {it.q}
                  </span>
                  <PlusMinus />
                </summary>
                <div
                  className="mt-3 max-w-none text-[15px] leading-relaxed text-ink-muted md:text-base [&_a]:text-rust-soft [&_a]:underline-offset-4 [&_a:hover]:underline"
                  dangerouslySetInnerHTML={{ __html: it.a }}
                />
              </details>
            </li>
          ))}
        </ul>
      </Container>

      {emitSchema ? <JsonLd data={schema} /> : null}
    </section>
  );
}

function PlusMinus() {
  return (
    <span
      aria-hidden
      className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-line text-ink-dim transition-colors group-open:border-rust/60 group-open:text-rust-soft"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5h6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M5 2v6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="transition-opacity duration-150 group-open:opacity-0"
        />
      </svg>
    </span>
  );
}

/** Strip HTML tags for the JSON-LD answer text. Google wants plain text there. */
function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}
