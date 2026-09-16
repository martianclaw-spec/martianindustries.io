import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { Backdrop } from "@/components/atmos/Backdrop";
import { Reveal } from "@/components/atmos/Reveal";
import { ChatSpecimen } from "@/components/rover/ChatSpecimen";
import { ConfirmSpecimen } from "@/components/rover/ConfirmSpecimen";
import { ROVER_TAGLINE, roverOurs, roverYours } from "@/lib/rover";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/site";

/*
 * Rover, the owner editing service, as its own page. The Mars reference lives
 * in the name only; every sentence about what it does stays literal. No price
 * and no availability date, per the site's standing rule.
 */

export const metadata: Metadata = {
  title: "Rover, change your own website",
  description:
    "Rover lets you change the words, prices, photos and lists on your own website by clicking them or asking in plain English. You see every change before it goes live, and anything can be undone.",
  alternates: { canonical: "/rover" },
  openGraph: {
    title: "Rover by Martian Industries",
    description: ROVER_TAGLINE,
    url: `${SITE_URL}/rover`,
    type: "website",
  },
};

const steps = [
  {
    step: "01",
    title: "Sign in with your email",
    body: "A six-digit code arrives in your inbox. There is no password to remember or lose.",
  },
  {
    step: "02",
    title: "Click it or say it",
    body: "Everything you are allowed to change is outlined on your live site. Click one, or type what you want the way you would text a person.",
  },
  {
    step: "03",
    title: "See it before it happens",
    body: "Rover shows what your site says now next to what it will say, and nothing changes until you say yes.",
  },
  {
    step: "04",
    title: "Live, with a receipt",
    body: "Your site updates within seconds. Every change emails you a receipt, and anything can be undone.",
  },
];

const fit = [
  {
    code: "R-01",
    label: "Works with",
    body: "Custom sites written in HTML, React or Next.js, whoever built them.",
  },
  {
    code: "R-02",
    label: "Not a fit",
    body: "WordPress, Squarespace, Wix and Shopify. They come with editors of their own, and we would rather say so than sell you a second one.",
  },
  {
    code: "R-03",
    label: "What we do",
    body: "Mark which spots on your site are yours, connect them to Rover, and test every one on your real site before you ever sign in.",
  },
  {
    code: "R-04",
    label: "If Rover is unreachable",
    body: "Your site keeps showing exactly what it already says. It never goes blank waiting on us.",
  },
];

const roverFaqs: FAQItem[] = [
  {
    q: "What is Rover?",
    a: "Rover is how you change your own website after it launches. You sign in, your real site opens with a helper beside it, and you either click the thing you want to change or type what you want in plain English. Rover shows you exactly what will change, waits for your yes, and the change is live within seconds.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. If you can send a text message, you can use Rover. It speaks plain English and always tells you exactly what it is about to change before it changes anything.",
  },
  {
    q: "Can I break my website with it?",
    a: "No. You can only change the spots we mark as yours, such as words, prices, photos and lists. The design, the layout, the pages and anything touching payments or bookings are not on your screen at all.",
  },
  {
    q: "What if I make a mistake?",
    a: "Undo it. Every change can be reversed from the screen, from the link in your email receipt, or by asking Rover to put it back.",
  },
  {
    q: "What happens when I ask for something Rover cannot do?",
    a: "It says so plainly and sends your request to us with your words attached, so you never have to explain it twice.",
  },
  {
    q: "Does it work on a website someone else built?",
    a: "Often, yes. Custom sites built with HTML, React or Next.js can be connected, and your code and hosting stay where they are. WordPress, Squarespace, Wix and Shopify already have their own editors, so Rover is not a fit for them.",
  },
  {
    q: "What about photos from my phone?",
    a: "Upload them straight from your phone. Rover resizes them for the web and strips out their location data before they go live.",
  },
  {
    q: "How do I sign in?",
    a: "With your email address. Rover emails you a six-digit code, so there is no password to remember, and you stay signed in on your own device for 30 days.",
  },
  {
    q: "What does Rover cost?",
    a: "It depends on your site and how much of it is yours to change. Terms come out of a short call and are written into a proposal before you commit. We do not quote prices on this page.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rover",
  serviceType: "Website content editing for business owners",
  description:
    "Rover lets a business owner change the words, prices, photos and lists on their own custom website by clicking them or asking in plain English, with a confirm step before anything goes live and undo on every change.",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
  },
  areaServed: "Worldwide",
  url: `${SITE_URL}/rover`,
};

