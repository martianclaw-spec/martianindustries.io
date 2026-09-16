import Link from "next/link";
import { Section, SectionHeader } from "./ui/Section";
import { Reveal } from "./atmos/Reveal";
import { ConfirmSpecimen } from "./rover/ConfirmSpecimen";
import { roverOurs as ours, roverYours as yours } from "@/lib/rover";

/**
 * Rover, the after-launch editing service, shown as its own mechanism rather
 * than described. Its full page is /rover. The right column is a specimen of the owner's confirm step: what
 * the site says now, what it will say, and the receipt that follows. Its wording
 * follows the real screen, so the page shows what a client will actually see.
 *
 * No price and no availability date, per the site's standing rule. Terms live
 * in the written proposal.
 */
export function AfterLaunch() {
  return (
    <Section id="after-launch" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-6">
          <SectionHeader
            eyebrow="After launch · Rover"
            title="Change your own words, prices and photos."
            description="Most sites turn into a steady trickle of small emails to the developer: new hours, a new price, a better photo. On the sites we ship, you make those changes yourself, on your real site, and you see exactly what you are changing before it goes live."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <Reveal className="min-w-0">
              <div className="border-l border-rust pl-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rust-soft">
                  Yours to change
                </div>
                <ul className="mt-4 space-y-3">
                  {yours.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 inline-block h-1 w-1 shrink-0 bg-rust"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={60} className="min-w-0">
              <div className="border-l border-line-strong pl-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">
                  Stays with us
                </div>
                <ul className="mt-4 space-y-3">
                  {ours.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 inline-block h-1 w-1 shrink-0 bg-line-strong"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <p className="mt-10 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-dim">
            That split is the point. Nothing you change can break the site,
            because the parts that could are not on your screen. We call it
            Rover. It is an optional service after launch, and its terms are
            part of the written proposal.
          </p>

          <Link
            href="/rover"
            className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.16em] text-rust-soft transition-colors hover:text-white"
          >
            How Rover works
          </Link>
        </div>

        <Reveal delay={120} className="min-w-0 lg:col-span-6">
          <ConfirmSpecimen />
        </Reveal>
      </div>
    </Section>
  );
}
