import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./atmos/Reveal";

const capabilities = [
  {
    code: "C-01",
    title: "Booking, payments & scheduling",
    body: "The money path. Customers pick a time, pay, and get what they paid for, without a person in the loop for every step. We have built this end to end and kept it running through real Friday nights.",
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

/**
 * Rendered as a specification sheet rather than a grid of cards: full-bleed
 * numbered rows, one capability per line, with the detail column set apart on
 * the right. The uniform card grid is the single most recognisable tell of a
 * generated page, and a datasheet is both less common and closer to what this
 * studio actually is.
 */
export function Capabilities() {
  return (
    <Section id="capabilities" className="border-t border-line">
      <SectionHeader
        eyebrow="What we build"
        title="Four kinds of software we get hired to build."
        description="Most of our work sits in one of these four buckets, and the interesting projects touch more than one. What we do not care about is your industry: a checkout flow does not know whether it is selling a booking, a subscription, or a ticket."
      />

      <div className="mt-14 border-t border-line md:mt-20">
        {capabilities.map((c, i) => (
          <Reveal key={c.code} delay={i * 60}>
            <div className="group relative grid gap-x-8 gap-y-5 border-b border-line py-9 transition-colors duration-300 hover:bg-bg-raised/40 md:grid-cols-12 md:py-11">
              {/* Fill that draws down the left edge on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-rust transition-transform duration-500 group-hover:scale-y-100"
              />

              <div className="flex items-baseline gap-4 md:col-span-3 md:block">
                <span className="readout text-4xl font-semibold text-line-strong transition-colors duration-300 group-hover:text-rust md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim md:mt-3 md:block">
                  {c.code}
                </span>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-xl font-semibold tracking-tightish text-white md:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                  {c.body}
                </p>
              </div>

              <ul className="space-y-2.5 md:col-span-4">
                {c.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em] text-ink-dim"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1 w-1 shrink-0 bg-rust/70"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
