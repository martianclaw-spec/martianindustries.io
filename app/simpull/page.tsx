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

const APP_URL = "https://simpullsports.com";

export const metadata: Metadata = {
  title: "Sim-Pull — Case study",
  description:
    "A venue operating system built by Martian Industries. Guests scan, pay, and the machine launches itself, unattended. Payments, hardware control, auto-recovery, and cross-location leaderboards. Live in three venues.",
  alternates: { canonical: "/simpull" },
  openGraph: {
    title: "Sim-Pull — Built by Martian Industries",
    description:
      "Unattended payments and hardware control, built end to end. Guests scan, pay, and the machine launches itself. Live in three venues today.",
    url: `${SITE_URL}/simpull`,
    type: "website",
  },
};

const capabilities = [
  {
    code: "C-01",
    title: "Guest self-serve launches",
    body: "Guest scans a QR on the rig, pays on their own phone, picks a session, and the rig launches itself. No front desk in the loop. Removes the throughput ceiling that comes from one staff member managing every launch.",
  },
  {
    code: "C-02",
    title: "Auto-recovery",
    body: "Stuck cars and failed launches self-recover. Staff are not babysitting screens waiting for something to freeze. Your team runs the floor, not the software.",
  },
  {
    code: "C-03",
    title: "Cross-rig leaderboards",
    body: "Head-to-head times across every rig in the venue and across every venue in a multi-location operation. Guests see where they stand. Repeat visits go up.",
  },
  {
    code: "C-04",
    title: "Optional AI coaching",
    body: "Live voice cues during a session and a post-session debrief. Turns a walk-in guest into someone who wants to come back and beat their own time.",
  },
];

const proof = [
  { k: "3", label: "Live venues" },
  { k: "6", label: "Rigs running today" },
  { k: "$100", label: "Per rig per month" },
];

const simPullFaqs: FAQItem[] = [
  {
    q: "What is Sim-Pull?",
    a: "Sim-Pull is cloud software for commercial sim racing venues. No new hardware, it runs on the Assetto Corsa rigs the venue already has. The core behavior: a guest scans a QR on the rig, pays on their phone, picks a session, and the rig launches itself. No front desk in the loop.",
  },
  {
    q: "Who is Sim-Pull for?",
    a: "Sim racing venue operators running three or more rigs where staffing is the throughput ceiling. If one person is jogging between rigs launching sessions and taking cards, Sim-Pull is the fix. Solo-operator immersion venues optimizing for high-touch coaching (not throughput) are not the target and we will say so up front.",
  },
  {
    q: "What sims does it work with?",
    a: "Assetto Corsa today. That is what the majority of commercial sim racing venues currently run. If you are on iRacing or another platform, get in touch anyway — we track demand.",
  },
  {
    q: "How much does it cost?",
    a: "$100 per rig per month, or $80 per rig per month billed annually. 14-day free trial. Month-to-month, cancel anytime.",
  },
  {
    q: "Do I need new hardware?",
    a: "No. Sim-Pull runs on the AC rigs you already have. The kiosk experience is on the guest's phone via a QR scan. No tablets, no card readers, no new PCs.",
  },
  {
    q: "Can you build something like this for me?",
    a: "Yes. The hard parts of Sim-Pull are the transferable ones: taking payment on a phone, driving physical hardware from that payment, recovering automatically when something freezes, and keeping it all running unattended. That pattern applies well beyond sim racing. <a href=\"/#contact\">Start a scoping call</a> and tell me what you are trying to run.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sim-Pull",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows",
  description:
    "Venue management software for sim racing venues. Guest self-serve launches, auto-recovery, cross-rig leaderboards, and optional AI coaching. Runs on existing Assetto Corsa rigs.",
  brand: { "@type": "Brand", name: "Sim-Pull" },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  offers: {
    "@type": "Offer",
    price: "100",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: APP_URL,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "100",
      priceCurrency: "USD",
      unitText: "per rig per month",
    },
  },
  url: APP_URL,
};

