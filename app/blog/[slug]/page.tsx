import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/Prose";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { posts, getPost, formatPostDate } from "@/lib/posts";
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
      authors: [SITE_NAME],
      tags: [...post.tags],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage(props: { params: Promise<Params> }) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;

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
    image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
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
    keywords: post.tags.join(", "),
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

  // Other posts to read after this one (excluding current).
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

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
                <span className="text-rust-soft">{post.tags[0]}</span>
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

            <div className="mx-auto mt-16 max-w-3xl rounded-lg border border-line bg-bg-raised p-6 md:p-8">
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

        {more.length > 0 ? (
          <section className="border-t border-line py-14 md:py-20">
            <Container>
              <div className="mx-auto max-w-3xl">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
                  More articles
                </div>
                <ul className="mt-6 divide-y divide-line">
                  {more.map((p) => (
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
              </div>
            </Container>
          </section>
        ) : null}
      </article>
    </>
  );
}
