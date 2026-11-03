import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { Backdrop } from "@/components/atmos/Backdrop";
import { WaitlistForm } from "@/components/WaitlistForm";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Martian Core: everything your app needs except the code",
  description:
    "Database and logins, hosting, email, uptime monitoring, analytics and site audits in one account with one bill. Built for building with AI: Claude Code sets up a whole product in one step. Join the waitlist.",
  alternates: { canonical: "/core" },
  openGraph: {
    title: "Martian Core: everything your app needs except the code",
    description: "One account, one bill, no surprise charges. Claude Code sets up a whole product on it in one step.",
    url: `${SITE_URL}/core`,
    type: "website",
  },
};

const replaces = [
  { instead: "Supabase", get: "Database, logins and file storage" },
  { instead: "Vercel", get: "Hosting with HTTPS, push to deploy" },
  { instead: "Resend", get: "Email from your own domain" },
  { instead: "UptimeRobot", get: "Uptime alerts and status pages" },
  { instead: "Plausible", get: "Website analytics, no cookies" },
  { instead: "Screaming Frog", get: "Audits of every screen" },
];

const parts = [
  {
    code: "01",
    title: "Database and logins",
    body: "Postgres for every product, user sign-in, file storage and encrypted secrets. Backed up every night, with a restore that's actually been tested.",
  },
  {
    code: "02",
    title: "Hosting",
    body: "Connect a GitHub repo and push. It's live on your domain with HTTPS. Every pull request gets its own preview link, and rolling back takes seconds.",
  },
  {
    code: "03",
    title: "Email",
    body: "Send from your own domain with templates. Bounces and complaints are handled for you, so one bad list never wrecks your sending.",
  },
  {
    code: "04",
    title: "Uptime and status pages",
    body: "Checks every minute, confirms before it alerts, opens the incident, and gives your clients a status page with their name on it.",
  },
  {
    code: "05",
    title: "Analytics",
    body: "Visitors, pages, sources, goals and funnels, without cookies or a consent banner. A share page and a weekly email for each client.",
  },
  {
    code: "06",
    title: "Audits",
    body: "Crawls your whole app as each kind of user, captures every screen on desktop and phone, and turns what's wrong into a punch list.",
  },
];

const plans = [
  { name: "Free", price: "$0", lines: ["1 project", "1 site hosted", "3 uptime monitors", "10k pageviews a month"] },
  { name: "Solo", price: "$29", lines: ["5 projects", "5 sites hosted, 10 custom domains", "25 monitors, checked every minute", "100k pageviews, 10k emails a month"] },
  { name: "Studio", price: "$79", lines: ["Unlimited projects", "25 sites hosted, unlimited domains", "100 monitors, checked every minute", "1M pageviews, 100k emails a month"] },
];

const faqs: FAQItem[] = [
  {
    q: "Is it real, or a mockup?",
    a: "It's real. My own sites run on it today: 814builds.com and builds.martianindustries.io are hosted, monitored and measured on Martian. I'm opening it to a small number of builders at a time so every one of them gets looked after.",
  },
  {
    q: "Do I have to move everything at once?",
    a: "No. Start with one piece, like uptime monitoring or analytics, and move the rest when you're ready. Your code stays in your GitHub and your domain stays where you bought it.",
  },
  {
    q: "What does \"built for AI\" actually mean?",
    a: "Everything you can do in the dashboard, Claude Code (or any MCP client) can do too, with the same names. Ask it to start a new product on Martian and it makes the database, keys, hosting, uptime monitoring and analytics in one step. You write the code and push.",
  },
  {
    q: "What happens if I go over my plan?",
    a: "You get a warning first. The things that cost real money stop at a hard limit instead of running up a bill, and your sites keep running. No surprise charges, ever.",
  },
  {
    q: "What do you do with my data?",
    a: "Run Martian with it, and nothing else. We never sell it, never use it for ads and never train AI on it. It's kept on servers in the USA. Details in the <a href=\"/privacy\">privacy policy</a>.",
  },
  {
    q: "When can I get in?",
    a: "Join the waitlist and you'll hear from me personally when your spot opens. Early builders get a direct line to me while it grows.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 inline-flex max-w-full items-center gap-2.5 border border-line bg-bg-raised/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rust" aria-hidden />
      <span className="min-w-0">{children}</span>
    </div>
  );
}

