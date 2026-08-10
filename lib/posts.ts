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
import {
  meta as softwareMeta,
  default as SoftwareBody,
} from "@/content/posts/gspro-vs-e6-connect-simulator-software-for-venues";
import {
  meta as howToStartMeta,
  default as HowToStartBody,
} from "@/content/posts/how-to-start-a-golf-simulator-business";
import {
  meta as insuranceMeta,
  default as InsuranceBody,
} from "@/content/posts/insurance-for-golf-simulator-venues";
import {
  meta as marketingMeta,
  default as MarketingBody,
} from "@/content/posts/marketing-a-golf-simulator-venue";
import {
  meta as staffingMeta,
  default as StaffingBody,
} from "@/content/posts/staffing-and-training-a-simulator-venue";
import {
  meta as revenuePerBayMeta,
  default as RevenuePerBayBody,
} from "@/content/posts/increase-revenue-per-bay-golf-simulator";
import {
  meta as staffingRatiosMeta,
  default as StaffingRatiosBody,
} from "@/content/posts/staffing-ratios-simulator-venue";
import {
  meta as kioskCheckInMeta,
  default as KioskCheckInBody,
} from "@/content/posts/kiosk-vs-staff-check-in-simulator-venues";
import {
  meta as winterOpsMeta,
  default as WinterOpsBody,
} from "@/content/posts/winter-operations-indoor-golf-simulator";
import {
  meta as monitoringMeta,
  default as MonitoringBody,
} from "@/content/posts/monitor-simulator-bay-uptime";

export type HowToStep = {
  name: string;
  text: string;
};

export type HowToMeta = {
  name: string;
  description?: string;
  steps: HowToStep[];
};

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601 date string */
  date: string;
  readingTime: string;
  tags: readonly string[];
  /**
   * Optional HowTo structured data. When present the blog post page emits
   * a schema.org/HowTo alongside the BlogPosting schema. Only add this to
   * posts that are literally "how to do X" step-by-step — Google's HowTo
   * rich result requires the page to actually be a how-to guide.
   */
  howTo?: HowToMeta;
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
  { ...softwareMeta, Body: SoftwareBody },
  { ...howToStartMeta, Body: HowToStartBody },
  { ...insuranceMeta, Body: InsuranceBody },
  { ...marketingMeta, Body: MarketingBody },
  { ...staffingMeta, Body: StaffingBody },
  { ...revenuePerBayMeta, Body: RevenuePerBayBody },
  { ...staffingRatiosMeta, Body: StaffingRatiosBody },
  { ...kioskCheckInMeta, Body: KioskCheckInBody },
  { ...winterOpsMeta, Body: WinterOpsBody },
  { ...monitoringMeta, Body: MonitoringBody },
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
