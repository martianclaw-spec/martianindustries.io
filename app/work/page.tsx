import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardLabel } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { Backdrop } from "@/components/atmos/Backdrop";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work — everything we have built",
  description:
    "The full portfolio: venue operating systems, booking and payments backends, monitoring platforms with per-machine agents, AI outreach agents, MCP tooling, and consumer web products. Designed and built by the people who scoped it.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Martian Industries",
    description:
      "Production systems, products, and tools. Designed and built by the people who scoped it.",
    url: `${SITE_URL}/work`,
    type: "website",
  },
};

type Project = {
  tag: string;
  name: string;
  role: string;
  body: string;
  meta: string[];
  href?: string;
  external?: boolean;
};

const projects: Project[] = [
  {
    tag: "Product",
    name: "Sim-Pull",
    role: "The operating system for sim racing venues",
    body: "Guests scan a QR on the rig, pay on their phone, and the rig launches itself. Auto-recovery, cross-rig leaderboards, optional AI coaching. Built inside a live venue and running in three today.",
    meta: ["Live · 3 venues · 6 rigs", "Assetto Corsa", "$100/rig/mo"],
    href: "https://simpullsports.com",
    external: true,
  },
  {
    tag: "Product",
    name: "SimCenter",
    role: "Station readiness monitoring for indoor venues",
    body: "A per-station agent that watches equipment, software, and network from the inside and answers one question continuously: is every station ready to take money? Sport-agnostic, nothing for IT to open.",
    meta: ["Multi-tenant SaaS", "Any launch monitor or sim", "Remote commands"],
    href: "https://simcenter.io",
    external: true,
  },
  {
    tag: "Product",
    name: "DayPilot",
    role: "AI operations system for founders",
    body: "Cold outreach with research-backed drafting, social content automation, calendar orchestration, and an agent fleet that runs overnight. Built to run Martian's own pipeline before anything else.",
    meta: ["AI outreach", "Social automation", "Agent orchestration"],
    href: "https://getjoe.io",
    external: true,
  },
  {
    tag: "Operations",
    name: "Hacktivist Sports",
    role: "3-location simulator operation",
    body: "Active day-to-day operations across three locations running TrackMan golf bays and sim racing rigs. Booking, check-in, simulator software, integrations, and remote management across locations. Live, ongoing operational work.",
    meta: ["3 locations", "TrackMan · Sim racing", "Live ops"],
  },
  {
    tag: "Contributor",
    name: "Simbook",
    role: "Kiosk and VMS for sim venues",
    body: "Booking, payments, and scheduling for a multi-location operation. Checkout, priced time slots, a reservation layer that also covers walk-ins and admin blocks, PIN check-in, and a multi-tenant model several levels deep. Independently operated. We contribute as builders on the systems behind it.",
    meta: ["Independently operated", "Kiosk · Session flow"],
  },
  {
    tag: "Product",
    name: "Palace Picks",
    role: "Phone-first NFL confidence pool",
    body: "Replaced a hand-kept Excel workbook and a weekly email thread for a 23-man NFL confidence pool. Tested scoring engine, live slates, and a UI built for phones at the bar on Sunday.",
    meta: ["23-player pool", "Tested scoring engine"],
    href: "https://palacepicks.com",
    external: true,
  },
  {
    tag: "Product",
    name: "PA Iron Report",
    role: "Heavy-equipment auction intelligence",
    body: "A weekly digest of heavy-equipment auction activity across Pennsylvania and the east coast: what sold and for how much, what closes next, normalized specs, estimated all-in cost, and a deal score against recent comps.",
    meta: ["Weekly digest", "Comps + deal scoring"],
    href: "https://paironreport.com",
    external: true,
  },
  {
    tag: "Open source",
    name: "venue-ops-mcp",
    role: "MCP server for venue operations",
    body: "An open-source MCP server for indoor sports and simulator venue operations. Lets Claude and other MCP clients run real venue workflows through a safe, typed tool surface.",
    meta: ["Open source", "MCP · Claude"],
    href: "https://github.com/martianclaw-spec/venue-ops-mcp",
    external: true,
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Work — Martian Industries",
  url: `${SITE_URL}/work`,
  description:
    "Production systems, products, and tools designed and built by Martian Industries.",
  isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      ...(p.href ? { url: p.href } : {}),
    })),
  },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd data={collectionSchema} />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-[0.3] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <Container className="relative">
          <div className="max-w-3xl py-20 md:py-24">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-bg-raised/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              <span className="h-1 w-1 shrink-0 bg-rust" aria-hidden />
              Work
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tighter2 text-white md:text-5xl">
              Everything we have built and shipped.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base text-ink-muted md:text-lg">
              Every one of these started as a real problem for a real
              business. Some grew into standalone products, some run
              operations every day, and some are tools we needed and could not
              find. One person designed, built, and shipped all of it.
            </p>
          </div>
        </Container>
      </section>

      {/* Project grid */}
      <Section id="projects">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.name} className="flex flex-col">
              <div className="flex items-center justify-between">
                <CardLabel>{p.tag}</CardLabel>
                <CardLabel className="text-ink-dim">case</CardLabel>
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tightish text-white">
                {p.name}
              </h2>
              <p className="mt-1 text-sm text-rust-soft">{p.role}</p>
              <p className="mt-4 text-[15px] text-ink-muted">{p.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {p.meta.map((m) => (
                  <li
                    key={m}
                    className="rounded border border-line bg-bg-panel px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-muted"
                  >
                    {m}
                  </li>
                ))}
              </ul>
              {p.href ? (
                <div className="mt-5">
                  <a
                    href={p.href}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust-soft transition-colors hover:text-white"
                  >
                    Visit {p.name} →
                  </a>
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <Backdrop gridMask="center" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tighter2 text-white md:text-5xl">
              Need something like this built?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-ink-muted md:text-lg">
              Everything above came out of a custom engagement or a live
              operation. Yours can too.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/build" variant="primary">
                See how custom builds work
              </Button>
              <Link
                href="/#contact"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim transition-colors hover:text-white"
              >
                Or go straight to contact
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
