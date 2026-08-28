import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardLabel } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom software for simulator venues",
  description:
    "Operator-built custom software for simulator venues that do not fit the shelf. 24-hour unstaffed lounges, custom booking flows, kiosk integrations with existing hardware, and operator-specific dashboards. Built by Martian Industries.",
  alternates: { canonical: "/build" },
  openGraph: {
    title: "Custom software for simulator venues — Martian Industries",
    description:
      "24-hour unstaffed lounges. Custom booking flows. Kiosk integrations with existing hardware. Built by operators who run venues.",
    url: `${SITE_URL}/build`,
    type: "website",
  },
};

const scenarios = [
  {
    code: "S-01",
    title: "24-hour unstaffed venues",
    body: "Guests book on their phone, arrive after hours, unlock the door, launch their bay, and leave. Nobody on site. The software has to work every time or the venue closes. This is the hardest kind of custom build and the one operators most often need.",
  },
  {
    code: "S-02",
    title: "Custom booking + kiosk flows",
    body: "The off-the-shelf booking tools cover 80 percent of what a venue needs. The last 20 percent (member tiers with venue-specific rules, corporate package flows, event kiosks, on-site check-in that ties to your existing PMS) is where we build.",
  },
  {
    code: "S-03",
    title: "Integrations with your existing hardware",
    body: "You already run TrackMan, Foresight, Uneekor, GSPro, E6, TGC, Assetto Corsa, or a mix. You want the software layer that ties them into your booking, your kiosk, your session timing, and your remote support. We plug into what you have instead of asking you to replace it.",
  },
  {
    code: "S-04",
    title: "Operator dashboards and internal tools",
    body: "Multi-venue rollup dashboards. Staff scheduling that matches your specific model. League and tournament management with rules only your venue uses. Anything you currently do in a spreadsheet that should be a real tool.",
  },
];

const process = [
  {
    step: "01",
    title: "Scoping call",
    body: "One 30-minute call. You describe the venue and the specific pain. We describe whether it is a build, a Sim-Pull or SimCenter deployment, or a mix. No cost, no obligation.",
  },
  {
    step: "02",
    title: "Fixed-scope proposal",
    body: "Within a few days we send back a written proposal: what we build, how long it takes, what it costs, what we need from you. Priced by milestone, not by hour. You know the total before you sign.",
  },
  {
    step: "03",
    title: "Build in the open",
    body: "Weekly demo of what shipped that week. Working software over documents. You see the venue-facing UI as it grows, not at the end. Change requests get scoped as small next-milestone additions rather than surprise scope creep.",
  },
  {
    step: "04",
    title: "Deploy and hand off",
    body: "We install on the venue's hardware, train your staff, and stay on for a fixed support window. After that, you own the software. No forever-recurring licensing on a custom build unless you specifically want managed hosting.",
  },
];

const buildFaqs: FAQItem[] = [
  {
    q: "Do you build custom software from scratch, or only deploy Sim-Pull and SimCenter?",
    a: "Both. Sim-Pull and SimCenter are our products for the common cases. When a venue needs something that does not fit either one, we build it. The Sweden operator asking for a 24-hour unstaffed golf lounge with custom booking is a good example: the answer there is a custom build, not a productized deployment.",
  },
  {
    q: "What is a typical engagement length and cost?",
    a: "Most engagements are four to eight weeks and priced per milestone. Simple builds (a custom booking flow tied to existing hardware) are shorter and cheaper. Complex builds (a fully unstaffed 24-hour venue with door access, payment, session control, and remote support) are longer and priced accordingly. Exact numbers come out of the scoping call, in writing, before you commit.",
  },
  {
    q: "What kind of venues do you build for?",
    a: "Indoor golf simulator studios, sim racing venues, VR arcades, esports lounges, mixed indoor entertainment venues. Any venue where expensive machines run for paying customers and staff overhead is a real cost. We do not build consumer-facing golf apps or gamer-facing racing apps. We build the systems the venue operator uses to run the business.",
  },
  {
    q: "Do you work internationally?",
    a: "Yes. Time zones just move the demo call. Payment and contracting handled through standard international agreements. Most of the work is remote regardless of where you are, with one or two on-site visits for the physical installation depending on scope.",
  },
  {
    q: "Do I own the code you write?",
    a: "Yes. Custom builds are work-for-hire. When the engagement ends, you own the source, the deployment, and the venue-specific IP. The only exception is any reusable component that we contribute back into Sim-Pull or SimCenter, which stays under our ownership so we can maintain it across every venue that uses it.",
  },
  {
    q: "How do you decide whether to build custom or use Sim-Pull / SimCenter?",
    a: "Sim-Pull covers sim racing venue operations if you run Assetto Corsa rigs. SimCenter covers station readiness monitoring for any venue with expensive equipment. If your ask fits either one, we deploy the product because it is faster, cheaper, and battle-tested. If your ask does not fit, we build. Most venues actually end up with a mix: a custom booking flow on top of SimCenter monitoring, or a Sim-Pull deployment with custom kiosk branding.",
  },
  {
    q: "Who actually writes the code?",
    a: "Matthew, the founder, is the one writing the code. Martian Industries is deliberately not a dev shop. The person who scopes the engagement is the same person building it and the same person you talk to when something breaks. That has trade-offs: you get someone with deep operator context and no handoff between sales and engineering, but capacity is limited so we are selective about which builds we take on.",
  },
  {
    q: "How do I start?",
    a: "Fill out the <a href=\"/#contact\">contact form</a>, email hello@martianindustries.io, or call (814) 215-7925. Include one paragraph on the venue, what you have today, and what specifically is missing. The scoping call happens on Zoom within a few business days.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom software for simulator venues",
  serviceType: "Custom software development for indoor entertainment venues",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: "hello@martianindustries.io",
    telephone: "+1-814-215-7925",
  },
  areaServed: "Worldwide",
  description:
    "Operator-built custom software for simulator venues. 24-hour unstaffed lounges, custom booking flows, kiosk integrations with existing hardware, and operator-specific dashboards. Fixed-scope engagements with milestone pricing.",
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Operators of indoor golf simulator studios, sim racing venues, VR arcades, esports lounges, and mixed indoor entertainment venues",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/build`,
    description:
      "Scoping call is free. Custom-build engagements are typically 4 to 8 weeks, priced per milestone.",
  },
};

