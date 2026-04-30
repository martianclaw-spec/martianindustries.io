import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Martian Industries. Operations infrastructure for simulator venues.",
  description:
    "Martian Industries helps simulator venues run cleaner, more reliable, and more profitable operations through field-tested systems, automation, and custom software.",
  metadataBase: new URL("https://martianindustries.io"),
  openGraph: {
    title: "Martian Industries",
    description:
      "Operations infrastructure for simulator venues. Booking, check-in, sim stack, remote support, and custom tooling. Built by operators.",
    url: "https://martianindustries.io",
    siteName: "Martian Industries",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
