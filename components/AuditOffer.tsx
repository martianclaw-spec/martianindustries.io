import { Section, SectionHeader } from "./ui/Section";
import { Button } from "./ui/Button";
import { CardLabel } from "./ui/Card";

const reviewItems = [
  {
    code: "01",
    title: "Booking and reservation flow",
    note: "How guests book, what blocks them, where revenue leaks.",
  },
  {
    code: "02",
    title: "Customer check-in and kiosk experience",
    note: "Walk-in to bay, including kiosk, host, and self-serve flows.",
  },
  {
    code: "03",
    title: "Simulator software and integrations",
    note: "Sim software, launch monitors, scoring, payment, and POS handoff.",
  },
  {
    code: "04",
    title: "Remote access and support setup",
    note: "How you see, restart, and recover bays without being on site.",
  },
  {
    code: "05",
    title: "Staff workflows and bottlenecks",
    note: "Where staff time leaks and what should come off their plate.",
  },
  {
    code: "06",
    title: "Missed revenue opportunities",
    note: "Idle bays, weak upsell, and leaks in the booking funnel.",
  },
];

const deliverables = [
  "Clear list of issues and risks",
  "Prioritized fixes based on impact",
  "Recommendations for tools and systems",
  "Optional implementation plan",
];

export function AuditOffer() {
  return (
    <Section id="audit" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <SectionHeader
            eyebrow="Process · Audit"
            title="Simulator Venue Systems Audit"
            description="A focused review of how your simulator venue actually runs, from booking to bay usage."
          />

          <div className="mt-8 rounded-lg border border-line bg-bg-raised p-6">
            <CardLabel>What you get</CardLabel>
            <ul className="mt-4 space-y-2.5">
              {deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2.5 text-[15px] text-ink-muted"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-px w-3 shrink-0 bg-rust"
                  />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] text-ink">
              This is based on systems I run and maintain in live simulator
              venues, not theory.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="primary">
                Request an audit
              </Button>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                Focused review · No long-term commitment
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <div className="overflow-hidden rounded-lg border border-line bg-bg-raised">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <CardLabel>What we review</CardLabel>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                6 areas
              </span>
            </div>
            <ul className="divide-y divide-line">
              {reviewItems.map((item) => (
                <li
                  key={item.code}
                  className="flex items-start gap-5 px-5 py-4 transition-colors hover:bg-bg-panel"
                >
                  <span className="font-mono text-[11px] tracking-[0.16em] text-rust-soft">
                    {item.code}
                  </span>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-sm text-ink-muted">
                      {item.note}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
