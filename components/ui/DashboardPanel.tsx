import { SolClock } from "@/components/atmos/SolClock";
import { Brackets } from "@/components/ui/Frame";

/**
 * Subtle "production status" panel used in the hero.
 * Pure CSS + inline SVG. No images, no animations beyond a slow opacity pulse.
 * All copy here is illustrative and meant to read like a real deploy console.
 */
const systems = [
  { id: "SIM-PULL", state: "live", label: "3 venues · production" },
  { id: "SIMCENTER", state: "live", label: "Monitoring · production" },
  { id: "SIMBOOK", state: "live", label: "Bookings · production" },
  { id: "DAYPILOT", state: "live", label: "Outreach · production" },
  { id: "PALACE", state: "live", label: "Seasonal · live" },
  { id: "VENUE-OPS", state: "warn", label: "MCP server · beta" },
];

const dot: Record<string, string> = {
  live: "bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.12)]",
  idle: "bg-ink-dim shadow-[0_0_0_3px_rgba(107,114,128,0.12)]",
  warn: "bg-rust shadow-[0_0_0_3px_rgba(194,85,45,0.18)] animate-breathe",
};

export function DashboardPanel() {
  return (
    <div className="relative">
      {/* Outer frame */}
      <div className="relative overflow-hidden border border-line-strong bg-bg-panel">
        {/* Faint grid background */}
        <div
          aria-hidden
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.55]"
        />
        <div aria-hidden className="absolute inset-0 panel-vignette" />
        <Brackets className="border-rust/50" size="lg" />
        {/* Slow sensor sweep across the glass */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-y-0 -left-1/3 w-1/3 animate-sweep bg-gradient-to-r from-transparent via-white/[0.035] to-transparent" />
        </div>

        {/* Header bar */}
        <div className="relative flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-line-strong" />
              <span className="h-2 w-2 rounded-full bg-line-strong" />
              <span className="h-2 w-2 rounded-full bg-line-strong" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
              martian · build
            </span>
          </div>
          <SolClock
            showSeconds
            className="truncate font-mono text-[11px] text-ink-dim"
          />
        </div>

        {/* Body */}
        <div className="relative grid grid-cols-1 gap-4 p-4 sm:gap-5 sm:p-5">
          {/* Systems grid */}
          <div className="min-w-0">
            <div className="mb-3 flex items-baseline justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                systems
              </span>
              <span className="font-mono text-[11px] text-ink-dim">
                5 live · 1 building
              </span>
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {systems.map((s) => (
                <li
                  key={s.id}
                  className="flex min-w-0 flex-col items-start gap-0.5 border border-line bg-bg-raised/60 px-2.5 py-2 sm:py-2.5"
                >
                  <div className="flex shrink-0 items-center gap-2.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${dot[s.state]}`}
                      aria-hidden
                    />
                    <span className="whitespace-nowrap font-mono text-[11px] text-ink">
                      {s.id}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] leading-snug text-ink-muted">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Side metrics */}
          <div className="grid grid-cols-3 gap-2">
            <Metric label="Shipped" value="8" sub="projects" />
            <Metric label="Live" value="5" sub="in production" />
            <Metric label="In build" value="1" sub="venue-ops mcp" warn />
          </div>
        </div>

        {/* Footer ticker */}
        <div className="relative flex items-center gap-3 border-t border-line px-4 py-2.5 sm:gap-4 sm:px-5">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-dim">
            ticker
          </span>
          <div className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto [mask-image:linear-gradient(to_right,black_88%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <TickerItem ts="14:21" text="simcenter · deploy shipped to prod" />
            <TickerItem
              ts="13:58"
              text="venue-ops · mcp tool surface in review"
              warn
            />
            <TickerItem ts="11:04" text="sim-pull · session recovery patched" />
          </div>
        </div>
      </div>

      {/* Soft outer glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -bottom-10 h-32 bg-rust/10 blur-3xl"
      />
    </div>
  );
}

function Metric({
  label,
  value,
  sub,
  warn,
}: {
  label: string;
  value: string;
  sub: string;
  warn?: boolean;
}) {
  return (
    <div className="min-w-0 border border-line bg-bg-raised/60 px-3 py-3">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-dim">
        {label}
      </div>
      <div className="mt-1.5">
        <div
          className={`readout text-2xl font-semibold ${warn ? "text-rust-soft" : "text-white"}`}
        >
          {value}
        </div>
        <div className="mt-0.5 font-mono text-[10px] leading-snug text-ink-muted">
          {sub}
        </div>
      </div>
    </div>
  );
}

function TickerItem({
  ts,
  text,
  warn,
}: {
  ts: string;
  text: string;
  warn?: boolean;
}) {
  return (
    <div className="flex shrink-0 items-center gap-2 whitespace-nowrap font-mono text-[10.5px]">
      <span className="text-ink-dim">{ts}</span>
      <span className={warn ? "text-rust-soft" : "text-ink-muted"}>{text}</span>
    </div>
  );
}
