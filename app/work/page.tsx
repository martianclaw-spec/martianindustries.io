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
  title: "Work · everything we have built",
  description:
    "Our own backend platform and its modules, an AI social media product with Meta-approved publishing, a collections platform for a car lot, systems that take payment and drive hardware unattended, and client websites owners edit themselves. Designed, built and run by Martian Industries.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work · Martian Industries",
    description:
      "Our own platform, an AI product, client builds and client websites, all designed and built by Martian Industries.",
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
    tag: "Infrastructure",
    name: "Martian Core",
    role: "Our own backend platform, and everything here runs on it",
    body: "Database, auth, email, secrets and backups behind one plain-English dashboard, built to replace Supabase and Resend when the shelf kept not fitting. Its modules: Watch for uptime monitoring and client status pages; Analytics with no cookies, so client sites need no banner; Audit, which signs in as each role, walks every screen at desktop and phone width and writes the punch list; Deploy, which takes a push and puts the site live on its own domain; and Invoicer. Built for us first, with a product in mind second.",
    meta: ["Postgres · Node", "Self-hosted", "5 modules", "6 products on it"],
  },
  {
    tag: "AI product",
    name: "Joe",
    role: "The social media manager that runs itself",
    body: "For small businesses and small software companies. Joe reads the owner's own photos, website and product repo, writes and schedules the week, answers reviews, and runs outreach with a sales feed the owner works from their phone. Facebook and Instagram publishing are approved by Meta. The rule that shapes it: every post shows something real, and the owner approves anything that goes out.",
    meta: ["Meta-approved publishing", "Owner approves everything", "Outreach + sales feed"],
    href: "https://getjoe.io",
    external: true,
  },
  {
    tag: "Client build",
    name: "Dealer collections platform",
    role: "Who is late, a dialer that walks the list, and a daily debrief",
    body: "A collections tool for a buy-here-pay-here car lot: late accounts ranked, a power dialer that walks the list, promises and payments recorded as they happen, and a debrief every evening. Live on the lot's real accounts since September. The owner intends to offer it to other dealers through his own network.",
    meta: ["Live on real accounts", "Calls · Texts · Payments", "Custom build"],
  },
  {
    tag: "Production",
    name: "Sim-Pull",
    role: "Unattended payments + hardware control",
    body: "A guest scans a code on the rig, pays on their phone, and the machine launches itself. Session control, auto-recovery when something freezes, cross-location leaderboards. Built inside a live venue and running in three today.",
    meta: ["Live · 3 venues · 6 rigs", "Payments · Hardware"],
    href: "https://simpullsports.com",
    external: true,
  },
  {
    tag: "Production",
    name: "SimCenter",
    role: "Monitoring from inside the machine",
    body: "A per-station agent that watches equipment, software and network from the inside, on private network segments central scanning cannot see, and answers one question continuously: is every station ready to take money? Two-cycle confirmation before any alert, so an alert always means something.",
    meta: ["Multi-tenant", "Per-machine agent", "Confirmed alerting"],
    href: "https://simcenter.io",
    external: true,
  },
  {
    tag: "Client website",
    name: "Appraisal Authority",
    role: "Independent vehicle appraisal",
    body: "A marketing site for an independent appraiser who steps in when an insurer lowballs a totaled-car payout. The job of the site is one thing: turn a stressed visitor into a lead with the right facts in it, and get that lead to the appraiser's inbox every time.",
    meta: ["Lead form to inbox", "Custom code", "Owner's domain"],
    href: "https://appraisalauthority.io",
    external: true,
  },
  {
    tag: "Client website",
    name: "Perfectly Imperfect Cozy Creations",
    role: "A hand-knit blanket and plushie business",
    body: "A two-level catalog with categories and sub-tabs, an events page whose dates expire on their own, a Finished Pieces page that builds itself from what has sold, a contact form, a printed price list and a QR table sign for craft fairs. The owner changes her own words, prices and photos with Rover.",
    meta: ["Catalog · Events", "Rover-editable", "Print + QR sign"],
  },
  {
    tag: "Client website",
    name: "Loft at 708",
    role: "A banquet hall in central Pennsylvania",
    body: "The site for an upstairs event space: the room, capacities, how to book, and a contact path that reaches the owner. The first site handed over with Rover, so the owner edits it without us.",
    meta: ["Rover-editable", "Custom code", "Owner's domain"],
  },
  {
    tag: "Contributor",
    name: "SimBook",
    role: "Booking, payments and scheduling",
    body: "Booking, payments and scheduling for a multi-location operation. Checkout, priced time slots, a reservation layer that also covers walk-ins and admin blocks, PIN check-in, and a multi-tenant model several levels deep. Independently operated. We contribute as builders on the systems behind it.",
    meta: ["Independently operated", "Multi-tenant"],
  },
  {
    tag: "Product",
    name: "Palace Picks",
    role: "Phone-first NFL confidence pool",
    body: "Replaced a hand-kept spreadsheet and a weekly email thread for a 23-man NFL confidence pool. Tested scoring engine, live slates, and a UI built for phones at the bar on Sunday.",
    meta: ["23-player pool", "Tested scoring engine"],
    href: "https://palacepicks.com",
    external: true,
  },
  {
    tag: "Product",
    name: "PA Iron Report",
    role: "Heavy-equipment auction intelligence",
    body: "A weekly digest of heavy-equipment auction activity across Pennsylvania and the east coast: what sold and for how much, what closes next, normalized specs, estimated all-in cost, and a deal score against recent comps. The funnel for a buyer's-agent service.",
    meta: ["Weekly digest", "Comps + deal scoring"],
    href: "https://paironreport.com",
    external: true,
  },
  {
    tag: "Open source",
    name: "venue-ops-mcp",
    role: "MCP server for operations",
    body: "An open-source Model Context Protocol server for indoor sports and simulator venue operations. Lets Claude and other MCP clients run real workflows through a safe, typed tool surface.",
    meta: ["Open source", "MCP · Claude"],
    href: "https://github.com/martianclaw-spec/venue-ops-mcp",
    external: true,
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Work · Martian Industries",
  url: `${SITE_URL}/work`,
  description:
    "Our own platform, an AI product, client builds and client websites, designed and built by Martian Industries.",
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
              business, including our own. The platform at the top is the one
              we built because nothing on the shelf fit, and everything below
              it runs on that platform. Client builds sit next to our own
              products on purpose: same standard, same people.
            </p>
          </div>
        </Container>
      </section>

      {/* Project grid */}
      <Section id="projects">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <Card
              key={p.name}
              className={`flex flex-col ${i === 0 ? "md:col-span-2 md:p-10" : ""}`}
            >
              <div className="flex items-center justify-between">
                <CardLabel>{p.tag}</CardLabel>
                <CardLabel className="text-ink-dim">
                  {i === 0 ? "Lead build" : "Case"}
                </CardLabel>
              </div>
              <h2
                className={
                  i === 0
                    ? "mt-6 text-3xl font-semibold tracking-tighter2 text-white md:text-4xl"
                    : "mt-5 text-xl font-semibold tracking-tightish text-white"
                }
              >
                {p.name}
              </h2>
              <p className="mt-1 text-sm text-rust-soft">{p.role}</p>
              <p className="mt-4 text-[15px] text-ink-muted">{p.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {p.meta.map((m) => (
                  <li
                    key={m}
                    className="border border-line bg-bg-panel px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted"
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
