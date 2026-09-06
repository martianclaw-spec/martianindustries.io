import Link from "next/link";
import { Section, SectionHeader } from "./ui/Section";
import { Card, CardLabel } from "./ui/Card";
import { Reveal } from "./atmos/Reveal";

const work = [
  {
    tag: "Production",
    name: "Sim-Pull",
    role: "Venue operating system",
    body: "A guest scans a code on the rig, pays on their phone, and the machine launches itself. Payments, session control, hardware launch, auto-recovery when something freezes, and cross-location leaderboards. Running in three venues on real hardware today.",
    meta: ["3 venues live", "Payments · Hardware", "Full stack"],
  },
  {
    tag: "Production",
    name: "SimBook",
    role: "Booking, payments & scheduling",
    body: "The money path for a multi-location operation. Checkout, priced time slots, a reservation layer that also covers walk-ins and admin blocks, PIN-based check-in, and a multi-tenant model several levels deep. Independently operated. I contribute as a builder on the systems behind it.",
    meta: ["Independently operated", "Supabase · Edge functions", "Multi-tenant"],
  },
  {
    tag: "AI",
    name: "DayPilot",
    role: "Autonomous outreach agent",
    body: "An AI system that researches prospects, decides who is actually worth contacting, writes the email in a specific voice, and runs the follow-up sequence on its own. Built to sell more than one product, and it qualifies people out as readily as in.",
    meta: ["getjoe.io", "Agent workflows", "Research · Sequencing"],
  },
];

export function SelectedWork() {
  return (
    <Section id="work" className="border-t border-line">
      <SectionHeader
        eyebrow="Selected work"
        title="Shipped, in production, still running."
        description="Three builds that show the range: a full-stack system driving physical hardware, a payments and scheduling backend, and an AI agent that does real work unattended."
      />

      <div className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-3">
        {work.map((w, i) => (
          <Reveal key={w.name} delay={i * 90} className="h-full">
          <Card className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <CardLabel>{w.tag}</CardLabel>
              <CardLabel className="text-ink-dim">case</CardLabel>
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tightish text-white">
              {w.name}
            </h3>
            <p className="mt-1 text-sm text-rust-soft">{w.role}</p>
            <p className="mt-4 text-[15px] text-ink-muted">{w.body}</p>
            <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
              {w.meta.map((m) => (
                <li
                  key={m}
                  className="rounded border border-line bg-bg-panel px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-muted"
                >
                  {m}
                </li>
              ))}
            </ul>
          </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/work"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim transition-colors hover:text-white"
        >
          See all eight projects
        </Link>
      </div>
    </Section>
  );
}
