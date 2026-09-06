import { Section, SectionHeader } from "./ui/Section";
import { CardLabel } from "./ui/Card";

export function About() {
  return (
    <Section id="about" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-7">
          <SectionHeader
            eyebrow="About"
            title="I ran the business first. That changes the software."
          />
          <div className="mt-6 space-y-5 text-pretty text-base text-ink-muted md:text-lg">
            <p>
              Martian Industries is the software studio of Matthew Myers. One
              engineer, start to finish. The person who scopes your project is
              the person who writes the code.
            </p>
            <p>
              Before I built software for operations, I ran them. Live customer
              problems, hardware dying mid-session, staff who need the system
              to work when nobody technical is on site. I have been the person
              a failure lands on at the worst possible hour.
            </p>
            <p>
              That shows up in what I build. The failure paths get handled,
              because I know what happens downstream when they are not. Sessions
              recover on their own. Payments reconcile. The dashboard tells you
              something is wrong before a customer does. That is the difference
              between software that demos well and software you can actually
              put in front of paying customers.
            </p>
            <p className="text-ink">
              Most of my work now is building that kind of system for other
              people. Booking and payments, hardware integrations, internal
              tools, and AI that does real work instead of talking about it.
            </p>
          </div>
        </div>

        <aside className="min-w-0 lg:col-span-5">
          <div className="rounded-lg border border-line bg-bg-raised p-6">
            <CardLabel>Operating principles</CardLabel>
            <ul className="mt-5 space-y-4">
              {[
                {
                  k: "Build for the bad day",
                  v: "A system is judged by what it does when something fails, not by the happy path.",
                },
                {
                  k: "Boring, then clever",
                  v: "Reliable beats impressive. I earn complexity before I spend it.",
                },
                {
                  k: "Own the whole stack",
                  v: "Frontend, backend, hardware, payments, deploy. No handoffs, no finger pointing.",
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
