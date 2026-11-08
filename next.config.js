/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Martian Core has its own site now; one waitlist, kept there (2026-11-07).
  async redirects() {
    return [{ source: "/core", destination: "https://platform.martianindustries.io", permanent: false }];
  },
};

module.exports = nextConfig;
