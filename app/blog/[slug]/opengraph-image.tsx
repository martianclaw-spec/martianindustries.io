import { ImageResponse } from "next/og";
import { getPost, posts } from "@/lib/posts";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  return [
    {
      id: "default",
      alt: post?.title ?? SITE_NAME,
      size,
      contentType,
    },
  ];
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const title = post?.title ?? "Martian Industries article";
  const tag = post?.tags[0] ?? "Operations";

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
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -160,
            width: 700,
            height: 500,
            background:
              "radial-gradient(closest-side, rgba(194,85,45,0.22), transparent)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            color: "#d97a52",
            letterSpacing: 5,
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
          {SITE_NAME} · {tag}
        </div>

        <div
          style={{
            marginTop: "auto",
            fontSize: title.length > 60 ? 60 : 72,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: -1.5,
            color: "#ffffff",
            zIndex: 1,
            display: "flex",
            maxWidth: 1050,
          }}
        >
          {title}
        </div>

        <div
          style={{
            marginTop: 40,
            paddingTop: 24,
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
          <span>Field notes for simulator venue operators</span>
          <span>martianindustries.io/blog</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
