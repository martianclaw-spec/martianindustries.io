import { ImageResponse } from "next/og";

// Stable, hosted PNG of the mark-8b badge for use anywhere SVG is not
// supported: email signatures, third-party directories, invoices.
// 128x128 so it stays sharp when displayed at 40-64px (retina).
// URL: https://martianindustries.io/logo-badge.png

export const runtime = "edge";

const SIZE = 128;

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0f12",
          borderRadius: 24,
        }}
      >
        <svg width="96" height="66" viewBox="6 24 84 58" fill="none">
          <g transform="translate(9,0) skewX(-12)">
            <rect x="16" y="26" width="12" height="54" rx="2" fill="#e6e8ee" />
            <rect x="34" y="42" width="12" height="38" rx="2" fill="#c2552d" />
            <rect x="52" y="42" width="12" height="38" rx="2" fill="#c2552d" />
            <rect x="70" y="26" width="12" height="54" rx="2" fill="#e6e8ee" />
          </g>
          <circle cx="83" cy="75" r="5" fill="#c2552d" />
        </svg>
      </div>
    ),
    { width: SIZE, height: SIZE },
  );
}
