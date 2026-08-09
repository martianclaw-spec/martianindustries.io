import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { Capabilities } from "@/components/Capabilities";
import { SelectedWork } from "@/components/SelectedWork";
import { AuditOffer } from "@/components/AuditOffer";
import { About } from "@/components/About";
import { OtherProjects } from "@/components/OtherProjects";
import { Contact } from "@/components/Contact";
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
      <Contact />
    </>
  );
}
