import { Section, SectionHeader } from "./ui/Section";
import { Button } from "./ui/Button";
import { CardLabel } from "./ui/Card";

const steps = [
  {
    code: "01",
    title: "Scoping call",
    note: "Thirty minutes. You describe the problem, we tell you honestly whether we are the right team to solve it.",
  },
  {
    code: "02",
    title: "Fixed-scope proposal",
    note: "In writing within a few days: what gets built, how long it takes, what it costs, what we need from you.",
  },
  {
    code: "03",
    title: "Build in the open",
    note: "A working demo every week. You watch the real thing take shape instead of reading status reports.",
  },
  {
    code: "04",
    title: "Ship and hand off",
    note: "Deployed on your infrastructure, your team trained, source and IP transferred, support window included.",
  },
];

const deliverables = [
  "Fixed scope and a fixed price before you commit",
  "A working demo every week, not a status report",
  "Source, deployment, and IP handed over to you",
  "A support window after launch",
];

export function Engagement() {
  return (
    <Section id="process" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <SectionHeader
            eyebrow="Process"
            title="How a build actually works."
            description="Milestone pricing, not open-ended hourly. You know the total before you sign, and you own everything at the end."
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
              The person who scopes your project is the person who writes the
              code and the person you call when something breaks.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="primary">
                Start a project
              </Button>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                Fixed scope · No obligation
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <div className="overflow-hidden rounded-lg border border-line bg-bg-raised">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <CardLabel>Engagement</CardLabel>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                4 steps
              </span>
            </div>
            <ul className="divide-y divide-line">
              {steps.map((item) => (
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
