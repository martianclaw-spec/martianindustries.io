import { Section, SectionHeader } from "./ui/Section";
import { DatumRule } from "./ui/Frame";

const lines = [
  {
    k: "Our own platform",
    v: "Martian Core and its modules, which every project on this page runs on. Built for us first, with a product in mind second.",
  },
  {
    k: "Towns and teams",
    v: "A multi-tenant civic platform for small towns, a sales CRM with a daily queue and call cards, and a per-business AI assistant that answers the phone and the website.",
  },
  {
    k: "For friends and family",
    v: "A handful of apps built as gifts or for one household: a media catalog, a private outdoors log, a wall dashboard, a sports pool. Not for sale, and that is why they are good practice.",
  },
  {
    k: "Open source",
    v: "A Model Context Protocol server that lets Claude run real operations workflows through a safe, typed tool surface.",
  },
];

/**
 * Deliberately not a card grid. A labelled list under a datum rule says
 * "here is the rest of the shop" without claiming each item is a flagship.
 */
export function OtherProjects() {
  return (
    <Section id="other" className="border-t border-line">
      <SectionHeader
        eyebrow="Beyond client work"
        title="What else is on the bench."
        description="The studio builds constantly, and most of it never gets a landing page. The same standard applies whether it ships to a client or to one person."
      />

      <div className="mt-12 md:mt-14">
        <DatumRule label="Inventory" value={`${lines.length} lines`} />
        <dl className="mt-6 divide-y divide-line border-b border-line">
          {lines.map((l) => (
            <div
              key={l.k}
              className="grid gap-2 py-5 md:grid-cols-12 md:gap-8"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-rust-soft md:col-span-3 md:pt-1">
                {l.k}
              </dt>
              <dd className="text-[15px] leading-relaxed text-ink-muted md:col-span-9">
                {l.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
