import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { DashboardPanel } from "./ui/DashboardPanel";
import { DustField } from "./atmos/DustField";
import { Reveal } from "./atmos/Reveal";
import { TopoContours, Ridgeline } from "./atmos/Terrain";

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden">
      {/* Survey grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      {/* Low sun sitting under the horizon */}
      <div
        aria-hidden
        className="mars-horizon pointer-events-none absolute inset-0"
      />
      {/* Elevation survey of the site, off to one side */}
      <TopoContours
        className="pointer-events-none absolute -right-24 top-8 h-[420px] w-[600px] text-dust/25 opacity-60 md:-right-10 md:h-[520px] md:w-[740px]"
      />
      {/* Suspended dust on the wind */}
      <DustField className="pointer-events-none absolute inset-0 h-full w-full" />
      {/* Distant ridge */}
      <Ridgeline className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full md:h-32" />

      <Container className="relative">
        <div className="grid gap-14 pb-12 pt-16 md:gap-16 md:pb-16 md:pt-24 lg:grid-cols-12 lg:gap-12">
          <div className="flex min-w-0 flex-col lg:col-span-6">
            <Reveal>
              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-bg-raised/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted backdrop-blur-sm">
                <span
                  className="h-1.5 w-1.5 shrink-0 animate-breathe rounded-full bg-rust"
                  aria-hidden
                />
                <span className="min-w-0">
                  Custom software, built and shipped
                </span>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="text-balance break-words text-[clamp(2rem,7.5vw,2.25rem)] font-semibold tracking-tighter2 text-white sm:text-5xl md:text-[56px] md:leading-[1.05]">
                We build the software
                <span className="text-ink-muted">
                  {" "}
                  your operation runs on.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-pretty text-base text-ink-muted md:text-lg">
                Martian Industries is a software studio built around one idea. We design,
                build, and ship production systems: booking and payment flows,
                hardware integrations, operator dashboards, and AI tooling. We
                have run the businesses these systems serve, so we build for the
                messy version, not the demo.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href="#contact" variant="primary">
                  Start a project
                  <Arrow />
                </Button>
                <Button href="/work" variant="secondary">
                  See what we have built
                </Button>
              </div>
            </Reveal>

            <Reveal delay={280} className="lg:mt-auto">
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6 sm:gap-6">
                <Stat k="8" label="Projects shipped" />
                <Stat k="3" label="Sites in production" />
                <Stat k="0" label="Handoffs to a junior team" />
              </dl>
            </Reveal>
          </div>

          <Reveal delay={160} className="min-w-0 lg:col-span-6">
            <DashboardPanel />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Stat({ k, label }: { k: string; label: string }) {
  return (
    <div className="flex flex-col">
      <dt className="font-mono text-[10px] uppercase leading-tight tracking-[0.1em] text-ink-dim sm:text-[11px] sm:tracking-[0.16em]">
        {label}
      </dt>
      <dd className="mt-auto pt-1 text-xl font-semibold tracking-tighter2 text-white sm:text-2xl">
        {k}
      </dd>
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
