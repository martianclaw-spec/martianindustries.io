import type { ComponentType } from "react";
import {
  meta as bookingMeta,
  default as BookingBody,
} from "@/content/posts/booking-software-for-simulator-venues";
import {
  meta as noShowsMeta,
  default as NoShowsBody,
} from "@/content/posts/reducing-no-shows-at-simulator-venues";
import {
  meta as auditMeta,
  default as AuditBody,
} from "@/content/posts/simulator-venue-systems-audit-checklist";
import {
  meta as simRacingMeta,
  default as SimRacingBody,
} from "@/content/posts/sim-racing-vs-golf-simulator-operations";
import {
  meta as costMeta,
  default as CostBody,
} from "@/content/posts/cost-to-open-a-golf-simulator-venue";
import {
  meta as layoutMeta,
  default as LayoutBody,
} from "@/content/posts/golf-simulator-lounge-layout-and-bay-design";
import {
  meta as launchMonitorMeta,
  default as LaunchMonitorBody,
} from "@/content/posts/launch-monitor-comparison-for-simulator-venues";
import {
  meta as pricingMeta,
  default as PricingBody,
} from "@/content/posts/pricing-strategy-for-simulator-venues";
import {
  meta as simRacingLoungeMeta,
  default as SimRacingLoungeBody,
} from "@/content/posts/building-a-sim-racing-lounge";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601 date string */
  date: string;
  readingTime: string;
  tags: readonly string[];
};

export type Post = PostMeta & {
  Body: ComponentType;
};

const all: Post[] = [
  { ...bookingMeta, Body: BookingBody },
  { ...noShowsMeta, Body: NoShowsBody },
  { ...auditMeta, Body: AuditBody },
  { ...simRacingMeta, Body: SimRacingBody },
  { ...costMeta, Body: CostBody },
  { ...layoutMeta, Body: LayoutBody },
  { ...launchMonitorMeta, Body: LaunchMonitorBody },
  { ...pricingMeta, Body: PricingBody },
  { ...simRacingLoungeMeta, Body: SimRacingLoungeBody },
];

/** Posts sorted newest first. */
export const posts: Post[] = [...all].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
