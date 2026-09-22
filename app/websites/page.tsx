import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { Backdrop } from "@/components/atmos/Backdrop";
import { Reveal } from "@/components/atmos/Reveal";
import {
  WEBSITES_TAGLINE,
  WEBSITES_HOME,
  websiteSteps,
  websiteIncluded,
  websiteFor,
  websiteCaveats,
} from "@/lib/websites";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/site";

/*
 * Websites as their own page. The offer is preview first: we build the real
 * site before any payment, the owner looks at it on their phone, and decides
 * whether we keep it up or take it down. No price and no delivery date, per
 * the site's standing rule. The launch date is agreed in writing after the
 * owner has seen the preview.
 */

export const metadata: Metadata = {
  title: "Websites you own, built before you pay",
  description:
    "We build a working preview of your new website before you pay anything. You look at it on your phone, tell us what is wrong, and decide whether we keep it up or take it down. Custom code you own, on your own domain, with Rover afterwards so you change it yourself.",
  alternates: { canonical: "/websites" },
  openGraph: {
    title: "Websites by Martian Industries",
    description: WEBSITES_TAGLINE,
    url: `${SITE_URL}/websites`,
    type: "website",
  },
};

const websiteFaqs: FAQItem[] = [
  {
    q: "Do I own the website?",
    a: "Yes. The code, the domain and the account the site runs on are in your name. If you ever want someone else to work on it, they can, and nothing about it depends on us staying involved.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the site. The number comes out of a short call and is written into a proposal before you commit to anything, and the preview comes before that. We do not quote prices on this page.",
  },
  {
    q: "What happens if I look at the preview and say no?",
    a: "We take it down. You owe nothing, and we do not chase you. The preview is how we earn the work, not a way to trap you into it.",
  },
  {
    q: "What if I already have a website?",
    a: "We start by looking at it. Sometimes the honest answer is that it is fine, or that a small fix is all it needs, and we will say so. If it is holding you back, we build the preview alongside it. Your current site stays up until you choose to switch, and we move your domain over when you do.",
  },
  {
    q: "Can I change it myself afterwards?",
    a: "Yes, with <a href=\"/rover\">Rover</a>. You open your own site, click the headline, price or photo you want to change, or type what you want in plain English, and see exactly what will change before it goes live. Every change can be undone. Rover is optional and has its own page.",
  },
  {
    q: "Do you do online ordering or booking?",
    a: "Yes, as custom software with its own scoping. That is the <a href=\"/build\">rest of what we build</a>. If you already take orders or bookings through something like Toast or SpotOn, you keep it, and the website links to it the way your customers expect.",
  },
  {
    q: "What do you need from me?",
    a: "Less than you would think to start. Your business name, what you do, your hours and a phone number are usually already on your Google listing. Photos help if you have them. Once the preview is up, the most useful thing you can give us is an honest read of every word on it.",
  },
  {
    q: "How long does it take?",
    a: "The preview comes first, and you see it before you commit to anything. Once you have looked at it and told us what to change, the launch date is agreed in writing as part of the proposal. We do not promise a duration on this page, because the honest number depends on what you tell us after you have seen it.",
  },
  {
    q: "Do you host it?",
    a: "We can, or it can run on an account in your name from the start. Either way the code and the deployment are yours, and the terms for hosting are part of the written proposal rather than a surprise later.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Websites",
  serviceType: "Custom-coded business websites",
  description:
    "Custom-coded websites for owner-run businesses. The studio builds a working preview of the new site before any payment, the owner reviews it and decides whether to keep it, and the site launches on the owner's own domain with business email and search setup. The owner keeps the code and the deployment, with Rover available afterwards for editing words, prices, photos and lists.",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: "+1-814-215-7925",
  },
  areaServed: "Worldwide",
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Owner-run local businesses: restaurants, contractors, shops, salons, clinics, venues and professional offices",
  },
  url: `${SITE_URL}/websites`,
};

