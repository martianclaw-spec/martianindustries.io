import { cn } from "@/lib/cn";

/**
 * Registration marks at the four corners of a panel, the way a technical
 * drawing marks its own extents. Purely decorative, so the parent needs
 * `relative` and nothing else.
 */
export function Brackets({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  const s = size === "lg" ? "h-3.5 w-3.5" : "h-2.5 w-2.5";
  const tone = className ?? "border-rust/60";
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      <span className={cn("absolute left-0 top-0 border-l border-t", s, tone)} />
      <span
        className={cn("absolute right-0 top-0 border-r border-t", s, tone)}
      />
      <span
        className={cn("absolute bottom-0 left-0 border-b border-l", s, tone)}
      />
      <span
        className={cn("absolute bottom-0 right-0 border-b border-r", s, tone)}
      />
    </span>
  );
}

/**
 * A labelled datum line: a hairline running the full width with a mono label
 * at one end and an optional reading at the other. Used between sections
 * instead of a bare border, so the page reads as a document with coordinates
 * rather than a stack of panels.
 */
export function DatumRule({
  label,
  value,
  className,
}: {
  label: string;
  value?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim",
        className,
      )}
    >
      <span className="shrink-0">{label}</span>
      <span aria-hidden className="h-px flex-1 bg-line" />
      <span aria-hidden className="tick-row hidden h-2 w-24 shrink-0 sm:block" />
      {value ? <span className="shrink-0 text-ink-muted">{value}</span> : null}
    </div>
  );
}
