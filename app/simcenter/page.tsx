import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardLabel } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const APP_URL = "https://simcenter.io/app";
const MARKETING_URL = "https://simcenter.io";

export const metadata: Metadata = {
  title: "SimCenter — Station readiness monitoring for indoor venues",
  description:
    "SimCenter watches every station in your venue — sim rigs, launch monitors, VR arcades — from the inside. Answers one question continuously: is every station ready to take money?",
  alternates: { canonical: "/simcenter" },
  openGraph: {
    title: "SimCenter — Station readiness monitoring",
    description:
      "Watches every station in your venue from the inside. Answers one question continuously: is every station ready to take money?",
    url: `${SITE_URL}/simcenter`,
    type: "website",
  },
};

const capabilities = [
  {
    code: "C-01",
    title: "Sees hidden equipment",
    body: "Launch monitors on private point-to-point ethernet. USB devices behind hubs. GPU, display, audio, network adapters, running processes. A per-station agent catches what central scanning cannot.",
  },
  {
    code: "C-02",
    title: "Does not cry wolf",
    body: "Two-cycle confirmation before any alert. 12-hour cooldown per item. Unknown devices are inventory-only, never alertable. When your phone buzzes, something is actually wrong.",
  },
  {
    code: "C-03",
    title: "Remote command center",
    body: "Wake a station over the LAN. Graceful shutdown with a 20-second on-screen notice. Force a fresh scan. Prove the wheel and pedals still work by polling the controller live from your desk.",
  },
  {
    code: "C-04",
    title: "Learns your venue",
    body: "First healthy scan becomes the baseline. Every station learns its own USB loadout, its own network peers, its own normal. No spreadsheets to fill in. No config to maintain.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Sign up",
    body: "Create an account, add your first venue. You get a one-time claim code.",
  },
  {
    step: "02",
    title: "Install the connector",
    body: "One PowerShell command on each station PC. Outbound HTTPS only. Nothing for IT to open.",
  },
  {
    step: "03",
    title: "The board lights up",
    body: "Within one scan cycle, every station reports in. Alerts route to your phone, Discord, Slack, or email.",
  },
];

