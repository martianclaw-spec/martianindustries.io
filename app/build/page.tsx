import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardLabel } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { Backdrop } from "@/components/atmos/Backdrop";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom software development",
  description:
    "Fixed-scope custom software builds with no handoff after the sale. Booking and payment flows, hardware and third-party integrations, internal tools and dashboards, and AI tooling. Milestone pricing, weekly demos, you own the code.",
  alternates: { canonical: "/build" },
  openGraph: {
    title: "Custom software development — Martian Industries",
    description:
      "Production software designed, built, and shipped by the people who scoped it. Fixed scope, milestone pricing, full IP transfer.",
    url: `${SITE_URL}/build`,
    type: "website",
  },
};

const scenarios = [
  {
    code: "S-01",
    title: "The system that does not exist yet",
    body: "You have a process in your head, a business that depends on it, and nothing on the market that does it. Greenfield builds are the clearest kind of engagement: no legacy to fight, a real problem to solve, and a working demo in your hands inside two weeks.",
  },
  {
    code: "S-02",
    title: "The last twenty percent",
    body: "Off-the-shelf software covers most of what you need and then stops exactly where your business gets specific. Custom member tiers, a checkout flow your vendor will not build, a reporting view nobody else needs. That gap is usually small, valuable, and worth owning.",
  },
  {
    code: "S-03",
    title: "Software that touches the physical world",
    body: "Machines, kiosks, door access, launch monitors, point of sale. Anything running unattended where a crash means a customer standing there with money in their hand. This is the work most shops quietly decline, and it is the work we like most.",
  },
  {
    code: "S-04",
    title: "The spreadsheet that became load-bearing",
    body: "Something started as a quick sheet and is now how the business runs. Nobody fully trusts it, one person understands it, and it breaks quietly. Turning that into a real tool with real permissions and real history is some of the highest-return work available.",
  },
];

const process = [
  {
    step: "01",
    title: "Scoping call",
    body: "Thirty minutes. You describe the problem and what you have today. We tell you honestly whether we are the right team for it. No cost, no obligation, no pitch in the first three minutes.",
  },
  {
    step: "02",
    title: "Fixed-scope proposal",
    body: "Within a few days you get it in writing: what gets built, how long it takes, what it costs, and what we need from you. Priced by milestone, not by hour. You know the total before you sign anything.",
  },
  {
    step: "03",
    title: "Build in the open",
    body: "A working demo every week. Real software over documents. You watch the thing take shape instead of waiting for a reveal. Change requests get scoped into the next milestone rather than becoming surprise scope creep.",
  },
  {
    step: "04",
    title: "Ship and hand off",
    body: "Deployed on your infrastructure, your team trained, and a fixed support window after launch. Then you own it: source, deployment, and IP. No forever-licensing on a custom build unless you specifically want managed hosting.",
  },
];

const buildFaqs: FAQItem[] = [
  {
    q: "What kind of software do you build?",
    a: "Four broad areas: booking, payments and scheduling; hardware and third-party integrations; internal tools and operator dashboards; and AI agents and automation. The common thread is software that has to survive contact with real users and real money, not prototypes and not marketing sites.",
  },
  {
    q: "What is a typical engagement length and cost?",
    a: "Most engagements run four to eight weeks and are priced per milestone. Simple builds such as a custom checkout flow tied to systems you already have are shorter and cheaper. Complex builds such as a fully unattended location with door access, payment, session control, and remote support are longer and priced accordingly. Exact numbers come out of the scoping call, in writing, before you commit.",
  },
  {
    q: "Why fixed scope instead of hourly?",
    a: "Hourly pricing puts us on opposite sides of the table: every hour we spend is a cost to you and revenue to us. Milestone pricing means we both want the same thing, which is working software as quickly as possible. It also means you can plan around a number instead of watching a meter.",
  },
  {
    q: "Do I own the code you write?",
    a: "Yes. Custom builds are work-for-hire. When the engagement ends you own the source, the deployment, and the project-specific IP. The only exception is any reusable component we contribute back into our own products, which stays under our ownership so we can keep maintaining it across every project that uses it.",
  },
  {
    q: "What do you build with?",
    a: "Usually TypeScript end to end: Next.js and React on the front, Node or Deno edge functions on the back, Postgres through Supabase for data and auth, deployed on Vercel. For device and hardware work, whatever the equipment actually speaks. We deliberately pick boring, well-supported tools so you are not stranded on something exotic after handoff.",
  },
  {
    q: "Who actually writes the code?",
    a: "We do. Martian Industries is deliberately not a dev shop. The person who scopes your project is the person building it and the person you call when something breaks. The trade-off is real: you get deep context and no handoff between sales and engineering, but capacity is limited, so we are selective about what we take on.",
  },
  {
    q: "Do you work internationally?",
    a: "Yes. Time zones just move the call. Contracting is handled through standard international agreements. Almost all of the work is remote regardless of where you are, with on-site visits only when a physical installation genuinely requires one.",
  },
  {
    q: "What if the project is bigger than you can take on?",
    a: "We will tell you before you sign, not halfway through. Some projects genuinely need a bigger team than we are, and pretending otherwise wastes your money and our reputation. In those cases we would rather scope down to the part we can own completely, or point you somewhere else.",
  },
  {
    q: "How do I start?",
    a: "Fill out the <a href=\"/#contact\">contact form</a>, email hello@martianindustries.io, or call (814) 215-7925. Include one paragraph on what you have today, what is missing, and what it needs to do. The scoping call happens on Zoom within a few business days.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom software development",
  serviceType: "Custom software design, development, and deployment",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: "hello@martianindustries.io",
    telephone: "+1-814-215-7925",
  },
  areaServed: "Worldwide",
  description:
    "Fixed-scope custom software builds with no handoff between the people who scope the work and the people who build it. Booking and payment flows, hardware and third-party integrations, internal tools and operator dashboards, and AI agents and automation. Milestone pricing with full source and IP transfer on completion.",
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Founders and operators who need production software designed, built, and shipped",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#contact`,
    description:
      "Scoping call is free. Projects are quoted at a fixed price per milestone before any commitment.",
  },
};

