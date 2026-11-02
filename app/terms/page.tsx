import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Martian Terms of Service",
  description: "The agreement between you and Martian Industries when you use Martian.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <LegalPage title="Martian Terms of Service">
          <p>If you buy Martian through a partner (an agency that sets it up for you), these terms still apply between you and Martian, and the partner's own agreement with you covers what they do and charge. Partners sign Martian's Partner Agreement.</p>
          <p>These terms are the agreement between you and Martian Industries LLC ("Martian", "we") when you use Martian, at martianindustries.io and core.martianindustries.io. We have tried to write them so a person can read them. If anything here is unclear, ask us at matthew@martianindustries.io.</p>
          <h2>1. Your account</h2>
          <ul><li>You need to be 16 or older and able to make a contract. If you sign up for a company, you are saying you may bind it to these terms.</li><li>Keep your password and two-step sign-in safe. You are responsible for what happens in your account, including what your teammates and the AI tools you connect (Claude Code, Codex and others) do with the access you give them.</li><li>Tell us at once if you think someone else got in.</li></ul>
          <h2>2. What you get</h2>
          <p>Martian is a set of tools in one account: a database with sign-in and file storage, email sending, uptime monitoring and status pages, website analytics, site audits, hosting and deploys, a company brain (Martian Brain) and an AI phone line (Martian Phone), plus whatever we add later. What each plan includes is on the pricing page and your Billing screen.</p>
          <p>We work hard to keep Martian running and your data safe, and we back up your project data every night. But we do not promise Martian will never go down or never lose anything. Keep your own copy of anything you cannot afford to lose; you can download your data at any time.</p>
          <h2>2a. Martian Brain and Martian Phone</h2>
          <p>The brain hears what you connect (email, team chat, forms, calls) and the phone line answers your calls with an AI. Because both handle other people's words, you agree to:</p>
          <ul><li><strong>Tell your people first.</strong> Before the brain hears your staff's email, chat or calls, tell them in writing (we give you a ready notice to send). A person's own inbox or phone is only connected by that person.</li><li><strong>Have the right to connect it.</strong> Only connect email accounts, chats and phone lines your business runs, or that their owner connects themselves.</li><li><strong>Follow the recording rules.</strong> If you turn on call recording, keep the announcement on. Many states, Pennsylvania among them, require everyone's agreement.</li><li><strong>Check before you rely on it.</strong> The brain and the phone line use AI. They can mishear, misfile, or get an answer wrong. Read a draft before you send it, and check anything important (money, dates, legal or medical matters) at its source. Nothing either one says is legal, tax, financial or medical advice.</li></ul>
          <p>We agree that the brain never sends an email unless the person whose account it is approves that draft, never deletes or moves your mail, and only does in your systems what you ask.</p>
          <h2>3. Your data stays yours</h2>
          <p>Everything you put into Martian is yours. We use it only to run Martian for you, as the Privacy Policy explains. <strong>We never sell it, never use it for ads, and never train AI models on it.</strong> You give us only the permission we need to store, copy, process and show it so the features work.</p>
          <h2>4. Paying</h2>
          <ul><li>Free plans are free and never charged. You never need a card for one.</li><li>Paid plans are billed monthly in advance through Stripe, with any sales tax added. Prices are on the pricing page.</li><li><strong>No surprise bills.</strong> We warn you before you reach a limit. The things that cost us real money (AI on Martian's key, build minutes, email) stop at a hard cap rather than running up a bill; you choose whether to upgrade.</li><li>If you use your own AI provider key, you pay that provider directly; Martian charges nothing for that use.</li><li>You can cancel at any time from your Billing screen. Your plan runs to the end of the month you paid for. We do not refund part-months, except where the law requires it or where we got something wrong.</li><li>If a payment fails, we follow the steps in section 5 before anything stops.</li><li>We can change prices with at least 30 days' email notice. A change applies from your next billing period after the notice.</li></ul>
          <h2>5. If a payment fails</h2>
          <p>We email you at once and again after 3 days. After 7 days, paid features pause (no new deploys, audits or emails over the Free limits), but your sites, databases, monitors and analytics keep running. After 21 days, your account moves to the Free plan: sites over the Free limit are paused with a page saying so, and nothing is deleted. Pay at any point and everything comes back within minutes.</p>
          <h2>6. Things you must not do</h2>
          <p>Follow the Acceptable Use Policy. In short: nothing illegal, no scams or spam, no attacks, no auditing sites that are not yours without the owner's approval, no getting around limits.</p>
          <h2>7. Your sites, your responsibility</h2>
          <p>What you build and host on Martian is yours, and so is the responsibility for it: what it says, whether it follows the law, and how it treats its own users. If your site or app collects data about people, you need your own privacy policy, and you are in charge of that data (Martian handles it for you on your instructions).</p>
          <h2>8. When we can step in</h2>
          <p>We may remove content or pause part of an account to stop serious harm (a scam page, malware, spam, abuse material, an attack), or when the law requires it. We start with the smallest step that stops the harm and tell you what we did and why, unless that would let the harm continue. For anything less urgent, we write to you first and give you time to fix it. We may close an account for repeated or serious breaches of these terms.</p>
          <h2>9. Leaving</h2>
          <p>You can delete your account any time from Settings. Before you go, you can download your data. After you delete it, your data is gone from the live system at once and from backups within 30 days. If we ever close Martian down, we will give at least 90 days' notice and help you move.</p>
          <h2>10. Limits on what we owe</h2>
          <p>[Lawyer to draft: warranty disclaimer, limitation of liability (suggested cap: the fees you paid us in the 12 months before the claim), indemnity for misuse.] We will never try to limit our responsibility for things the law does not allow us to limit, such as fraud or gross negligence.</p>
          <h2>11. Changes to these terms</h2>
          <p>We will email account owners at least 30 days before a change that matters, and keep earlier versions available. If you do not agree to a change, you can leave before it takes effect.</p>
          <h2>12. The legal bits</h2>
          <p>[Lawyer to draft: governing law and courts (suggested: Pennsylvania), how disputes are handled, entire agreement, severability, notices.]</p>
    </LegalPage>
  );
}
