import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { Capabilities } from "@/components/Capabilities";
import { SelectedWork } from "@/components/SelectedWork";
import { Engagement } from "@/components/Engagement";
import { About } from "@/components/About";
import { OtherProjects } from "@/components/OtherProjects";
import { Contact } from "@/components/Contact";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/site";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom software development",
  serviceType: "Custom software design, development, and deployment",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: "+1-814-215-7925",
  },
  areaServed: "Worldwide",
  description:
    "Fixed-scope custom software builds delivered by a single engineer. Booking and payment flows, hardware and third-party integrations, internal tools and operator dashboards, and AI agents and automation. Milestone pricing, weekly working demos, full source and IP transfer on completion.",
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Founders and operators who need production software built and shipped",
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

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: "+1-814-215-7925",
  description:
    "One-person software studio. Booking and payment flows, hardware and third-party integrations, internal tools and operator dashboards, and AI tooling. Designed, built, and shipped end to end by a single engineer.",
  serviceArea: { "@type": "Place", name: "Worldwide" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "What I build",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Booking, payments and scheduling",
          description:
            "Checkout, deposits and refunds, calendars and capacity, no-show policy, and self-serve kiosk and check-in flows.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hardware and third-party integrations",
          description:
            "Device control and telemetry agents, vendor and platform API integration, and payments, POS, and back-office sync.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Internal tools and dashboards",
          description:
            "Operations and multi-site dashboards, staff workflow and admin tooling, and reporting built around real questions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI tooling and automation",
          description:
            "Agent workflows, Model Context Protocol tool servers, automated outreach and enrichment, and retrieval over your own systems.",
        },
      },
    ],
  },
};

const homeFaqs: FAQItem[] = [
  {
    q: "What does Martian Industries do?",
    a: "Martian Industries is the software studio of Matthew Myers. I design, build, and ship production software for founders and operators: booking and payment flows, hardware and third-party integrations, internal tools and operator dashboards, and AI agents that do real work. One engineer, start to finish, from the scoping call through deployment and handoff.",
  },
  {
    q: "What kind of projects are a good fit?",
    a: "Software that has to survive contact with real users and real money. Systems that take payments, talk to physical hardware, run unattended, or replace a process currently held together by spreadsheets and group chats. The projects I do best are the ones where the interesting problem is reliability, not the interface.",
  },
  {
    q: "What is not a good fit?",
    a: "Pure design work with no engineering, staffing a seat on an existing team, marketing sites, and anything that needs a team of five starting Monday. I am one person. That is a real constraint and I will tell you up front when a project needs more than I can give it.",
  },
  {
    q: "How much does a project cost?",
    a: "Projects are priced per milestone at a fixed price, not open-ended hourly. Smaller builds such as a booking flow tied to existing systems are shorter and cheaper. Larger builds such as a fully unattended venue with door access, payment, session control, and remote support are longer and priced accordingly. Exact numbers come out of the scoping call, in writing, before you commit.",
  },
  {
    q: "How long does a build take?",
    a: "Most engagements run four to eight weeks. You get a working demo every week, so you see the real thing take shape rather than waiting for a reveal at the end. Change requests get scoped as small additions to the next milestone instead of turning into surprise scope creep.",
  },
  {
    q: "Who actually writes the code?",
    a: "I do. Martian Industries is deliberately not a dev shop. The person who scopes your project is the person building it and the person you talk to when something breaks. The trade-off is honest: you get deep context and no handoff between sales and engineering, but capacity is limited, so I am selective about what I take on.",
  },
  {
    q: "Do I own the code you write?",
    a: "Yes. Custom builds are work-for-hire. When the engagement ends you own the source, the deployment, and the project-specific IP. The only exception is a reusable component I contribute back into my own products, which stays under my ownership so I can maintain it across every project that uses it.",
  },
  {
    q: "What do you build with?",
    a: "Typically TypeScript end to end: Next.js and React on the front, Node or Deno edge functions on the back, Postgres via Supabase for data and auth, and Vercel for deployment. For hardware and device work, whatever the equipment actually speaks. I pick boring, well-supported tools so you are not stranded on something exotic after handoff.",
  },
  {
    q: "Do you work with clients outside the US?",
    a: "Yes. Time zones just move the call. Most of the work is remote regardless of where you are, with on-site visits only when physical installation genuinely requires it.",
  },
  {
    q: "What have you actually shipped?",
    a: "Systems running in production today: a venue operating system driving physical hardware across three locations, a booking and payments backend, a station monitoring cloud with a per-machine agent, an autonomous AI outreach agent, a Model Context Protocol tool server, and a couple of consumer web products. The full list is on the <a href=\"/work\">work page</a>.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the form in the <a href=\"/#contact\">contact section</a>, email hello@martianindustries.io, or call (814) 215-7925. One paragraph on what you have today, what is missing, and what it needs to do is plenty. The scoping call happens on Zoom within a few business days.",
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
      <Engagement />
      <About />
      <OtherProjects />
      <FAQ
        id="faq"
        eyebrow="Straight answers"
        title="Questions clients actually ask."
        description="If the answer you need is not here, the contact section below routes straight to me."
        items={homeFaqs}
      />
      <Contact />
    </>
  );
}
