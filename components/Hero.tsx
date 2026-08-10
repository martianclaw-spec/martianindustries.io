import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { DashboardPanel } from "./ui/DashboardPanel";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background grid + radial wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-rust/10 blur-[120px]"
      />

      <Container className="relative">
        <div className="grid gap-14 pb-12 pt-16 md:gap-16 md:pb-16 md:pt-24 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col lg:col-span-6">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-bg-raised/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-rust"
                aria-hidden
              />
              <span className="min-w-0">
                Operations infrastructure for simulator venues
              </span>
            </div>

            <h1 className="text-balance break-words text-[clamp(2rem,7.5vw,2.25rem)] font-semibold tracking-tighter2 text-white sm:text-5xl md:text-[56px] md:leading-[1.05]">
              We fix the systems
              <span className="text-ink-muted">
                {" "}
                your simulator venue runs on.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base text-ink-muted md:text-lg">
              Martian Industries helps simulator venue operators fix booking,
              check-in, simulator software, remote support, and the internal
              tools that connect everything. We also{" "}
              <a
                href="/build"
                className="text-rust-soft underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                build custom software
              </a>{" "}
              for venues that need something the shelf does not carry. Built
              from real venues, not theory.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="primary">
                Request an audit
                <Arrow />
              </Button>
              <Button href="#work" variant="secondary">
                View selected work
              </Button>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6 lg:mt-auto">
              <Stat k="3" label="Venues operated" />
              <Stat k="6+" label="Sim stacks integrated" />
              <Stat k="24/7" label="Remote coverage" />
            </dl>
          </div>

          <div className="lg:col-span-6">
            <DashboardPanel />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ k, label }: { k: string; label: string }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
        {label}
      </dt>
      <dd className="mt-1 text-2xl font-semibold tracking-tighter2 text-white">
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