export default function RoverPage() {
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
              <span className="min-w-0">Rover · By Martian Industries</span>
            </div>

            <h1 className="text-balance break-words text-[clamp(2rem,7.5vw,2.25rem)] font-semibold tracking-tighter2 text-white sm:text-5xl md:text-[56px] md:leading-[1.05]">
              Change your own website{" "}
              <span className="text-ink-muted">by telling it what you want.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-ink-muted md:text-lg">
              Rover opens your real website with a helper beside it. Click the
              headline, price or photo you want to change, or just type what
              you want in your own words. You see exactly what will change, say
              yes, and it is live within seconds.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/#contact" variant="primary">
                Add Rover to your site
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
              <span>No password</span>
              <span aria-hidden>·</span>
              <span>Nothing live without your yes</span>
              <span aria-hidden>·</span>
              <span>Undo anything</span>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works: steps down the left, a real exchange on the right */}
      <Section id="how" className="border-t border-line">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-6">
            <SectionHeader
              eyebrow="How it works"
              title="Four steps, and you are in control of every one."
            />

            <ol className="relative mt-12 space-y-10">
              <span
                aria-hidden
                className="pointer-events-none absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-line"
              />
              {steps.map((s, i) => (
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
            <ChatSpecimen />
          </Reveal>
        </div>
      </Section>

      {/* What is yours: the confirm step on the left, the split on the right */}
      <Section id="yours" className="border-t border-line">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="order-2 min-w-0 lg:order-1 lg:col-span-6">
            <ConfirmSpecimen />
          </Reveal>

          <div className="order-1 min-w-0 lg:order-2 lg:col-span-6">
            <SectionHeader
              eyebrow="What is yours"
              title="Your words, prices and photos. Not the parts that break."
              description="We decide with you which spots on your site are yours to change. Everything else stays with us, which is why nothing you do in Rover can break your site."
            />

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <Reveal className="min-w-0">
                <div className="border-l border-rust pl-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rust-soft">
                    Yours to change
                  </div>
                  <ul className="mt-4 space-y-3">
                    {roverYours.map((item) => (
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

              <Reveal delay={60} className="min-w-0">
                <div className="border-l border-line-strong pl-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">
                    Stays with us
                  </div>
                  <ul className="mt-4 space-y-3">
                    {roverOurs.map((item) => (
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
              </Reveal>
            </div>

            <p className="mt-10 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-dim">
              Photos go up straight from your phone. Rover resizes them for the
              web and strips out their location data before they go live.
            </p>
          </div>
        </div>
      </Section>

      {/* Existing sites: a statement on the left, a specification sheet on the right */}
      <Section id="existing-sites" className="border-t border-line">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeader
              eyebrow="Already have a website?"
              title="Rover works on sites someone else built, too."
              description="If your site is custom code, we can connect Rover to it. Your developer, your hosting and your code stay exactly where they are."
            />
          </div>

          <dl className="min-w-0 border-t border-line lg:col-span-7">
            {fit.map((row, i) => (
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

      <FAQ
        id="faq"
        eyebrow="Rover FAQ"
        title="What owners ask before they try it."
        description="If yours is not here, ask us directly. The contact section routes straight to us."
        items={roverFaqs}
      />

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <Backdrop gridMask="center" />

        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tighter2 text-white md:text-5xl">
              Want Rover on your site?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-ink-muted md:text-lg">
              Tell us what site you have today and the small changes you keep
              emailing someone about. We will tell you honestly whether Rover
              fits.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/#contact" variant="primary">
                Add Rover to your site
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
