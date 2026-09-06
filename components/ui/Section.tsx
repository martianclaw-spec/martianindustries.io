import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Reveal } from "../atmos/Reveal";

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
        <Reveal>
          <div className="mb-5 flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-rust-soft">
            <span className="inline-block h-2 w-2 bg-rust" aria-hidden />
            <span>{eyebrow}</span>
            <span aria-hidden className="tick-row h-2 w-16 opacity-60" />
          </div>
        </Reveal>
      ) : null}
      <Reveal delay={60}>
        <h2 className="text-balance text-[2rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted md:text-[17px]">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