export default function WebsitesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Backdrop ridge />

        <Container className="relative">
          <div className="mx-auto max-w-3xl pb-16 pt-16 text-center md:pb-24 md:pt-24">
            <div className="mb-6 inline-flex max-w-full items-center gap-2.5 border border-line bg-bg-raised/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rust" aria-hidden />
              <span className="min-w-0">Websites · By Martian Industries</span>
            </div>

            <h1 className="text-balance break-words text-[clamp(2rem,7.5vw,2.25rem)] font-semibold tracking-tighter2 text-white sm:text-5xl md:text-[56px] md:leading-[1.05]">
              A website you own,{" "}
              <span className="text-ink-muted">built before you pay for it.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-ink-muted md:text-lg">
              We build a working preview of your new site first, written in
              code rather than dragged together in a page builder. You open it
              on your phone, tell us what is wrong, and decide whether we keep
              it up or take it down. Nothing is owed until you say keep it.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/#contact" variant="primary">
                See your site first
                <Arrow />
              </Button>
              <Link
                href="#how"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim transition-colors hover:text-white"
              >
                See how it works
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
              <span>See it before you pay</span>
              <span aria-hidden>·</span>
              <span>You own the code</span>
              <span aria-hidden>·</span>
              <span>Change it yourself with Rover</span>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works: steps down the left, the note we send on the right */}
      <Section id="how" className="border-t border-line">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-6">
            <SectionHeader
              eyebrow="How it works"
              title="Four steps, and the first three cost you nothing."
            />

            <ol className="relative mt-12 space-y-10">
              <span
                aria-hidden
                className="pointer-events-none absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-line"
              />
              {websiteSteps.map((s, i) => (
                <li key={s.step} className="group relative min-w-0 pl-8">
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 h-2.5 w-2.5 bg-rust transition-transform duration-300 group-hover:scale-125"
                  />
                  <Reveal delay={i * 60} className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rust-soft">
                      Step {s.step}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold tracking-tightish text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-muted">
                      {s.body}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <Reveal delay={120} className="min-w-0 lg:col-span-6 lg:pt-24">
            <PreviewSpecimen />
          </Reveal>
        </div>
      </Section>

      {/* What is included: a statement on the left, a specification sheet on the right */}
      <Section id="included" className="border-t border-line">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeader
              eyebrow="What is included"
              title="What you get, and what you keep."
              description="Everything on this sheet is part of a website build. There is no upsell hiding in it. The last row is optional and has a page of its own."
            />
            <Link
              href="/rover"
              className="mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.16em] text-rust-soft transition-colors hover:text-white"
            >
              How Rover works
            </Link>
          </div>

          <dl className="min-w-0 border-t border-line lg:col-span-7">
            {websiteIncluded.map((row, i) => (
              <Reveal key={row.code} delay={i * 60} className="min-w-0">
                <div className="grid gap-2 border-b border-line py-6 sm:grid-cols-12 sm:gap-6">
                  <dt className="min-w-0 sm:col-span-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rust-soft">
                      {row.code}
                    </div>
                    <div className="mt-1.5 text-[15px] font-semibold tracking-tightish text-white">
                      {row.label}
                    </div>
                  </dt>
                  <dd className="min-w-0 text-[15px] leading-relaxed text-ink-muted sm:col-span-8">
                    {row.body}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>

      {/* Who it is for: the fit on the left, the honest caveats on the right */}
      <Section id="fit" className="border-t border-line">
        <SectionHeader
          eyebrow="Who it is for"
          title="Owner-run businesses, mostly local ones."
          description={`We are in ${WEBSITES_HOME}, and most of our first website clients are in central Pennsylvania. Nothing about the work is tied to a place. The preview link opens the same on a phone anywhere.`}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-10">
          <Reveal className="min-w-0 lg:col-span-5">
            <div className="border-l border-rust pl-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rust-soft">
                Built for
              </div>
              <ul className="mt-4 space-y-3">
                {websiteFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-muted"
                  >
                    <span aria-hidden className="mt-2 inline-block h-1 w-1 shrink-0 bg-rust" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={60} className="min-w-0 lg:col-span-7">
            <div className="border-l border-line-strong pl-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">
                What we will tell you straight
              </div>
              <ul className="mt-4 space-y-4">
                {websiteCaveats.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-muted"
                  >
                    <span aria-hidden className="mt-2 inline-block h-1 w-1 shrink-0 bg-line-strong" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-10 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-dim">
              A website is the one piece of software almost every business
              needs, and most of them are renting theirs. We would rather build
              you one you own, and we would rather say so up front when you do
              not need us to.
            </p>
          </Reveal>
        </div>
      </Section>

      <FAQ
        id="faq"
        eyebrow="Websites FAQ"
        title="What owners ask before they see the preview."
        description="If yours is not here, ask us directly. The contact section routes straight to us."
        items={websiteFaqs}
      />

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <Backdrop gridMask="center" />

        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tighter2 text-white md:text-5xl">
              Want to see your new website before you decide?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-ink-muted md:text-lg">
              Tell us the name of your business and where to find it online. We
              will look, build the preview, and send you the link to open on
              your phone.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/#contact" variant="primary">
                See your site first
                <Arrow />
              </Button>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                hello@martianindustries.io · (814) 215-7925
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/**
 * The note an owner gets when their preview is up, shown as a specimen rather
 * than described. Its wording follows what we actually send, so the page shows
 * what a client will see. Registration marks on the corners are structural
 * accent, not decoration.
 */
function PreviewSpecimen() {
  return (
    <div className="relative border border-line bg-bg-raised">
      <RegistrationMark className="left-0 top-0 border-l border-t" />
      <RegistrationMark className="right-0 top-0 border-r border-t" />
      <RegistrationMark className="bottom-0 left-0 border-b border-l" />
      <RegistrationMark className="bottom-0 right-0 border-b border-r" />

      <div className="flex items-center justify-between border-b border-line px-5 py-3 md:px-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rust-soft">
          Preview · What we send you
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">
          Step 02
        </div>
      </div>

      <div className="px-5 py-6 md:px-6 md:py-7">
        <p className="text-lg font-semibold tracking-tightish text-white">
          Your new website is up for you to look at.
        </p>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
          Open it on your phone. Read every word. Tell us anything that is
          wrong, missing, or not how you would say it. Then pick one.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="min-w-0 border-l border-rust pl-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rust-soft">
              Keep it
            </div>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
              We write up the proposal, agree the launch date in it, and move
              the site to your own domain.
            </p>
          </div>
          <div className="min-w-0 border-l border-line-strong pl-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">
              Take it down
            </div>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
              We take the preview down. Nothing is owed, and we do not chase
              you.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-line px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim md:px-6">
        Nothing is final until you say so
      </div>
    </div>
  );
}

function RegistrationMark({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute h-2.5 w-2.5 border-rust ${className}`}
    />
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="transition-transform duration-150 group-hover:translate-x-0.5"
    >
      <path
        d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
