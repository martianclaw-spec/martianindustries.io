"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

const links = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#work", label: "Work" },
  { href: "/simcenter", label: "SimCenter" },
  { href: "/#audit", label: "Audit" },
  { href: "/blog", label: "Articles" },
  { href: "/#about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/75 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-sm font-semibold tracking-tightish text-white"
              onClick={close}
            >
              <Logo />
              <span>Martian Industries</span>
            </Link>

            {/* Desktop nav rail */}
            <nav className="hidden items-center gap-7 md:flex">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-ink-muted transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Right side: desktop CTA + mobile hamburger */}
            <div className="flex items-center gap-3">
              <Button
                href="/#contact"
                variant="primary"
                className="hidden px-3.5 py-2 text-[13px] md:inline-flex"
              >
                Request audit
              </Button>

              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((o) => !o)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-strong bg-bg-raised text-ink-muted transition-colors hover:text-white md:hidden"
              >
                <MenuIcon open={open} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`fixed inset-0 z-50 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop — tap to close */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={close}
          tabIndex={open ? 0 : -1}
          className={`absolute inset-0 bg-bg/95 backdrop-blur-md transition-opacity duration-300 ease-out ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sheet content */}
        <div
          className={`relative flex h-full flex-col transition-all duration-300 ease-out ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between border-b border-line/70 px-6 py-4">
            <Link
              href="/"
              onClick={close}
              tabIndex={open ? 0 : -1}
              className="flex items-center gap-2.5 text-sm font-semibold tracking-tightish text-white"
            >
              <Logo />
              <span>Martian Industries</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              tabIndex={open ? 0 : -1}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-strong bg-bg-raised text-ink-muted transition-colors hover:text-white"
            >
              <MenuIcon open />
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-6 pt-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className="group flex items-center justify-between border-b border-line/40 py-4 text-lg font-medium tracking-tightish text-white"
              >
                <span>{l.label}</span>
                <ArrowRight />
              </Link>
            ))}
          </nav>

          <div className="border-t border-line/70 px-6 pb-10 pt-6">
            <Button
              href="/#contact"
              variant="primary"
              className="w-full text-base"
              onClick={close}
            >
              Request audit
            </Button>
            <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
              Operations infrastructure for simulator venues
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function MenuIcon({ open }: { open?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="transition-transform duration-200 ease-out"
    >
      {open ? (
        <>
          <path
            d="M3 3 L13 13"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M13 3 L3 13"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <path
            d="M2.5 5 H13.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M2.5 11 H13.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="text-ink-dim transition-transform duration-150 group-hover:translate-x-0.5"
    >
      <path
        d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
