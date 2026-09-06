"use client";

import { useEffect, useState } from "react";

/**
 * Mars Sol Date and Coordinated Mars Time, computed for real.
 *
 * Follows the standard Allison and McEwen formulation used by NASA for Mars
 * mission timekeeping. A sol is 24h 39m 35s, so MTC visibly runs slower than
 * the wall clock next to it, which is the entire charm of putting it here.
 *
 *   JD_UT  = 2440587.5 + unixMillis / 86400000
 *   JD_TT  = JD_UT + (TT - UTC) / 86400          TT - UTC is 69.184s today
 *   dJ2000 = JD_TT - 2451545.0
 *   MSD    = (dJ2000 - 4.5) / 1.027491252 + 44796.0 - 0.00096
 *   MTC    = (24 * MSD) mod 24
 */
function marsTime(nowMillis: number) {
  const jdUt = 2440587.5 + nowMillis / 86400000;
  const jdTt = jdUt + 69.184 / 86400;
  const dJ2000 = jdTt - 2451545.0;
  const msd = (dJ2000 - 4.5) / 1.027491252 + 44796.0 - 0.00096;
  const mtc = (24 * msd) % 24;

  const h = Math.floor(mtc);
  const m = Math.floor((mtc - h) * 60);
  const s = Math.floor(((mtc - h) * 60 - m) * 60);
  const pad = (n: number) => String(n).padStart(2, "0");

  return {
    sol: Math.floor(msd),
    clock: `${pad(h)}:${pad(m)}:${pad(s)}`,
  };
}

/**
 * Renders nothing until mounted. Server and client would otherwise disagree
 * on the time and trip a hydration mismatch, and the reserved width keeps the
 * surrounding row from shifting when the value arrives.
 */
export function SolClock({
  className,
  showSeconds = true,
}: {
  className?: string;
  showSeconds?: boolean;
}) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const t = now === null ? null : marsTime(now);
  const clock = t
    ? showSeconds
      ? t.clock
      : t.clock.slice(0, 5)
    : showSeconds
      ? "--:--:--"
      : "--:--";

  return (
    <span className={className} suppressHydrationWarning>
      {/* The sol number is the first thing to go on a narrow screen: the
          clock alone still carries the idea, and the full string will not
          fit beside the panel label at 390px. */}
      <span className="hidden tabular-nums sm:inline">
        SOL {t ? t.sol.toLocaleString("en-US") : "-----"}
      </span>
      <span aria-hidden className="hidden px-1.5 text-ink-dim/50 sm:inline">
        ·
      </span>
      <span className="tabular-nums">{clock} MTC</span>
    </span>
  );
}
