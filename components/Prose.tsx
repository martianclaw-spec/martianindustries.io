import { cn } from "@/lib/cn";

/**
 * Long-form article typography wrapper.
 * Uses arbitrary variants instead of @tailwindcss/typography to avoid
 * adding a dependency. All styles target descendant elements so the
 * post component can render plain semantic HTML.
 */
export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-pretty text-ink-muted",
        // headings
        "[&_h2]:mt-12 [&_h2]:scroll-mt-28 [&_h2]:text-balance [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tightish [&_h2]:text-white md:[&_h2]:text-3xl",
        "[&_h3]:mt-10 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white md:[&_h3]:text-xl",
        "[&_h4]:mt-8 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-white",
        // paragraphs
        "[&_p]:mt-5 [&_p]:text-base [&_p]:leading-relaxed md:[&_p]:text-lg",
        "[&_p:first-child]:mt-0",
        // lists
        "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 md:[&_ul]:text-lg",
        "[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 md:[&_ol]:text-lg",
        "[&_li]:leading-relaxed [&_li::marker]:text-rust",
        // inline
        "[&_strong]:font-semibold [&_strong]:text-white",
        "[&_em]:italic",
        "[&_a]:text-rust-soft [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:text-white",
        "[&_code]:rounded [&_code]:border [&_code]:border-line [&_code]:bg-bg-panel [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.92em] [&_code]:text-ink",
        // block elements
        "[&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:border-rust [&_blockquote]:bg-bg-raised/30 [&_blockquote]:px-5 [&_blockquote]:py-3 [&_blockquote]:text-ink",
        "[&_blockquote_p]:mt-0",
        "[&_hr]:my-12 [&_hr]:border-line",
        // figures and images
        "[&_figure]:my-8",
        "[&_figcaption]:mt-2 [&_figcaption]:text-center [&_figcaption]:text-sm [&_figcaption]:text-ink-dim",
        className,
      )}
    >
      {children}
    </div>
  );
}
