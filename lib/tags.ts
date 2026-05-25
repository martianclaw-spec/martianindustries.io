/**
 * Tag helpers for blog post taxonomy.
 *
 * Each post declares a `tags` array. We use those tags both for SEO
 * (each tag gets its own indexable /blog/tag/<slug> page) and for
 * internal linking (related-posts widget on every article).
 *
 * Tag display strings are stored as-typed in post meta ("Sim Racing").
 * URL slugs are lowercased dashed versions ("sim-racing").
 */

import { posts, type Post } from "./posts";

export function tagToSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Resolve a slug back to its original display string. */
export function slugToTag(slug: string): string | undefined {
  for (const post of posts) {
    for (const tag of post.tags) {
      if (tagToSlug(tag) === slug) return tag;
    }
  }
  return undefined;
}

export type TagSummary = { tag: string; slug: string; count: number };

/** Every tag used across all posts, with usage counts, sorted by count desc. */
export function allTags(): TagSummary[] {
  const counts = new Map<string, { tag: string; count: number }>();
  for (const post of posts) {
    for (const tag of post.tags) {
      const slug = tagToSlug(tag);
      const existing = counts.get(slug);
      if (existing) existing.count++;
      else counts.set(slug, { tag, count: 1 });
    }
  }
  return Array.from(counts.entries())
    .map(([slug, { tag, count }]) => ({ tag, slug, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** All posts that carry the given tag (display string OR slug). */
export function postsForTag(tagOrSlug: string): Post[] {
  const slug = tagToSlug(tagOrSlug);
  return posts.filter((p) => p.tags.some((t) => tagToSlug(t) === slug));
}

/**
 * Related-posts ranking. Scores by number of shared tags; ties broken by
 * publication recency. Pads with the most recent other posts if fewer
 * than `limit` candidates share any tag.
 */
export function relatedPosts(current: Post, limit = 3): Post[] {
  const scored = posts
    .filter((p) => p.slug !== current.slug)
    .map((p) => {
      const shared = p.tags.filter((t) => current.tags.includes(t)).length;
      return { post: p, shared };
    })
    .filter((x) => x.shared > 0)
    .sort((a, b) => {
      if (b.shared !== a.shared) return b.shared - a.shared;
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    });

  const out = scored.slice(0, limit).map((s) => s.post);
  if (out.length < limit) {
    const have = new Set(out.map((p) => p.slug));
    const filler = posts
      .filter((p) => p.slug !== current.slug && !have.has(p.slug))
      .slice(0, limit - out.length);
    out.push(...filler);
  }
  return out;
}