const simCenterFaqs: FAQItem[] = [
  {
    q: "What is SimCenter?",
    a: "SimCenter is station readiness monitoring for indoor entertainment venues. A small agent runs on each station PC, scans the equipment, software, and network from the inside, and reports to a cloud dashboard. It tells you continuously whether every station in every location is ready to take a paying customer.",
  },
  {
    q: "What venues does it work with?",
    a: "Any venue where expensive machines run without a person standing next to them. Sim racing venues on any sim, indoor golf studios on TrackMan, Foresight, GSPro, or Uneekor, VR arcades, esports lounges, unstaffed self-serve bays, multi-location operators. It is sport-agnostic and hardware-agnostic by design.",
  },
  {
    q: "How does it get installed?",
    a: "One PowerShell command per station PC. The connector is outbound HTTPS only, so there is nothing for IT to open on your firewall. Sign up, add a venue, get a one-time claim code, run the connector on each station, and the dashboard lights up within one scan cycle.",
  },
  {
    q: "Does it work with launch monitors on a private network?",
    a: "Yes. This is the reason SimCenter exists. Launch monitors like the TrackMan iO sit on a point-to-point link-local ethernet segment that is invisible to central scanning tools. Only a per-station agent can see them. SimCenter actively probes learned peer addresses on every scan so a silent-but-dead launch monitor gets caught.",
  },
  {
    q: "How does alerting work? Will it wake me up for nothing?",
    a: "No. Every alert requires two confirmation cycles before it fires, plus a 12-hour cooldown per item. Unknown devices are inventory-only, never alertable. Command chatter (wake, shutdown, scan) never pages anyone. When your phone buzzes, something is actually wrong.",
  },
  {
    q: "What can I do remotely?",
    a: "Four commands, all executed by the connector within about 30 seconds: wake a station over the LAN (Wake-on-LAN), graceful shutdown with a 20-second on-screen notice, force a fresh scan instead of waiting the cycle, and run a live input test that polls the game controllers so you can prove a wheelbase or pedal set is not dead without driving to the venue.",
  },
  {
    q: "Where does it send alerts?",
    a: "Phone push (via ntfy), Discord webhook, Slack webhook, Twilio SMS, and email through Resend. All keys stay on your account, never leave the server, and route through Node standard library HTTP with no third-party alerting dependency.",
  },
  {
    q: "How much does SimCenter cost?",
    a: "Pricing is being finalized. Early venues get a launch price and dedicated setup help. Sign in at simcenter.io/app to get started, or reach out first if you want to talk through fit.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SimCenter",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows",
  description:
    "Multi-tenant station readiness monitoring for indoor entertainment venues. Watches sim rigs, launch monitors, VR arcades, and any station where expensive machines run without staff standing next to them.",
  brand: { "@type": "Brand", name: SITE_NAME },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/simcenter`,
  },
};

export default function SimCenterPage() {
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
              SimCenter · A Martian Industries product
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tighter2 text-white sm:text-5xl md:text-[56px] md:leading-[1.05]">
              Is every station in your venue{" "}
              <span className="text-ink-muted">ready to take money?</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-ink-muted md:text-lg">
              SimCenter watches every station in your venue, from the inside.
              Sim rigs, launch monitors, VR arcades, esports lounges. It
              answers one question continuously, across every location, and
              lets you power stations on and off from anywhere.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href={APP_URL} variant="primary" external>
                Launch SimCenter
                <Arrow />
              </Button>
              <Button href={MARKETING_URL} variant="secondary" external>
                See how it works
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
              <span>Sport-agnostic</span>
              <span aria-hidden>·</span>
              <span>Works with any launch monitor or sim</span>
              <span aria-hidden>·</span>
              <span>Nothing for IT to open</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <Section id="capabilities" className="border-t border-line">
        <SectionHeader
          eyebrow="What it does"
          title="Built from real bays, not a dashboard template."
          description="Every rule inside SimCenter was earned. Launch monitors that hide on link-local. Stale ARP entries that lie about a healthy station. Dongles on desks that pretended to be equipment. The trust mechanics come from years of getting paged at 9pm for things that were not actually broken."
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

      {/* How it works */}
      <Section id="how" className="border-t border-line">
        <SectionHeader
          eyebrow="How it works"
          title="Up and running in one visit to the venue."
          description="No firewalls to open. No hardware to buy. The connector is the only thing you install, once per station."
        />

        <ol className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
          {howItWorks.map((s) => (
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

      {/* Who it is for */}
      <Section id="who" className="border-t border-line">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Who it is for"
              title="Any venue where expensive machines run without a person standing next to them."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-line bg-bg-raised p-6 md:p-8">
              <CardLabel>Fits</CardLabel>
              <ul className="mt-5 grid gap-3 text-[15px] text-ink-muted sm:grid-cols-2">
                {[
                  "Sim racing venues (any sim, any wheelbase)",
                  "Indoor golf studios (TrackMan, Foresight, GSPro, Uneekor)",
                  "VR arcades",
                  "Esports lounges",
                  "Unstaffed self-serve bays",
                  "Multi-location operators",
                ].map((row) => (
                  <li key={row} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-px w-3 shrink-0 bg-rust"
                    />
                    {row}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line pt-5 text-sm text-ink-muted">
                If a $10,000 machine sits alone and you find out it broke when
                a paying customer tells you, SimCenter is the fix.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQ
        id="faq"
        eyebrow="SimCenter FAQ"
        title="Straight answers before you install."
        description="Everything venue operators ask us before signing up. If yours is not here, hit contact and I will answer directly."
        items={simCenterFaqs}
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
              Stop driving to the venue to find out.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-ink-muted md:text-lg">
              Sign in, create your first venue, install the connector on one
              station. The board lights up in the next scan. Nothing else to
              configure.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href={APP_URL} variant="primary" external>
                Launch SimCenter
                <Arrow />
              </Button>
              <Link
                href="/#contact"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim transition-colors hover:text-white"
              >
                Talk to Martian first
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
