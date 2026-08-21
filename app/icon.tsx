import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 6,
        }}
      >
        <svg width="24" height="17" viewBox="6 24 84 58" fill="none">
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
    { ...size }
  );
}
