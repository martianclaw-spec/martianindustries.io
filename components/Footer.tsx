import Link from "next/link";
import { Container } from "./ui/Container";

const footerLinks = [
  { href: "/simpull", label: "Sim-Pull" },
  { href: "/simcenter", label: "SimCenter" },
  { href: "/build", label: "Build" },
  { href: "/work", label: "Work" },
  { href: "/#audit", label: "Audit" },
  { href: "/blog", label: "Articles" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

// "Also by" portfolio strip — the properties Martian Industries has built
// or run. Internal links are Next Link; external open in a new tab.
type PortfolioItem = { label: string; href: string; external?: boolean };
const portfolio: PortfolioItem[] = [
  { label: "Sim-Pull", href: "https://simpullsports.com", external: true },
  { label: "SimCenter", href: "/simcenter" },
  { label: "DayPilot", href: "https://getjoe.io", external: true },
  { label: "Palace Picks", href: "https://palacepicks.com", external: true },
  { label: "PA Iron Report", href: "https://paironreport.com", external: true },
];

function PortfolioMark() {
  return (
    <span
      aria-hidden
      className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-line-strong bg-bg-raised"
    >
      <svg
        width="17"
        height="12"
        viewBox="6 24 84 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(9,0) skewX(-12)">
          <rect x="16" y="26" width="12" height="54" rx="2" fill="#e6e8ee" />
          <rect x="34" y="42" width="12" height="38" rx="2" fill="#c2552d" />
          <rect x="52" y="42" width="12" height="38" rx="2" fill="#c2552d" />
          <rect x="70" y="26" width="12" height="54" rx="2" fill="#e6e8ee" />
        </g>
        <circle cx="83" cy="75" r="5" fill="#c2552d" />
      </svg>
    </span>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg-raised/40">
      <Container>
        {/* Portfolio / "also by" strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-b border-line py-6">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
            aria-label="Martian Industries"
          >
            <PortfolioMark />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              Also by Martian Industries
            </span>
          </Link>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
            {portfolio.map((p, i) => (
              <li key={p.label} className="flex items-center gap-4">
                {i > 0 ? <span aria-hidden>·</span> : null}
                {p.external ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {p.label}
                  </a>
                ) : (
                  <Link
                    href={p.href}
                    className="transition-colors hover:text-white"
                  >
                    {p.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 py-10 md:grid-cols-3 md:gap-10">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
              Martian Industries
            </div>
            <p className="mt-2 max-w-xs text-sm text-ink-muted">
              Operations infrastructure for simulator venues. Booking,
              check-in, simulator software, remote support, and the internal
              tools that connect everything.
            </p>
          </div>
          <nav aria-label="Footer">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
              Site
            </div>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-muted transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
              Contact
            </div>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>
                <a
                  href="mailto:hello@martianindustries.io"
                  className="transition-colors hover:text-white"
                >
                  hello@martianindustries.io
                </a>
              </li>
              <li>
                <a
                  href="tel:+18142157925"
                  className="transition-colors hover:text-white"
                >
                  (814) 215-7925
                </a>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="transition-colors hover:text-white"
                >
                  Request a venue systems audit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-3 border-t border-line py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim md:flex-row md:items-center">
          <span>
            &copy; {year} Martian Industries. All rights reserved.
          </span>
          <span>Built and operated by venue operators.</span>
        </div>
      </Container>
    </footer>
  );
}
