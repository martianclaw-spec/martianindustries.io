import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { DashboardPanel } from "./ui/DashboardPanel";
import { DustField } from "./atmos/DustField";
import { Reveal } from "./atmos/Reveal";
import { Spotlight } from "./atmos/Spotlight";
import { TopoContours, Ridgeline } from "./atmos/Terrain";
import { DatumRule } from "./ui/Frame";

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden">
      {/* Survey grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      {/* The same grid, brighter, revealed only under the pointer */}
      <Spotlight className="grid-bright pointer-events-none absolute inset-0" />
      {/* Low sun sitting under the horizon */}
      <div
        aria-hidden
        className="mars-horizon pointer-events-none absolute inset-0"
      />
      {/* Elevation survey of the site, off to one side */}
      <TopoContours className="pointer-events-none absolute -right-24 top-8 h-[420px] w-[600px] text-dust/25 opacity-60 md:-right-10 md:h-[520px] md:w-[740px]" />
      {/* Suspended dust on the wind */}
      <DustField className="pointer-events-none absolute inset-0 h-full w-full" />
      {/* Distant ridge */}
      <Ridgeline className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full md:h-32" />

      <Container className="relative">
        <div className="grid gap-14 pb-14 pt-14 md:gap-16 md:pb-20 md:pt-20 lg:grid-cols-12 lg:gap-12">
          <div className="flex min-w-0 flex-col lg:col-span-7">
            <Reveal>
              <DatumRule
                label="MI · Software studio"
                value="Est. Earth 2025"
                className="mb-9"
              />
            </Reveal>

            <Reveal delay={60}>
              <div className="mb-7 inline-flex max-w-full items-center gap-2.5 border border-line bg-bg-raised/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted backdrop-blur-sm">
                <span
                  className="h-1 w-1 shrink-0 animate-breathe bg-rust"
                  aria-hidden
                />
                <span className="min-w-0">
                  Custom software, built and shipped
                </span>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <h1 className="text-balance break-words text-[clamp(2.4rem,9vw,3rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-[3.6rem] md:text-[4.6rem] lg:text-[5rem]">
                We build the software
                <span className="text-ink-muted">
                  {" "}
                  your operation runs on.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-8 max-w-xl border-l-2 border-rust/70 pl-5 text-pretty text-base text-ink-muted md:text-[17px]">
                Martian Industries is a custom software studio. We design,
                build, and ship production systems: booking and payment flows,
                hardware integrations, operator dashboards, and AI tooling. We
                have run the businesses these systems serve, so we build for
                the messy version, not the demo.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button href="#contact" variant="primary">
                  Start a project
                  <Arrow />
                </Button>
                <Button href="/work" variant="secondary">
                  See what we have built
                </Button>
              </div>
            </Reveal>

            <Reveal delay={290} className="lg:mt-auto">
              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7">
                <Stat k="8" label="Projects shipped" />
                <Stat k="3" label="Sites in production" />
                <Stat k="0" label="Handoffs to a junior team" />
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="min-w-0 lg:col-span-5">
            <DashboardPanel />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/**
 * Reading first, label second. Putting the numeral on top means every value
 * sits on one baseline no matter how many lines its label wraps to, and it
 * gives the row the scale contrast an instrument panel has.
 */
function Stat({ k, label }: { k: string; label: string }) {
  return (
    <div className="flex flex-col">
      <dd className="readout text-4xl font-semibold text-white md:text-5xl">
        {k}
      </dd>
      <dt className="mt-2 font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-ink-dim">
        {label}
      </dt>
    </div>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="transition-transform duration-150 group-hover:translate-x-0.5"
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
