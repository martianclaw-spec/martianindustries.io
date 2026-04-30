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
        "group relative rounded-lg border border-line bg-bg-raised p-6 transition-colors duration-200 hover:border-line-strong md:p-7",
        className,
      )}
    >
      {/* Top hairline accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />
      {children}
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
