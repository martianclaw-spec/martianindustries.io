import Link from "next/link";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#work", label: "Work" },
  { href: "#audit", label: "Audit" },
  { href: "#about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/75 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#top"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tightish text-white"
          >
            <Logo />
            <span>Martian Industries</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button href="#contact" variant="primary" className="px-3.5 py-2 text-[13px]">
              Request audit
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

function Logo() {
  return (
    <span
      aria-hidden
      className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-line-strong bg-bg-raised"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7" cy="7" r="3.25" stroke="#c2552d" strokeWidth="1.25" />
        <circle cx="7" cy="7" r="6" stroke="#262b36" strokeWidth="1" />
        <circle cx="13" cy="7" r="0.9" fill="#c2552d" />
      </svg>
    </span>
  );
}
