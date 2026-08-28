/**
 * Subtle "venue ops" panel used in the hero.
 * Pure CSS + inline SVG. No images, no animations beyond a slow opacity pulse.
 * All copy here is illustrative and meant to read like a real ops console.
 */
const bays = [
  { id: "BAY-01", state: "live", label: "Session · 0:42 / 1:00" },
  { id: "BAY-02", state: "live", label: "Session · 0:18 / 1:00" },
  { id: "BAY-03", state: "idle", label: "Idle · ready" },
  { id: "BAY-04", state: "live", label: "Session · 0:51 / 1:30" },
  { id: "BAY-05", state: "warn", label: "Launch monitor lag" },
  { id: "BAY-06", state: "live", label: "Session · 0:09 / 1:00" },
];

const dot: Record<string, string> = {
  live: "bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.12)]",
  idle: "bg-ink-dim shadow-[0_0_0_3px_rgba(107,114,128,0.12)]",
  warn: "bg-rust shadow-[0_0_0_3px_rgba(194,85,45,0.18)]",
};

export function DashboardPanel() {
  return (
    <div className="relative">
      {/* Outer frame */}
      <div className="relative overflow-hidden rounded-xl border border-line-strong bg-bg-panel">
        {/* Faint grid background */}
        <div
          aria-hidden
          className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.55]"
        />
        <div aria-hidden className="absolute inset-0 panel-vignette" />

        {/* Header bar */}
        <div className="relative flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-line-strong" />
              <span className="h-2 w-2 rounded-full bg-line-strong" />
              <span className="h-2 w-2 rounded-full bg-line-strong" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
              ops · live
            </span>
          </div>
          <span className="truncate font-mono text-[11px] text-ink-dim">
            venue-01 · 14:22 local
          </span>
        </div>

        {/* Body */}
        <div className="relative grid grid-cols-1 gap-4 p-4 sm:gap-5 sm:p-5 md:grid-cols-3">
          {/* Bay status grid */}
          <div className="min-w-0 md:col-span-2">
            <div className="mb-3 flex items-baseline justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                bay status
              </span>
              <span className="truncate font-mono text-[11px] text-ink-dim">
                5 / 6 active
              </span>
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {bays.map((b) => (
                <li
                  key={b.id}
                  className="flex min-w-0 flex-col items-start gap-1 rounded-md border border-line bg-bg-raised/60 px-2.5 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:px-3 sm:py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${dot[b.state]}`}
                      aria-hidden
                    />
                    <span className="font-mono text-[11px] text-ink">
                      {b.id}
                    </span>
                  </div>
                  <span className="max-w-full truncate font-mono text-[10.5px] text-ink-muted">
                    {b.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Side metrics */}
          <div className="flex flex-col gap-3">
            <Metric label="Today" value="38" sub="bookings" />
            <Metric label="Utilization" value="84%" sub="rolling 4h" />
            <Metric label="Open issues" value="1" sub="bay-05 monitor" warn />
          </div>
        </div>

        {/* Footer ticker */}
        <div className="relative flex items-center gap-3 border-t border-line px-4 py-2.5 sm:gap-4 sm:px-5">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-dim">
            ticker
          </span>
          <div className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto [mask-image:linear-gradient(to_right,black_88%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <TickerItem ts="14:21" text="bay-04 session started · party of 3" />
            <TickerItem
              ts="14:18"
              text="bay-05 launch monitor reconnect issued"
              warn
            />
            <TickerItem ts="14:14" text="check-in · 4 guests · 60 min" />
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
    <div className="rounded-md border border-line bg-bg-raised/60 px-3 py-3">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-dim">
        {label}
      </div>
      <div className="mt-1 flex items-baseline gap-2">
        <span
          className={`text-2xl font-semibold tracking-tighter2 ${warn ? "text-rust-soft" : "text-white"}`}
        >
          {value}
        </span>
        <span className="max-w-full truncate font-mono text-[10.5px] text-ink-muted">{sub}</span>
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
