/**
 * Survey-map furniture. Both of these are static SVG with no client cost, and
 * both are decorative only: aria-hidden, pointer-events-none, absolutely
 * positioned inside an overflow-hidden parent so they cannot affect layout.
 */

/** One irregular closed curve, scaled repeatedly around its own centre. */
const BLOB =
  "M100 10 C140 10 178 34 186 62 C194 90 170 122 132 130 C94 138 46 128 24 104 C2 80 10 44 38 26 C60 12 80 10 100 10 Z";

const RINGS = [1, 0.86, 0.73, 0.61, 0.5, 0.4, 0.31, 0.22, 0.14];

/**
 * Nested elevation contours, the way a survey map renders a rise in terrain.
 * Each ring is the same curve scaled down and rotated slightly, which reads as
 * organic without needing real elevation data.
 */
export function TopoContours({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 140"
      fill="none"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {RINGS.map((s, i) => (
        <path
          key={s}
          d={BLOB}
          stroke="currentColor"
          strokeWidth={0.5 / s}
          // Inner rings sit slightly brighter, so the form reads as a peak.
          opacity={0.25 + i * 0.055}
          transform={`translate(100 70) rotate(${i * 2.4}) scale(${s}) translate(-100 -70)`}
        />
      ))}
    </svg>
  );
}

/**
 * A distant ridge along the bottom of a section. Angular rather than rolling,
 * because Martian horizons are eroded rock rather than soft hills.
 */
export function Ridgeline({ className }: { className?: string }) {
  const ridge =
    "M0 160 L0 112 L86 96 L150 104 L232 74 L300 88 L378 58 L436 70 L520 44 L604 66 L672 52 L760 80 L840 62 L918 86 L1000 70 L1084 96 L1160 82 L1240 104 L1318 92 L1400 110 L1440 102 L1440 160 Z";
  const crest =
    "M0 112 L86 96 L150 104 L232 74 L300 88 L378 58 L436 70 L520 44 L604 66 L672 52 L760 80 L840 62 L918 86 L1000 70 L1084 96 L1160 82 L1240 104 L1318 92 L1400 110 L1440 102";

  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 160"
      fill="none"
      preserveAspectRatio="none"
      className={className}
    >
      <path d={ridge} fill="#3d2c22" fillOpacity="0.32" />
      <path
        d={crest}
        stroke="#8a6b52"
        strokeOpacity="0.4"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
