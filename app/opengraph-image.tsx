import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE_NAME}. ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#08090b",
          color: "#e6e8ee",
          padding: "72px",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* faint grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.7,
          }}
        />

        {/* rust glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: 200,
            width: 900,
            height: 500,
            background: "radial-gradient(closest-side, rgba(194,85,45,0.25), transparent)",
          }}
        />

        {/* eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            color: "#d97a52",
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 500,
            zIndex: 1,
          }}
        >
          <svg width="34" height="24" viewBox="6 24 84 58" fill="none">
            <g transform="translate(9,0) skewX(-12)">
              <rect x="16" y="26" width="12" height="54" rx="2" fill="#e6e8ee" />
              <rect x="34" y="42" width="12" height="38" rx="2" fill="#c2552d" />
              <rect x="52" y="42" width="12" height="38" rx="2" fill="#c2552d" />
              <rect x="70" y="26" width="12" height="54" rx="2" fill="#e6e8ee" />
            </g>
            <circle cx="83" cy="75" r="5" fill="#c2552d" />
          </svg>
          {SITE_NAME}
        </div>

        {/* headline */}
        <div
          style={{
            marginTop: "auto",
            fontSize: 84,
            fontWeight: 600,
            lineHeight: 1.04,
            letterSpacing: -2,
            color: "#ffffff",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>We build the software</span>
          <span style={{ color: "#9aa1ad" }}>your operation runs on.</span>
        </div>

        {/* footer line */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 28,
            borderTop: "1px solid #1c2029",
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#9aa1ad",
            letterSpacing: 2,
            textTransform: "uppercase",
            zIndex: 1,
          }}
        >
          <span>Booking · Check-in · Sim stack · Remote support</span>
          <span>martianindustries.io</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