export default function CorePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Backdrop ridge />
        <Container className="relative">
          <div className="mx-auto grid max-w-6xl items-start gap-10 pb-16 pt-16 md:grid-cols-[1.1fr_1fr] md:gap-14 md:pb-24 md:pt-24">
            <div>
              <Eyebrow>Martian Core · Early access</Eyebrow>
              <h1 className="text-balance break-words text-[clamp(2.1rem,7.5vw,2.4rem)] font-semibold tracking-tighter2 text-white sm:text-5xl md:text-[56px] md:leading-[1.05]">
                Everything your app needs <span className="text-ink-muted">except the code.</span>
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base text-ink-muted md:text-lg">
                Database and logins, hosting, email, uptime alerts, analytics and site audits, in one account with one bill. And Claude Code can set the whole thing up for you.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                <span>One login</span>
                <span aria-hidden>·</span>
                <span>One bill from $29</span>
                <span aria-hidden>·</span>
                <span>No surprise charges</span>
              </div>
            </div>
            <WaitlistForm id="waitlist" compact />
          </div>
        </Container>
      </section>

      {/* The problem */}
      <Section id="problem" className="border-t border-line">
        <SectionHeader
          eyebrow="The problem"
          title="Eight logins. Eight bills. One app."
          description="Building something should be the hard part. Instead you're wiring services together, watching eight usage meters and paying eight companies before anyone has used what you built."
        />
        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {replaces.map((r) => (
            <div key={r.instead} className="bg-bg p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                Instead of <span className="text-ink-muted line-through decoration-rust/70">{r.instead}</span>
              </div>
              <div className="mt-2 text-lg font-medium text-white">{r.get}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* What's in it */}
      <Section id="whats-in-it" className="border-t border-line">
        <SectionHeader eyebrow="What's in it" title="One account. All of it." description="Use one piece or all of them. They already know about each other: a deploy goes live and the uptime check starts on its own." />
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {parts.map((p) => (
            <Card key={p.code} className="flex flex-col">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-rust-soft">{p.code}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink-muted">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Built for AI */}
      <Section id="ai" className="border-t border-line">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <SectionHeader
            eyebrow="Built for building with AI"
            title="Tell Claude Code to start a product. It does the rest."
            description="Everything in the dashboard is also a tool Claude Code can use, with the same names. One sentence and it sets up the database, keys, hosting, uptime monitoring and analytics. You write the code and push."
          />
          <div className="border border-line bg-bg-panel p-5 font-mono text-[13px] leading-relaxed md:p-6">
            <div className="text-ink-dim">you</div>
            <div className="text-white">Start a new product on Martian called Bookly, from my bookly repo.</div>
            <div className="mt-5 text-ink-dim">claude code</div>
            <div className="text-ink-muted">
              <div>
                <span className="text-rust-soft">✓</span> Project and database made, keys written to .env.local
              </div>
              <div>
                <span className="text-rust-soft">✓</span> Hosting connected to GitHub, push to deploy
              </div>
              <div>
                <span className="text-rust-soft">✓</span> Uptime monitor watching bookly.example.com
              </div>
              <div>
                <span className="text-rust-soft">✓</span> Analytics snippet added
              </div>
            </div>
            <div className="mt-4 text-white">Ready. Push your code and it's live.</div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="border-t border-line">
        <SectionHeader
          eyebrow="Pricing"
          title="One bill. No surprise charges."
          description="Go over a limit and you get a warning first. Anything that costs real money stops at a hard cap instead of running up a bill, and your sites keep running."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`border p-6 md:p-7 ${p.name === "Solo" ? "border-rust/60 bg-bg-raised" : "border-line bg-bg-raised/60"}`}>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">{p.name}</div>
              <div className="mt-3 text-4xl font-semibold text-white">
                {p.price}
                <span className="ml-1 text-base font-normal text-ink-muted">a month</span>
              </div>
              <ul className="mt-5 space-y-2 text-[15px] text-ink-muted">
                {p.lines.map((l) => (
                  <li key={l} className="flex gap-2">
                    <span className="text-rust-soft" aria-hidden>
                      +
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Brain */}
      <Section id="brain" className="border-t border-line">
        <div className="grid items-start gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14">
          <SectionHeader
            eyebrow="For businesses · Martian Brain"
            title="Your business already knows everything. It's just stuck in your inbox."
            description="Martian Brain reads your work email and team chat, keeps track of every promise, follow-up and deadline, reminds you before things slip, and drafts the replies you owe. You just tap Send. Your messages are sealed with your own key, and never sold or used to train AI."
          />
          <div className="border border-line bg-bg-raised p-6 md:p-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">In your team chat</div>
            <div className="mt-4 space-y-3 text-[15px]">
              <p className="text-ink">
                <span className="text-ink-dim">You: </span>what's open?
              </p>
              <p className="text-ink-muted">
                <span className="text-rust-soft">Brain: </span>3 things. Joe is waiting on your quote since Tuesday. You told Sam you'd send the photos by Friday. The insurance renews in 9 days.
              </p>
            </div>
            <p className="mt-6 text-sm text-ink-dim">Pick "Martian Brain" on the waitlist to hear when it opens for your business.</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQ id="faq" eyebrow="Questions" title="The honest answers." items={faqs} />

      {/* Final call */}
      <Section id="join" className="border-t border-line">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[2rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-[2.9rem]">Get in early.</h2>
          <p className="mt-5 text-pretty text-base text-ink-muted md:text-[17px]">I'm letting builders in a few at a time. Leave your email and you'll hear from me when your spot opens.</p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <WaitlistForm id="waitlist-bottom" />
        </div>
      </Section>
    </>
  );
}
