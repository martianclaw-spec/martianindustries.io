import Link from "next/link";
import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./atmos/Reveal";
import { Brackets } from "./ui/Frame";

const work = [
  {
    tag: "Production",
    name: "Sim-Pull",
    role: "Unattended payments + hardware control",
    body: "A guest scans a code on the rig, pays on their phone, and the machine launches itself. Payments, session control, hardware launch, auto-recovery when something freezes, and cross-location leaderboards. Running in three venues on real hardware today.",
    meta: ["3 venues live", "Payments · Hardware", "Full stack"],
  },
  {
    tag: "Production",
    name: "SimBook",
    role: "Booking, payments & scheduling",
    body: "The money path for a multi-location operation. Checkout, priced time slots, a reservation layer that also covers walk-ins and admin blocks, PIN-based check-in, and a multi-tenant model several levels deep. Independently operated. We contribute as builders on the systems behind it.",
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

/**
 * Deliberately asymmetric. The lead build gets a tall panel with registration
 * marks and room to breathe, the other two sit beside it as compact entries.
 * Three equal cards would say all three matter the same amount, which is both
 * untrue and the layout every generated page reaches for.
 */
export function SelectedWork() {
  const [lead, ...rest] = work;

  return (
    <Section id="work" className="border-t border-line">
      <SectionHeader
        eyebrow="Selected work"
        title="Shipped, in production, still running."
        description="Three builds that show the range: a system that takes payment and drives physical hardware unattended, a payments and scheduling backend, and an AI agent that does real work on its own. The industries they happen to sit in are incidental. The engineering problems are the point."
      />

      <div className="mt-14 grid gap-4 md:mt-20 lg:grid-cols-12">
        {/* Lead build */}
        <Reveal className="min-w-0 lg:col-span-7">
          <article className="group relative flex h-full flex-col justify-between border border-line-strong bg-bg-raised p-7 transition-colors duration-300 hover:border-rust/40 md:p-9">
            <Brackets className="border-rust/50" size="lg" />
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
                <span className="text-rust-soft">{lead.tag}</span>
                <span className="text-ink-dim">Lead build</span>
              </div>
              <h3 className="mt-7 text-3xl font-semibold tracking-tighter2 text-white md:text-4xl">
                {lead.name}
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                {lead.role}
              </p>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-muted">
                {lead.body}
              </p>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5">
              {lead.meta.map((m) => (
                <li
                  key={m}
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim"
                >
                  {m}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        {/* Supporting builds */}
        <div className="grid min-w-0 gap-4 lg:col-span-5">
          {rest.map((w, i) => (
            <Reveal key={w.name} delay={100 + i * 90} className="min-w-0">
              <article className="group relative flex h-full flex-col justify-between border border-line bg-bg-raised/50 p-6 transition-colors duration-300 hover:border-line-strong md:p-7">
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
                    <span className="text-rust-soft">{w.tag}</span>
                    <span className="text-ink-dim">Case</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tightish text-white">
                    {w.name}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    {w.role}
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-ink-muted">
                    {w.body}
                  </p>
                </div>
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
                  {w.meta.map((m) => (
                    <li
                      key={m}
                      className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/work"
          className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-dim transition-colors hover:text-white"
        >
          <span aria-hidden className="h-px w-8 bg-rust transition-all duration-300 group-hover:w-14" />
          See all eight projects
        </Link>
      </div>
    </Section>
  );
}
