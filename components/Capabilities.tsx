import { Section, SectionHeader } from "./ui/Section";
import { Card, CardLabel } from "./ui/Card";

const capabilities = [
  {
    code: "C-01",
    title: "Booking & Check-In Systems",
    body: "Reduce no-shows, eliminate front-desk friction, and make check-in fast for staff and guests. We tune the funnel from first click to bay-side.",
    bullets: [
      "Online booking flow & conversion",
      "Deposits, holds, and policies",
      "Kiosk and host check-in flows",
    ],
  },
  {
    code: "C-02",
    title: "Simulator Stack Integration",
    body: "Connect launch monitors, sim software, scoring, payment, and POS into one workflow operators can actually control, without duct tape.",
    bullets: [
      "Launch monitor & sim software",
      "Session timing and handoff",
      "POS, payments, and reporting",
    ],
  },
  {
    code: "C-03",
    title: "Remote Support & Reliability",
    body: "Catch failing bays before guests do. Remote diagnostics, reboot tooling, and on-call coverage built for live commercial venues.",
    bullets: [
      "Bay health monitoring",
      "Remote restart & recovery",
      "On-call escalation paths",
    ],
  },
  {
    code: "C-04",
    title: "Custom Tools & Automation",
    body: "Internal tools, dashboards, and operational automations that fit how your venue actually runs, not how a generic SaaS thinks it should.",
    bullets: [
      "Operator dashboards & reporting",
      "Staff workflows and SOP tooling",
      "Back-office automation",
    ],
  },
];

export function Capabilities() {
  return (
    <Section id="capabilities" className="border-t border-line">
      <SectionHeader
        eyebrow="Capabilities"
        title="The systems that decide whether your venue runs cleanly."
        description="Four areas where most simulator venues lose time, money, or guests. We build, fix, and operate them."
      />

      <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
        {capabilities.map((c) => (
          <Card key={c.code} className="flex flex-col">
            <div className="flex items-center justify-between">
              <CardLabel>{c.code}</CardLabel>
              <CardLabel className="text-ink-dim">capability</CardLabel>
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tightish text-white">
              {c.title}
            </h3>
            <p className="mt-3 text-[15px] text-ink-muted">{c.body}</p>
            <ul className="mt-6 space-y-2 border-t border-line pt-5">
              {c.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm text-ink-muted"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-px w-3 shrink-0 bg-rust"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
