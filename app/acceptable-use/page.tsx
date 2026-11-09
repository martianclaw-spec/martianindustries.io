import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Martian Acceptable Use Policy",
  description: "What Martian's hosting, email, crawler and database may not be used for.",
  alternates: { canonical: "/acceptable-use" },
};

export default function Page() {
  return (
    <LegalPage title="Martian Acceptable Use Policy">
      <p>Effective date: November 8, 2026.</p>
      <p>Martian gives you real tools: hosting, email, a crawler, a database. This page says what they may not be used for. It applies to everyone on every plan. Breaking it can get content taken down or an account suspended (<Link href="/terms">Terms</Link>, section 8).</p>

      <h2>You may not use Martian to</h2>
      <ol>
        <li><strong>Break the law</strong>, or help someone else break it.</li>
        <li><strong>Host or send scams</strong>: phishing pages, fake login screens, pages pretending to be another person or company, fake shops, or anything built to trick people out of money or passwords.</li>
        <li><strong>Send spam</strong>: email to people who did not ask for it, bought or scraped lists, or messages that hide who sent them. Every marketing email must have a working unsubscribe link.</li>
        <li><strong>Spread malware</strong>, or host anything that harms visitors' devices.</li>
        <li><strong>Attack anything</strong>: no denial-of-service, no breaking into systems, no scanning networks you do not own. Martian Audit is built to be safe on live sites; do not try to use it, or anything else here, as an attack tool.</li>
        <li><strong>Audit a site that is not yours</strong> without its owner's approval. Martian Audit only runs on sites you have verified you own, or whose owner said yes through Martian's approval email. Do not try to get around this.</li>
        <li><strong>Collect people's data without their knowledge or consent</strong>, or store sensitive data (health, financial, children's data) without the protections the law requires.</li>
        <li><strong>Host abuse material</strong>: child sexual abuse material (reported to the authorities at once), content that threatens or harasses people, or content that promotes violence against people.</li>
        <li><strong>Infringe</strong> other people's copyright, trademarks or privacy.</li>
        <li><strong>Overload Martian on purpose</strong>, resell it without our agreement, or get around plan limits by making extra accounts.</li>
      </ol>

      <h2>If you see abuse</h2>
      <p>Email <a href="mailto:matthew@martianindustries.io">matthew@martianindustries.io</a> with the address and what is wrong. We look at every report, usually within a day, and we will not tell the account owner who reported them.</p>

      <h2>What we do</h2>
      <p>We start with the smallest step that stops the harm: take down one page, pause one sending domain, stop one crawl. We tell you what we did and why, unless doing so would help someone keep harming people. Repeated or serious abuse (scams, malware, child abuse material) means the account is closed.</p>
    </LegalPage>
  );
}
