import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/Prose";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { posts, getPost, formatPostDate } from "@/lib/posts";
import { relatedPosts, tagToSlug, allTags } from "@/lib/tags";
import { SITE_URL, SITE_NAME } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Article not found" };
  }
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [SITE_NAME],
      tags: [...post.tags],
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

/** Estimate word count from the "N min read" string (approx 220 wpm). */
function estimateWordCount(readingTime: string): number {
  const m = readingTime.match(/(\d+)/);
  if (!m) return 0;
  return Number(m[1]) * 220;
}

export default async function PostPage(props: { params: Promise<Params> }) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const wordCount = estimateWordCount(post.readingTime);
  const related = relatedPosts(post, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-US",
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: [`${SITE_URL}/blog/${post.slug}/opengraph-image`],
    articleSection: post.tags[0],
    keywords: post.tags.join(", "),
    wordCount,
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Operator-led firm building and running operations infrastructure for simulator venues.",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon`,
      },
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article className="relative">
        <header className="relative overflow-hidden border-b border-line">
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
                <Link
                  href={`/blog/tag/${tagToSlug(post.tags[0])}`}
                  className="text-rust-soft transition-colors hover:text-white"
                >
                  {post.tags[0]}
                </Link>
              </nav>

              <h1 className="text-balance text-3xl font-semibold tracking-tighter2 text-white md:text-5xl md:leading-[1.05]">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime}</span>
                <span aria-hidden>·</span>
                <span>By {SITE_NAME}</span>
              </div>
            </div>
          </Container>
        </header>

        <section className="py-14 md:py-20">
          <Container>
            <Prose className="mx-auto max-w-3xl">
              <post.Body />
            </Prose>

            <div className="mx-auto mt-12 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 border-t border-line pt-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
                  Filed under:
                </span>
                {post.tags.map((t) => (
                  <Link
                    key={t}
                    href={`/blog/tag/${tagToSlug(t)}`}
                    className="rounded border border-line bg-bg-panel px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:border-line-strong hover:text-white"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-line bg-bg-raised p-6 md:p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-rust-soft">
                Working on this at your venue?
              </div>
              <p className="mt-3 text-pretty text-[15px] text-ink-muted md:text-base">
                Martian Industries runs a focused Simulator Venue Systems
                Audit covering booking, check-in, simulator software, remote
                support, staff workflows, and missed revenue. Operator-led,
                no long-term commitment.
              </p>
              <div className="mt-5">
                <Button href="/#contact" variant="primary">
                  Request an audit
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {related.length > 0 ? (
          <section className="border-t border-line py-14 md:py-20">
            <Container>
              <div className="mx-auto max-w-3xl">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
                  Related articles
                </div>
                <ul className="mt-6 divide-y divide-line">
                  {related.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="group block py-5"
                      >
                        <h3 className="text-lg font-semibold tracking-tightish text-white transition-colors group-hover:text-rust-soft">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm text-ink-muted">
                          {p.description}
                        </p>
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
                      className="rounded border border-line bg-bg-panel px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:border-line-strong hover:text-white"
                    >
                      {t.tag}
                      <span className="ml-1.5 text-ink-dim">{t.count}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        ) : null}
      </article>
    </>
  );
}