export default function SimPullPage() {
  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Backdrop ridge />

        <Container className="relative">
          <div className="mx-auto max-w-3xl pb-16 pt-16 text-center md:pb-24 md:pt-24">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-bg-raised/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-rust" aria-hidden />
              Case study · Built by Martian Industries
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tighter2 text-white sm:text-5xl md:text-[56px] md:leading-[1.05]">
              The operating system{" "}
              <span className="text-ink-muted">for sim racing venues.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-ink-muted md:text-lg">
              A guest scans a code on the machine, pays on their phone, and
              the hardware launches itself with no staff in the loop. One of
              the clearest examples of what I build: payments, physical
              hardware control, and unattended recovery in one system. Running
              in three venues today.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/#contact" variant="primary">
                Discuss a build like this
                <Arrow />
              </Button>
              <Button href={APP_URL} variant="secondary" external>
                Visit simpullsports.com
              </Button>
            </div>

            <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 sm:gap-6 border-t border-line pt-6">
              {proof.map((p) => (
                <div key={p.label} className="flex flex-col">
                  <dt className="font-mono text-[10px] uppercase leading-tight tracking-[0.1em] text-ink-dim sm:text-[11px] sm:tracking-[0.16em]">
                    {p.label}
                  </dt>
                  <dd className="mt-auto pt-1 text-xl font-semibold tracking-tighter2 text-white sm:text-2xl">
                    {p.k}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <Section id="capabilities" className="border-t border-line">
        <SectionHeader
          eyebrow="What Sim-Pull does"
          title="Removes the staff bottleneck without removing the operator."
          description="Sim-Pull is not a booking tool. It is what happens when a booked guest walks up to a rig: the scan, the payment, the launch, the recovery, the leaderboard, the debrief. All of it, without a person on the floor for each step."
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
            </Card>
          ))}
        </div>
      </Section>

      {/* Positioning against the alternative */}
      <Section id="fit" className="border-t border-line">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeader
              eyebrow="Fit"
              title="Sim-Pull is for the throughput model, not the immersion model."
            />
            <p className="mt-6 text-pretty text-base text-ink-muted md:text-lg">
              There are two viable business models in sim racing venues.
              Sim-Pull is built for one of them. If yours is the other, we
              will say so up front and refer you elsewhere.
            </p>
          </div>
          <div className="min-w-0 lg:col-span-7 space-y-4">
            <div className="rounded-lg border border-line bg-bg-raised p-6 md:p-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust-soft">
                Throughput model · Sim-Pull ICP
              </div>
              <p className="mt-3 text-[15px] text-ink-muted">
                Many rigs. Staff is minimized because staff is the throughput
                ceiling. Guests self-serve where possible. Success is high
                utilization at peak and sessions turning over without a person
                touching every launch. This is what Sim-Pull is built for.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-bg-panel p-6 md:p-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                Immersion model · Not a Sim-Pull ICP
              </div>
              <p className="mt-3 text-[15px] text-ink-muted">
                Few rigs. Solo operator or tight team. High-touch coaching is
                a feature, not overhead. AV investment, curated car and track
                pairings, memorable moments. Sim-Pull would remove your
                differentiator. Do not use it.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQ
        id="faq"
        eyebrow="Sim-Pull FAQ"
        title="Straight answers before you book a demo."
        description="If yours is not here, book the demo and ask on the call. No pitch during the first three minutes, that is a rule."
        items={simPullFaqs}
      />

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <Backdrop gridMask="center" />

        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tighter2 text-white md:text-5xl">
              Need something like this built?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-ink-muted md:text-lg">
              Unattended payments, hardware control, and recovery are the
              hardest parts of a build like this, and the parts I have already
              shipped. Tell me what you are trying to run.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/#contact" variant="primary">
                Start a scoping call
                <Arrow />
              </Button>
              <Link
                href="/work"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim transition-colors hover:text-white"
              >
                See other builds
              </Link>
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
