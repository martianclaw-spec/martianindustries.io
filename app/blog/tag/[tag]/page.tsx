import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CardLabel } from "@/components/ui/Card";
import { JsonLd } from "@/components/JsonLd";
import { formatPostDate } from "@/lib/posts";
import {
  allTags,
  postsForTag,
  slugToTag,
  tagToSlug,
} from "@/lib/tags";
import { SITE_URL, SITE_NAME } from "@/lib/site";

type Params = { tag: string };

export function generateStaticParams(): Params[] {
  return allTags().map((t) => ({ tag: t.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { tag } = await props.params;
  const display = slugToTag(tag);
  if (!display) {
    return { title: "Topic not found" };
  }
  const title = `${display} — articles for simulator venue operators`;
  const description = `Field-tested articles on ${display.toLowerCase()} for golf and sim racing simulator venues, written by operators running real venues.`;
  return {
    title,
    description,
    alternates: { canonical: `/blog/tag/${tag}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/tag/${tag}`,
      type: "website",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function TagPage(props: {
  params: Promise<Params>;
}) {
  const { tag } = await props.params;
  const display = slugToTag(tag);
  if (!display) notFound();
  const tagged = postsForTag(display);
  const url = `${SITE_URL}/blog/tag/${tag}`;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${display} articles`,
    url,
    inLanguage: "en-US",
    description: `Articles about ${display.toLowerCase()} for simulator venue operators.`,
    isPartOf: {
      "@type": "Blog",
      name: `${SITE_NAME} Articles`,
      url: `${SITE_URL}/blog`,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: tagged.length,
      itemListElement: tagged.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: `${SITE_URL}/blog`,
      },
      { "@type": "ListItem", position: 3, name: display, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-[0.3] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <Container className="relative">
          <div className="max-w-3xl py-16 md:py-20">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim"
            >
              <Link
                href="/blog"
                className="transition-colors hover:text-white"
              >
                Articles
              </Link>
              <span aria-hidden>/</span>
              <span className="text-rust-soft">{display}</span>
            </nav>
            <h1 className="text-balance text-3xl font-semibold tracking-tighter2 text-white md:text-5xl md:leading-[1.05]">
              {display}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base text-ink-muted md:text-lg">
              {tagged.length} article{tagged.length === 1 ? "" : "s"} on{" "}
              {display.toLowerCase()} for simulator venue operators.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <ul className="divide-y divide-line">
            {tagged.map((p) => (
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

          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-line pt-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
              Browse all topics:
            </span>
            {allTags().map((t) => (
              <Link
                key={t.slug}
                href={`/blog/tag/${t.slug}`}
                className={`rounded border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                  t.slug === tag
                    ? "border-rust/60 bg-rust/10 text-rust-soft"
                    : "border-line bg-bg-panel text-ink-muted hover:border-line-strong hover:text-white"
                }`}
              >
                {t.tag}
                <span className="ml-1.5 text-ink-dim">{t.count}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