export default function BuildPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-rust/10 blur-[120px]"
        />

        <Container className="relative">
          <div className="mx-auto max-w-3xl pb-16 pt-16 text-center md:pb-24 md:pt-24">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-bg-raised/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-rust" aria-hidden />
              Custom builds · A Martian Industries service
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tighter2 text-white sm:text-5xl md:text-[56px] md:leading-[1.05]">
              Custom-built systems{" "}
              <span className="text-ink-muted">
                for simulator venues that do not fit the shelf.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-ink-muted md:text-lg">
              Sometimes the venue you are running needs a system that does not
              exist yet. A 24-hour unstaffed golf lounge with your own booking
              flow. A kiosk that ties into a launch monitor no one else
              supports. An operator dashboard designed around your specific
              hours and staff model. Martian Industries builds those.
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
              <span>Operator-led</span>
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
          eyebrow="When to build custom"
          title="The four scenarios that show up over and over."
          description="If the venue you run looks like any of these, custom is faster than trying to bend an off-the-shelf tool into a shape it was never meant to take."
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
          description="You know what you are getting before you sign, you see it working while we build it, and you own it when we are done."
        />

        <ol className="mt-12 grid gap-4 md:mt-16 md:grid-cols-4">
          {process.map((s) => (
            <li
              key={s.step}
              className="rounded-lg border border-line bg-bg-raised p-6 md:p-7"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust-soft">
                Step {s.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tightish text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] text-ink-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Recent builds */}
      <Section id="proof" className="border-t border-line">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeader
              eyebrow="Recent builds"
              title="Two products came out of custom engagements. Yours can too."
            />
            <p className="mt-6 text-pretty text-base text-ink-muted md:text-lg">
              Every product Martian Industries ships started as a custom
              build for a specific venue. Some stay one-off. Some grow into
              things every venue eventually wants.
            </p>
          </div>
          <div className="min-w-0 lg:col-span-7 space-y-4">
            <div className="rounded-lg border border-line bg-bg-raised p-6 md:p-7">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust-soft">
                  Case · Sim-Pull
                </div>
                <Link
                  href="/simpull"
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim transition-colors hover:text-white"
                >
                  Details →
                </Link>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tightish text-white">
                Sim racing venue operating system
              </h3>
              <p className="mt-3 text-[15px] text-ink-muted">
                Started as a custom build for a three-location sim racing
                operator. Handles booking, payment, session launching,
                cross-rig leaderboards, and AI coaching. Now productized and
                available to other operators.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-bg-raised p-6 md:p-7">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust-soft">
                  Case · SimCenter
                </div>
                <Link
                  href="/simcenter"
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim transition-colors hover:text-white"
                >
                  Details →
                </Link>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tightish text-white">
                Multi-tenant station readiness monitoring
              </h3>
              <p className="mt-3 text-[15px] text-ink-muted">
                Grew out of the specific pain of debugging silent launch
                monitor failures across live venues. Per-station connector +
                cloud dashboard. Sport-agnostic. Now available for any venue
                with unattended stations.
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
        description="If yours is not here, the scoping call is the place to ask."
        items={buildFaqs}
      />

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rust/10 blur-[120px]"
        />

        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tighter2 text-white md:text-5xl">
              Tell me about the venue.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-ink-muted md:text-lg">
              One paragraph on what you have today and what specifically is
              missing. Scoping call happens on Zoom within a few business
              days. Written proposal follows within a week.
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
