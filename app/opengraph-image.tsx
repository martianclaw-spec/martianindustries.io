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
            gap: 12,
            fontSize: 22,
            color: "#d97a52",
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 500,
            zIndex: 1,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#c2552d",
              display: "block",
            }}
          />
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
          <span>Operations infrastructure</span>
          <span style={{ color: "#9aa1ad" }}>for simulator venues.</span>
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
