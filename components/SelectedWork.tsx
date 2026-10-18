import Link from "next/link";
import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./atmos/Reveal";
import { Brackets } from "./ui/Frame";

const work = [
  {
    tag: "Infrastructure",
    name: "Martian Core",
    role: "Our own backend, and everything runs on it",
    body: "Database, auth, email, secrets and backups behind one plain-English dashboard, built to replace Supabase and Resend when the shelf kept not fitting. On top of it: Watch for uptime and client status pages, Analytics with no cookies, Audit that walks every screen and writes the punch list, Deploy that takes a push to a live domain, and Invoicer. Every project on this site runs on it, including this site.",
    meta: ["Postgres · Node", "Self-hosted", "Built for us first"],
    readouts: [
      { k: "5", label: "Modules in production" },
      { k: "6", label: "Products built on it" },
      { k: "0", label: "Cookies in our analytics" },
    ],
  },
  {
    tag: "AI",
    name: "Joe",
    role: "The social media manager that runs itself",
    body: "For small businesses and small software companies. Joe reads the owner's own photos, site and product repo, writes and schedules the week, answers reviews, and runs outreach with a sales feed the owner works from their phone. Facebook and Instagram publishing approved by Meta. Every post shows something real; no words-on-a-colour cards, ever.",
    meta: ["getjoe.io", "Meta-approved publishing", "Owner approves everything"],
  },
  {
    tag: "Production",
    name: "Sim-Pull",
    role: "Unattended payments + hardware control",
    body: "A guest scans a code on the rig, pays on their phone, and the machine launches itself. Payments, session control, hardware launch, auto-recovery when something freezes, and cross-location leaderboards. Running in three venues on real hardware today.",
    meta: ["3 venues live", "Payments · Hardware", "Auto-recovery"],
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
        description="Three builds that show the range: the backend platform we built because nothing on the shelf fit, an AI product with real platform approvals, and a system that takes payment and drives physical hardware unattended. The industries are incidental. The engineering problems are the point."
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

              {/* Readouts. This is what earns the panel its height. */}
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-7">
              {lead.readouts?.map((r) => (
                <div key={r.label} className="flex flex-col">
                  <dd className="readout text-4xl font-semibold text-white md:text-5xl">
                    {r.k}
                  </dd>
                  <dt className="mt-2 font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-ink-dim">
                    {r.label}
                  </dt>
                </div>
              ))}
              </dl>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5">
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
          See all twelve projects
        </Link>
      </div>
    </Section>
  );
}
