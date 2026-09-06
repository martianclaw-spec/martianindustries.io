import { DustField } from "./DustField";
import { Ridgeline } from "./Terrain";

/**
 * The standard atmospheric stack behind a hero or closing section: survey
 * grid, the wash of a low sun, suspended dust, and optionally a ridge along
 * the bottom edge.
 *
 * Every layer is decorative and non-interactive. The parent must be
 * `relative overflow-hidden` so the dust canvas and ridge are clipped rather
 * than widening the page.
 */
export function Backdrop({
  ridge = false,
  gridMask = "top",
}: {
  ridge?: boolean;
  /** Where the survey grid fades from. Heroes use "top", CTAs use "center". */
  gridMask?: "top" | "center";
}) {
  const mask =
    gridMask === "center"
      ? "[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      : "[mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]";

  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-[0.35] ${mask}`}
      />
      <div
        aria-hidden
        className="mars-horizon pointer-events-none absolute inset-0"
      />
      <DustField className="pointer-events-none absolute inset-0 h-full w-full" />
      {ridge ? (
        <Ridgeline className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full md:h-28" />
      ) : null}
    </>
  );
}
