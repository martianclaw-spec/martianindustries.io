# Martian Industries — martianindustries.io

Marketing and lead-generation site for Martian Industries, a small custom
software studio. Next.js App Router, TypeScript, Tailwind, deployed on Vercel.
No CMS, no database, deliberately few dependencies.

Live at https://martianindustries.io · repo `martianclaw-spec/martianindustries.io`

---

## Positioning (this changed recently, do not regress it)

The site sells **custom software builds**, not simulator venue operations. It
used to be "operations infrastructure for simulator venues"; the venue product
line is moving to a separate company. If you find venue-first framing anywhere
outside `/blog`, it is stale.

**The industry is not the product.** Most shipped work happens to sit in
simulator venues because that is the industry the founder came from, and
visitors wrongly conclude that is all the studio does. That costs real leads.
Proof points must lead with the transferable capability ("unattended payments
and hardware control") and mention the sector only as context.

Sim-Pull, SimCenter and SimBook are **case studies, not products for sale
here**. Their pages stay live and indexed; their calls to action point at a
scoping call, not a demo signup.

---

## Hard content rules

- **No em dashes anywhere in copy.** Use a comma, a period, or restructure the
  sentence. Never substitute a hyphen. This applies to every component, page
  and metadata string.
- **Never imply Martian Industries owns SimBook.** It is independently
  operated; the studio contributes as a builder on the systems behind it. This
  constraint has survived every revision of the site and still applies.
- **Voice is "we", not "I".** The studio speaks as a company.
- **Never publish a price or a delivery date** as a commitment. Those come out
  of a scoping call, in writing. The chat assistant is explicitly forbidden
  from quoting either.
- The 19 simulator-venue posts under `/blog` are **deliberately left live**
  even though they are off-topic. They carry search equity that took months to
  earn. Do not delete them without an explicit decision.

---

## Design language

The site was redesigned specifically to stop looking generated. The rules that
keep it that way:

- **No uniform card grids.** A left-aligned header followed by a grid of
  identical bordered cards is the single most recognisable tell. Capabilities
  is a numbered specification sheet, Selected Work is asymmetric with one lead
  panel, the build process is a connected timeline. Vary the section shape.
- **Sharp geometry.** No `rounded-lg`, `rounded-md`, `rounded-xl`. Only status
  dots and decorative blur circles use `rounded-full`.
- **Accent colour is structural**, not decorative tint: a rust rule down the
  left of a paragraph, registration marks on panels, a filled square instead of
  a dot. Rust is `#c2552d` with `soft` and `deep` variants.
- **Scale contrast is deliberate.** Hero headline runs to 5rem at -0.045em.
  Stat readouts put the numeral first and large, label beneath.
- Reference points are JPL mission control and technical survey drawing, never
  science fiction. No glowing planets, no purple gradients, no glassmorphism.

### Mars atmosphere

`components/atmos/` holds the decorative layer. Everything in it is
`aria-hidden`, `pointer-events-none`, absolutely positioned, and must never
affect layout. Parents need `relative overflow-hidden`.

- `DustField` — canvas of drifting regolith. Particle count capped at 90, loop
  stops while the tab is hidden, single static frame under reduced motion.
- `Terrain` — `TopoContours` (one curve scaled and rotated) and `Ridgeline`.
- `SolClock` — real Mars Sol Date and Coordinated Mars Time, Allison and McEwen
  formulation. The numbers are actually correct. Renders nothing until mounted
  to avoid a hydration mismatch.
- `Spotlight` — brightens a survey grid under the pointer by writing `--mx`
  and `--my`, coalesced to one animation frame per paint. Skipped for coarse
  pointers and reduced motion.
- `Reveal` — scroll-in via IntersectionObserver, disconnects after firing.
- `Backdrop` — composes the standard stack for heroes and closing sections.

---

## Layout traps that have already caused bugs

- **Always put `min-w-0` on grid and flex children.** They default to
  `min-width: auto` and refuse to shrink below their content's intrinsic
  width. This once forced the hero to 901px inside a 327px phone container,
  and because `globals.css` sets `overflow-x: hidden` on `html, body`, the
  overflow was silently clipped rather than visible. Symptom is "everything is
  cut off on mobile" with no horizontal scrollbar.
- **Audit mobile by measurement, not screenshots.** Browser screenshots are
  unreliable here. Load the page in a 390px-wide iframe and compare each
  element's `getBoundingClientRect().right` against the viewport width,
  skipping absolutely positioned nodes and anything inside an `overflow-x`
  scroller. SVG `path` nodes inside intentionally bleeding decorations will
  always report over-width and are fine.
- **The `.reveal` opacity rule is gated behind `.js-reveal`,** which an inline
  script in `layout.tsx` adds. Without that guard a scripting failure leaves
  every revealed element at zero opacity, i.e. a blank page. Do not remove it.

---

## Lead capture

Two entry points, one delivery path. Both post to `app/api/audit/route.ts`,
which sends through Resend. Do not add a second delivery path.

- Contact form fields are `name`, `email`, `company`, `budget`, `message`.
  They were renamed from `venue`/`bays`; do not reintroduce the old names.
- `components/ChatWidget.tsx` is a streaming assistant grounded **solely** by
  `lib/chat-brief.ts`. That file is the only place listing what the site may
  claim on the studio's behalf. Anything the assistant is allowed to assert
  goes there, not into scattered prompt strings.
- The chat email field appears only after two exchanges, so the conversation
  qualifies before the widget converts. Leads arrive with the transcript.
- `app/api/chat/route.ts` degrades gracefully with no `ANTHROPIC_API_KEY`: it
  answers with what it can state factually and still captures the email rather
  than erroring. Rate limited per IP, capped at 24 turns and 400 output tokens.

### Environment variables (Vercel)

| Name | Purpose |
|---|---|
| `RESEND_API_KEY` | Sending contact and chat leads |
| `RESEND_FROM_EMAIL` | `Martian Industries <audit@martianindustries.io>` |
| `RESEND_TO_EMAIL` | Where leads land |
| `ANTHROPIC_API_KEY` | Chat assistant. Optional; absent means fallback mode |

Mail runs on Google Workspace. MX points at `smtp.google.com`, and
`hello@` is an alias on the `matthew@` mailbox. The Resend domain is verified,
which is why the form can send from the real domain rather than a sandbox
address.

---

## Working conventions

- Verify against the deployed site, not just a local build. Push, poll until
  the change appears in the live HTML, then check.
- Check both a desktop width and 390px after any layout change.
- Run `npm run build` before committing; it catches the type errors that
  matter.
- Commit messages explain **why**, in prose, not a bulleted diff summary.

## Related

`martian-brain` (`martianclaw-spec/martian-brain`) is the founder's second
brain: decisions and the reasons behind them across every project, not just
this site. Read it before answering questions about why something is the way
it is. The note "Martian Industries is a software studio" covers this site's
repositioning.
