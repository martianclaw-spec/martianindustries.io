import { Brackets } from "../ui/Frame";

/**
 * A specimen of Rover's confirm step: what the site says now, what it will say,
 * and the receipt that follows. Its wording follows the real owner screen, so a
 * visitor sees what a client will actually see.
 */
export function ConfirmSpecimen() {
  return (
    <figure className="relative border border-line bg-bg-raised p-6 md:p-8">
      <Brackets size="lg" />

      <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em]">
        <span className="text-rust-soft">Owner screen</span>
        <span className="text-ink-dim">Confirm step</span>
      </div>

      <div className="mt-6 flex items-center gap-3 border border-line bg-bg px-4 py-3">
        <span
          aria-hidden
          className="h-2 w-2 shrink-0 rounded-full bg-rust"
        />
        <span className="min-w-0 text-[13px] text-ink-muted">
          You are editing the live site.
        </span>
      </div>

      <div className="mt-6 text-lg font-semibold tracking-tightish text-white">
        Change the website?
      </div>
      <div className="mt-1 text-[14px] text-ink-muted">
        The Friday closing time on the contact page:
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-px border border-line bg-line">
        <div className="min-w-0 bg-bg px-4 py-5 sm:px-5">
          <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">
            Now
          </dt>
          <dd className="readout mt-2 text-2xl font-semibold text-ink-muted sm:text-3xl md:text-4xl">
            11 pm
          </dd>
        </div>
        <div className="min-w-0 bg-bg px-4 py-5 sm:px-5">
          <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-rust-soft">
            Will become
          </dt>
          <dd className="readout mt-2 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            midnight
          </dd>
        </div>
      </dl>

      <div aria-hidden className="mt-6 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center bg-rust px-4 py-2.5 text-[13px] font-medium text-white">
          Yes, change it
        </span>
        <span className="inline-flex items-center border border-line px-4 py-2.5 text-[13px] text-ink-muted">
          No, go back
        </span>
      </div>

      <div className="mt-8 border-t border-line pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em]">
          <span className="text-rust-soft">Done. It&rsquo;s live.</span>
          <span className="text-ink-dim">Receipt emailed to you</span>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <span className="min-w-0 text-[14px] text-ink-muted">
            The Friday closing time now says: midnight.
          </span>
          <span aria-hidden className="font-mono text-[11px] uppercase tracking-[0.16em] text-rust-soft">
            Undo, put it back
          </span>
        </div>
      </div>

      <figcaption className="sr-only">
        An example of the confirm step on the owner screen. The Friday
        closing time reads 11 pm and will become midnight, with buttons to
        confirm or go back, followed by the receipt and an undo link.
      </figcaption>
    </figure>
  );
}
