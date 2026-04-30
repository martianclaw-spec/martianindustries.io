import { Section, SectionHeader } from "./ui/Section";
import { Card, CardLabel } from "./ui/Card";

const work = [
  {
    tag: "Operator",
    name: "Hacktivist Sports",
    role: "3-location simulator operation",
    body: "Active operations across three locations running TrackMan golf bays and sim racing rigs. I run the day-to-day stack: bookings, check-in, simulator software, integrations between systems, and remote management of bays at locations I'm not standing in.",
    meta: ["3 locations", "TrackMan · Sim racing", "Live ops · Remote support"],
  },
  {
    tag: "Product",
    name: "Sim-Pull",
    role: "Sim racing VMS, in development",
    body: "A venue management system pulled directly out of running sim racing operations. Built to reduce staff dependency for routine session control and give operators tighter, lower-friction control of bays, sessions, and bookings.",
    meta: ["In development", "Sim racing", "Operator tooling"],
  },
  {
    tag: "Contributor",
    name: "Simbook",
    role: "Kiosk and VMS for sim venues",
    body: "Independently operated kiosk and venue management product for simulator venues. Martian Industries works closely with Simbook and implements it in simulator venues for booking, kiosk, and session systems. I contribute as an operator, focused on how these systems actually run in live venues.",
    meta: ["Independently operated", "Kiosk · Session flow"],
  },
];

export function SelectedWork() {
  return (
    <Section id="work" className="border-t border-line">
      <SectionHeader
        eyebrow="Selected Work"
        title="Built, operated, and shipped. Not slides."
        description="Three projects rooted in real venue operations: an operation I run, a system I'm building from it, and a product I work closely with as an operator."
      />

      <div className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-3">
        {work.map((w) => (
          <Card key={w.name} className="flex flex-col">
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
        ))}
      </div>
    </Section>
  );
}
