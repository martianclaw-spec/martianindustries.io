import type { ElementType } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
};

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "group relative rounded-lg border border-line bg-bg-raised p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_18px_40px_-28px_rgba(194,85,45,0.55)] md:p-7",
        className,
      )}
    >
      {/* Warm wash rising from the top edge on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(120%_80%_at_50%_0%,rgba(194,85,45,0.10),transparent_62%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {/* Top hairline accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-rust-soft/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}

type CardLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardLabel({ children, className }: CardLabelProps) {
  return (
    <div
      className={cn(
        "font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-dim",
        className,
      )}
    >
      {children}
    </div>
  );
}
