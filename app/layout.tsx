import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
} from "@/lib/site";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}. ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "custom software development",
    "freelance software engineer",
    "software studio",
    "booking and payment systems",
    "hardware integration software",
    "internal tools development",
    "operator dashboards",
    "AI agent development",
    "MCP server development",
    "Next.js developer",
    "TypeScript developer",
    "Supabase developer",
    "Martian Industries",
    "Matthew Myers",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME}. ${SITE_TAGLINE}`,
    description:
      "Custom software, built and shipped. Booking and payment flows, hardware integrations, internal tools, and AI tooling. One engineer, start to finish.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME}. ${SITE_TAGLINE}`,
    description:
      "Custom software, built and shipped. One engineer, start to finish.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  description:
    "Custom software studio. Booking and payment flows, hardware and third-party integrations, internal tools and operator dashboards, and AI tooling. Designed, built, and shipped by one engineer.",
  email: "hello@martianindustries.io",
  areaServed: "Worldwide",
  knowsAbout: [
    "Custom software development",
    "Booking and payment systems",
    "Hardware and device integration",
    "Internal tools and operator dashboards",
    "AI agents and automation",
    "Model Context Protocol tool servers",
    "Full stack web application development",
    "Multi-tenant SaaS architecture",
  ],
  sameAs: ["https://github.com/martianclaw-spec/martianindustries.io"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

// E-E-A-T signal: Google increasingly weights the human expertise behind a
// site (Experience, Expertise, Authoritativeness, Trust). A Person node tied
// to the Organization and to specific operational experience is one of the
// strongest signals we can emit for a solo-operator-led business.
const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matthew Myers",
  jobTitle: "Founder, Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  url: SITE_URL,
  email: "hello@martianindustries.io",
  telephone: "+1-814-215-7925",
  knowsAbout: [
    "Custom software development",
    "Full stack web application development",
    "Booking and payment systems",
    "Hardware and device integration",
    "Internal tools and operator dashboards",
    "AI agents and automation",
    "Model Context Protocol tool servers",
    "Multi-tenant SaaS architecture",
    "Next.js and TypeScript",
    "Supabase and Postgres",
  ],
  sameAs: [
    "https://github.com/martianclaw-spec",
    "https://simpullsports.com",
  ],
  description:
    "Matthew Myers is the founder of Martian Industries, a one-person software studio. He designs, builds, and ships production software: booking and payment flows, hardware integrations, operator dashboards, and AI tooling. He ran multi-location operations before building software for them, which shapes how he builds for failure cases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={founderSchema} />
      </head>
      <body className="bg-bg text-ink font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        {/* Vercel Analytics + Speed Insights — cookie-free, GDPR-compliant.
            Auto-enables on the Vercel deployment. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
