import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CardLabel } from "@/components/ui/Card";
import { JsonLd } from "@/components/JsonLd";
import { posts, formatPostDate } from "@/lib/posts";
import { allTags } from "@/lib/tags";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Articles for simulator venue operators",
  description:
    "Field-tested articles for simulator venue operators on booking, check-in, simulator software, remote support, audits, and the operational details that decide whether a venue runs cleanly.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Articles for simulator venue operators",
    description:
      "Field-tested articles for simulator venue operators on booking, check-in, simulator software, remote support, and audits.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE_NAME} Articles`,
  url: `${SITE_URL}/blog`,
  description:
    "Field-tested articles for simulator venue operators on booking, check-in, simulator software, remote support, and audits.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    url: `${SITE_URL}/blog/${p.slug}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Articles",
      item: `${SITE_URL}/blog`,
    },
  ],
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-[0.3] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <Container className="relative">
          <div className="max-w-3xl py-20 md:py-24">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-bg-raised/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-rust" aria-hidden />
              Articles
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tighter2 text-white md:text-5xl">
              Field notes from running simulator venues.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base text-ink-muted md:text-lg">
              Operator-written articles on the systems that decide whether a
              simulator venue runs cleanly: booking, check-in, simulator
              software, remote support, audits, and the day-to-day details
              that compound into the difference between a good venue and a
              quiet one.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="mb-12 flex flex-wrap items-center gap-2 border-b border-line pb-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
              Browse by topic:
            </span>
            {allTags().map((t) => (
              <Link
                key={t.slug}
                href={`/blog/tag/${t.slug}`}
                className="rounded border border-line bg-bg-panel px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:border-line-strong hover:text-white"
              >
                {t.tag}
                <span className="ml-1.5 text-ink-dim">{t.count}</span>
              </Link>
            ))}
          </div>

          <ul className="divide-y divide-line">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group grid gap-4 py-8 transition-colors md:grid-cols-12 md:gap-8 md:py-10"
                >
                  <div className="md:col-span-3">
                    <CardLabel>{formatPostDate(p.date)}</CardLabel>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-line bg-bg-panel px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="text-balance text-xl font-semibold tracking-tightish text-white transition-colors group-hover:text-rust-soft md:text-2xl">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-pretty text-[15px] text-ink-muted md:text-base">
                      {p.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                      <span>{p.readingTime}</span>
                      <span aria-hidden>·</span>
                      <span className="text-rust-soft transition-colors group-hover:text-white">
                        Read article
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
