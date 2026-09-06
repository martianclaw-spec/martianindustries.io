import { Section, SectionHeader } from "./ui/Section";
import { Card, CardLabel } from "./ui/Card";

const capabilities = [
  {
    code: "C-01",
    title: "Booking, payments & scheduling",
    body: "The money path. Customers pick a time, pay, and get what they paid for, without a person in the loop for every step. I have built this end to end and kept it running through real Friday nights.",
    bullets: [
      "Checkout, deposits, and refunds",
      "Calendars, capacity, and no-show policy",
      "Self-serve kiosk and check-in flows",
    ],
  },
  {
    code: "C-02",
    title: "Hardware & third-party integrations",
    body: "The layer nobody wants to own. Talking to physical equipment, legacy APIs, and vendor systems that were never designed to be talked to, then making that reliable enough to sell against.",
    bullets: [
      "Device control and telemetry agents",
      "Vendor and platform API integration",
      "Payments, POS, and back-office sync",
    ],
  },
  {
    code: "C-03",
    title: "Internal tools & dashboards",
    body: "Everything you currently run out of a spreadsheet, a group chat, and someone's memory. Built to match how the business actually works instead of how a generic SaaS thinks it should.",
    bullets: [
      "Operations and multi-site dashboards",
      "Staff workflows and admin tooling",
      "Reporting that answers real questions",
    ],
  },
  {
    code: "C-04",
    title: "AI tooling & automation",
    body: "Agents and automations wired into your real data and your real systems. Outbound that runs itself, assistants that can actually take action, and tool surfaces that let a model touch production safely.",
    bullets: [
      "Agent workflows and MCP tool servers",
      "Automated outreach and enrichment",
      "Retrieval over your own systems",
    ],
  },
];

export function Capabilities() {
  return (
    <Section id="capabilities" className="border-t border-line">
      <SectionHeader
        eyebrow="What I build"
        title="Four kinds of software I get hired to build."
        description="Most of my work sits in one of these four buckets, and the interesting projects touch more than one. If yours does not fit neatly, that is usually a good sign."
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
