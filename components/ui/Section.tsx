import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-20 md:py-28", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-rust-soft">
          <span className="inline-block h-px w-6 bg-rust" aria-hidden />
          <span className="font-mono">{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tighter2 text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base text-ink-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
