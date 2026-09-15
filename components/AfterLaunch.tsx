import { Section, SectionHeader } from "./ui/Section";
import { Brackets } from "./ui/Frame";
import { Reveal } from "./atmos/Reveal";

const yours = [
  "The words, prices and photos in every spot we mark as yours",
  "Lists you keep adding to, like a menu, a team or upcoming events",
  "Undo on anything, from the screen, the receipt, or by asking",
];

const ours = [
  "The design, the layout and the pages themselves",
  "Anything that touches your customers, bookings or payments",
  "Whatever the editor cannot do comes to us, with your words attached",
];

/**
 * The after-launch editing service, shown as its own mechanism rather than
 * described. The right column is a specimen of the owner's confirm step: what
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
            eyebrow="After launch"
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
            because the parts that could are not on your screen. It is an
            optional service after launch, and its terms are part of the
            written proposal.
          </p>
        </div>

        <Reveal delay={120} className="min-w-0 lg:col-span-6">
          <figure className="relative border border-line bg-bg-raised p-6 md:p-8">
            <Brackets size="lg" />

            <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="text-rust-soft">Owner screen</span>
              <span className="text-ink-dim">Confirm step</span>
            </div>

            <div className="mt-6 flex items-center gap-3 border border-line bg-bg px-4 py-3">
              <span
                aria-hidden
                className="h-2 w-2 shrink-0 rounded-full bg-rust"
              />
              <span className="min-w-0 text-[13px] text-ink-muted">
                You are editing the live site.
              </span>
            </div>

            <div className="mt-6 text-lg font-semibold tracking-tightish text-white">
              Change the website?
            </div>
            <div className="mt-1 text-[14px] text-ink-muted">
              The Friday closing time on the contact page:
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-px border border-line bg-line">
              <div className="min-w-0 bg-bg px-4 py-5 sm:px-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">
                  Now
                </dt>
                <dd className="readout mt-2 text-2xl font-semibold text-ink-muted sm:text-3xl md:text-4xl">
                  11 pm
                </dd>
              </div>
              <div className="min-w-0 bg-bg px-4 py-5 sm:px-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-rust-soft">
                  Will become
                </dt>
                <dd className="readout mt-2 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                  midnight
                </dd>
              </div>
            </dl>

            <div aria-hidden className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center bg-rust px-4 py-2.5 text-[13px] font-medium text-white">
                Yes, change it
              </span>
              <span className="inline-flex items-center border border-line px-4 py-2.5 text-[13px] text-ink-muted">
                No, go back
              </span>
            </div>

            <div className="mt-8 border-t border-line pt-5">
              <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em]">
                <span className="text-rust-soft">Done. It&rsquo;s live.</span>
                <span className="text-ink-dim">Receipt emailed to you</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <span className="min-w-0 text-[14px] text-ink-muted">
                  The Friday closing time now says: midnight.
                </span>
                <span aria-hidden className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust-soft">
                  Undo, put it back
                </span>
              </div>
            </div>

            <figcaption className="sr-only">
              An example of the confirm step on the owner screen. The Friday
              closing time reads 11 pm and will become midnight, with buttons to
              confirm or go back, followed by the receipt and an undo link.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
