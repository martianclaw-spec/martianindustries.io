import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { Capabilities } from "@/components/Capabilities";
import { SelectedWork } from "@/components/SelectedWork";
import { AuditOffer } from "@/components/AuditOffer";
import { About } from "@/components/About";
import { OtherProjects } from "@/components/OtherProjects";
import { Contact } from "@/components/Contact";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/site";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Simulator Venue Systems Audit",
  serviceType: "Operations and systems audit for simulator venues",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: "+1-814-215-7925",
  },
  areaServed: "Worldwide",
  description:
    "A focused, operator-led review of how a simulator venue actually runs, covering booking, check-in, simulator software, remote support, staff workflows, and missed revenue. Delivers a written audit with prioritized fixes.",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Simulator venue operators (golf, sim racing, mixed)",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#contact`,
    description:
      "Initial scoping is free. Audit pricing is scoped per venue based on size and stack.",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: "+1-814-215-7925",
  description:
    "Operations infrastructure for simulator venues. Booking, check-in, simulator software, remote support, and custom internal tools, built and operated by venue operators.",
  serviceArea: { "@type": "Place", name: "Worldwide" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Capabilities",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Booking and check-in systems",
          description:
            "Online booking conversion, deposits and policies, kiosk and host check-in flows for simulator venues.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Simulator stack integration",
          description:
            "Integrating launch monitors, simulator software, scoring, payment, and POS into one operator-controllable workflow.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Remote support and reliability",
          description:
            "Bay health monitoring, remote restart and recovery tooling, and on-call coverage for live commercial venues.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom tools and automation",
          description:
            "Operator dashboards, staff workflow tooling, and back-office automation built for how each venue actually runs.",
        },
      },
    ],
  },
};

const homeFaqs: FAQItem[] = [
  {
    q: "What does Martian Industries do?",
    a: "Martian Industries builds and operates the systems that run simulator venues. That includes booking and check-in, simulator software integration, remote support and monitoring, kiosk flows, and the internal tools that connect everything. We ship two products (Sim-Pull for sim racing venues and SimCenter for station monitoring at any venue) and offer a hands-on operational audit for existing operators.",
  },
  {
    q: "What is a Simulator Venue Systems Audit?",
    a: "It is a focused operator-led review of how a simulator venue actually runs. We look at the booking flow, check-in and kiosk experience, simulator software and integrations, remote access and support setup, staff workflows and bottlenecks, and missed revenue opportunities. You get a written audit with prioritized fixes based on systems we run and maintain in live simulator venues, not theory.",
  },
  {
    q: "Who is the audit for?",
    a: "Operators of sim racing venues, indoor golf simulator studios, VR arcades, and other unstaffed or partially-staffed indoor entertainment venues. Especially useful if you have three or more rigs or bays, if staffing is the throughput ceiling, or if you are about to open a new location.",
  },
  {
    q: "What is Sim-Pull?",
    a: "Sim-Pull is the operating system for sim racing venues. Guests scan a QR on the rig, pay on their phone, and the rig launches itself, no front-desk staff in the loop. Stuck cars auto-recover. Cross-rig leaderboards. Optional AI coaching. Built by an operator and running in three live venues today. Full details and pricing at simpullsports.com.",
  },
  {
    q: "What is SimCenter?",
    a: "SimCenter watches every station in your venue from the inside, sim rigs, launch monitors, VR arcades, and answers one question continuously: is every station ready to take money? Per-station connector, cloud dashboard, phone alerts, remote wake and shutdown. Works with any launch monitor or sim software. <a href=\"/simcenter\">Learn more here</a>.",
  },
  {
    q: "Do you work with golf simulator venues, not just sim racing?",
    a: "Yes. The audit and SimCenter both apply to indoor golf simulator studios. Sim-Pull specifically targets sim racing on Assetto Corsa rigs, but golf operators benefit from every other capability we ship.",
  },
  {
    q: "Do you build custom software from scratch for venues?",
    a: "Yes. When a venue needs something Sim-Pull or SimCenter does not cover (24-hour unstaffed lounges, custom booking flows, kiosk integrations with existing hardware, operator dashboards) we build it. Fixed scope, milestone pricing, you own the code when we are done. Full details on the <a href=\"/build\">custom builds page</a>.",
  },
  {
    q: "Do you support TrackMan, Foresight, GSPro, and other launch monitors?",
    a: "SimCenter is sport-agnostic and hardware-agnostic. It monitors the station as a whole, regardless of which launch monitor or simulator software you run. For golf venues we regularly work with TrackMan, Foresight, GSPro, and Uneekor deployments.",
  },
  {
    q: "How does the audit work and how long does it take?",
    a: "You tell us about your venue via the contact form or a short call. We review your booking flow, on-site systems, remote support, and back-office setup. Typical turnaround is two weeks. You get a written report with a prioritized action list, quick wins, and longer-term system upgrades scoped and sequenced so you can act on it without us.",
  },
  {
    q: "Do you require a long-term commitment?",
    a: "No. The audit is a focused one-time engagement. Sim-Pull and SimCenter are month-to-month with no long-term commitment. Cancel anytime.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the form on the <a href=\"/#contact\">contact section</a>, email hello@martianindustries.io, or call (814) 215-7925. Include your venue name, how many rigs or bays you run, and one or two sentences on what is currently broken. I read every one personally.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={professionalServiceSchema} />
      <JsonLd data={serviceSchema} />
      <Hero />
      <CredibilityStrip />
      <Capabilities />
      <SelectedWork />
      <AuditOffer />
      <About />
      <OtherProjects />
      <FAQ
        id="faq"
        eyebrow="Straight answers"
        title="Questions operators actually ask."
        description="If the answer you need is not here, the contact section below routes straight to me."
        items={homeFaqs}
      />
      <Contact />
    </>
  );
}
