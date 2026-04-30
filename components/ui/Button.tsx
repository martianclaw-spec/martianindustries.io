import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Pass an href to render an anchor or Next link. Omit when using `type`. */
  href?: string;
  external?: boolean;
  /** When set, renders a real <button> instead of an anchor. */
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium tracking-tightish transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-rust text-white hover:bg-rust-soft active:bg-rust-deep border border-rust/60 shadow-[0_0_0_1px_rgba(194,85,45,0.25),0_8px_24px_-12px_rgba(194,85,45,0.65)]",
  secondary:
    "bg-bg-raised text-ink border border-line-strong hover:border-ink-muted hover:text-white",
  ghost: "text-ink-muted hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  type,
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (type) {
    return (
      <button
        type={type}
        className={classes}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (!href) {
    throw new Error("Button: provide either `href` or `type`.");
  }

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        rel={external ? "noopener noreferrer" : undefined}
        target={external ? "_blank" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
