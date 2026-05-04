import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

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
  description:
    "Martian Industries helps simulator venue operators run cleaner, more reliable operations. We work on booking, check-in, simulator software, remote support, and the internal tools that connect everything.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "simulator venue",
    "golf simulator venue",
    "sim racing venue",
    "simulator venue operations",
    "simulator booking software",
    "simulator venue management",
    "golf simulator booking",
    "TrackMan venue",
    "kiosk for simulator venues",
    "simulator venue audit",
    "sim racing venue management system",
    "simulator venue automation",
    "Martian Industries",
    "Simbook",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME}. ${SITE_TAGLINE}`,
    description:
      "Operations infrastructure for simulator venues. Booking, check-in, simulator software, remote support, and the internal tools that connect everything.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME}. ${SITE_TAGLINE}`,
    description:
      "Operations infrastructure for simulator venues. Built and operated by venue operators.",
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
    "Operations infrastructure for simulator venues. Booking, check-in, simulator software, remote support, and custom internal tools, built and operated by venue operators.",
  email: "hello@martianindustries.io",
  areaServed: "Worldwide",
  knowsAbout: [
    "Simulator venue operations",
    "Golf simulator venue management",
    "Sim racing venue management",
    "TrackMan integration",
    "Booking and check-in systems",
    "Kiosk software for simulator venues",
    "Remote support for simulator hardware",
    "Operator tooling and automation",
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
      </head>
      <body className="bg-bg text-ink font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
