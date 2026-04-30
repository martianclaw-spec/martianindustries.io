import { Section, SectionHeader } from "./ui/Section";
import { CardLabel } from "./ui/Card";

export function About() {
  return (
    <Section id="about" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="About"
            title="I run simulator venues. I also build the systems they run on."
          />
          <div className="mt-6 space-y-5 text-pretty text-base text-ink-muted md:text-lg">
            <p>
              Martian Industries is led by an operator-engineer. I&apos;m
              hands-on inside real simulator venues every week, and the same
              hands write the software those venues depend on.
            </p>
            <p>
              Most days that means handling live customer issues, maintaining
              simulator software across locations, keeping bays online, and
              providing remote support when something breaks at a venue
              I&apos;m not standing in. The hardware fails, the software
              hiccups, guests show up, and the system has to keep running
              anyway.
            </p>
            <p>
              The other half of the work is building the systems underneath
              that. Kiosk software that locks and unlocks bays around session
              timers, booking and check-in flows that survive a busy Friday,
              session and operator workflows, and the internal tools my staff
              actually use. I contribute to Simbook on the same basis: kiosk
              behavior, session flow, and system improvements drawn from
              running venues every day.
            </p>
            <p className="text-ink">
              None of this is theoretical. The systems I recommend are shaped
              by the ones I run every day.
            </p>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-lg border border-line bg-bg-raised p-6">
            <CardLabel>Operating principles</CardLabel>
            <ul className="mt-5 space-y-4">
              {[
                {
                  k: "Operator first",
                  v: "Every system gets evaluated from behind the counter, not behind a webcam.",
                },
                {
                  k: "Boring, then clever",
                  v: "Reliable systems beat impressive ones. I earn complexity.",
                },
                {
                  k: "Own the stack",
                  v: "I work across booking, hardware, software, and back office, not one slice.",
                },
                {
                  k: "Hand it back clean",
                  v: "You should be able to run what I build without me in the room.",
                },
              ].map((p) => (
                <li
                  key={p.k}
                  className="flex gap-4 border-t border-line pt-4 first:border-t-0 first:pt-0"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-px w-4 shrink-0 bg-rust"
                  />
                  <div>
                    <div className="text-sm font-medium text-white">{p.k}</div>
                    <div className="mt-1 text-sm text-ink-muted">{p.v}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