export default function BuildPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Backdrop ridge />

        <Container className="relative">
          <div className="mx-auto max-w-3xl pb-16 pt-16 text-center md:pb-24 md:pt-24">
            <div className="mb-6 inline-flex max-w-full items-center gap-2.5 border border-line bg-bg-raised/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-rust"
                aria-hidden
              />
              <span className="min-w-0">Services · Custom builds</span>
            </div>

            <h1 className="text-balance break-words text-[clamp(2rem,7.5vw,2.25rem)] font-semibold tracking-tighter2 text-white sm:text-5xl md:text-[56px] md:leading-[1.05]">
              Software built for the day{" "}
              <span className="text-ink-muted">something goes wrong.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-ink-muted md:text-lg">
              Anyone can build the happy path. We build the version that keeps
              taking money when the hardware drops offline, the payment
              provider times out, and there is nobody technical in the
              building. Fixed scope, milestone pricing, and you own everything
              at the end.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/#contact" variant="primary">
                Start a scoping call
                <Arrow />
              </Button>
              <Link
                href="#process"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim transition-colors hover:text-white"
              >
                See how engagements work
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
              <span>No junior handoff</span>
              <span aria-hidden>·</span>
              <span>Fixed scope, milestone pricing</span>
              <span aria-hidden>·</span>
              <span>You own the code</span>
            </div>
          </div>
        </Container>
      </section>

      {/* When custom fits */}
      <Section id="scenarios" className="border-t border-line">
        <SectionHeader
          eyebrow="When custom is the answer"
          title="Four situations that show up over and over."
          description="If your problem looks like one of these, building is usually faster than bending an off-the-shelf tool into a shape it was never meant to take."
        />

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
          {scenarios.map((s) => (
            <Card key={s.code} className="flex flex-col">
              <div className="flex items-center justify-between">
                <CardLabel>{s.code}</CardLabel>
                <CardLabel className="text-ink-dim">scenario</CardLabel>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tightish text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] text-ink-muted">{s.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" className="border-t border-line">
        <SectionHeader
          eyebrow="How engagements work"
          title="Fixed scope, milestone pricing, weekly demos."
          description="You know what you are getting before you sign, you watch it working while it is being built, and you own it when it ships."
        />

        <ol className="relative mt-14 grid gap-10 md:mt-20 md:grid-cols-4 md:gap-8">
          {/* The line the whole engagement runs along */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-[5px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line md:left-0 md:top-[5px] md:h-px md:w-full"
          />
          {process.map((s) => (
            <li key={s.step} className="group relative pl-8 md:pl-0 md:pt-10">
              <span
                aria-hidden
                className="absolute left-0 top-1.5 h-2.5 w-2.5 bg-rust transition-transform duration-300 group-hover:scale-125 md:top-0"
              />
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rust-soft">
                Step {s.step}
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tightish text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Recent builds */}
      <Section id="proof" className="border-t border-line">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeader
              eyebrow="Proof"
              title="Two of these started as one-off builds and became products."
            />
            <p className="mt-6 text-pretty text-base text-ink-muted md:text-lg">
              Both are running in production on real hardware, taking real
              money, today. The full list of what we have shipped is on the{" "}
              <Link
                href="/work"
                className="text-rust-soft underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                work page
              </Link>
              .
            </p>
          </div>
          <div className="min-w-0 lg:col-span-7 space-y-4">
            <div className="border border-line bg-bg-raised p-6 md:p-7">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust-soft">
                  Case · Sim-Pull
                </div>
                <Link
                  href="/simpull"
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim transition-colors hover:text-white"
                >
                  Details
                </Link>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tightish text-white">
                Payments and hardware control, unattended
              </h3>
              <p className="mt-3 text-[15px] text-ink-muted">
                A customer scans a code, pays on their phone, and a physical
                machine launches itself with no staff involved. Session
                control, auto-recovery when something freezes, and
                cross-location leaderboards. Running across three locations.
              </p>
            </div>
            <div className="border border-line bg-bg-raised p-6 md:p-7">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust-soft">
                  Case · SimCenter
                </div>
                <Link
                  href="/simcenter"
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim transition-colors hover:text-white"
                >
                  Details
                </Link>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tightish text-white">
                Multi-tenant monitoring with a per-machine agent
              </h3>
              <p className="mt-3 text-[15px] text-ink-muted">
                Built to catch equipment failing silently on private network
                segments that central scanning cannot see. A per-machine
                connector reports from the inside to a cloud dashboard, with
                two-cycle confirmation so an alert always means something.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQ
        id="faq"
        eyebrow="Build FAQ"
        title="Straight answers before you book a scoping call."
        description="If yours is not here, the scoping call is the place to ask it."
        items={buildFaqs}
      />

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <Backdrop gridMask="center" />

        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tighter2 text-white md:text-5xl">
              Tell us about the project.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-ink-muted md:text-lg">
              One paragraph on what you have today and what specifically is
              missing. The scoping call happens on Zoom within a few business
              days, and a written proposal follows within a week.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/#contact" variant="primary">
                Start a scoping call
                <Arrow />
              </Button>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                hello@martianindustries.io · (814) 215-7925
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="transition-transform duration-150 group-hover:translate-x-0.5"
    >
      <path
        d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
