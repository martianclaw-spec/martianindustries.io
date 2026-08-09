import Link from "next/link";
import { Container } from "./ui/Container";

const footerLinks = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#work", label: "Work" },
  { href: "/simcenter", label: "SimCenter" },
  { href: "/#audit", label: "Audit" },
  { href: "/blog", label: "Articles" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg-raised/40">
      <Container>
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
