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
        <svg width="22" height="22" viewBox="0 0 14 14" fill="none">
          <circle
            cx="7"
            cy="7"
            r="3.25"
            stroke="#c2552d"
            strokeWidth="1.4"
          />
          <circle cx="7" cy="7" r="6" stroke="#3a3f4b" strokeWidth="1" />
          <circle cx="13" cy="7" r="0.9" fill="#c2552d" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
