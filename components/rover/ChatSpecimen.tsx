import { Brackets } from "../ui/Frame";

type Line = { from: "owner" | "rover"; text: string };

/**
 * A specimen of asking Rover in plain words. It follows the real flow: the
 * assistant restates exactly what will change and waits for a yes, the entry
 * goes live, and a photo is added afterwards.
 */
const exchange: Line[] = [
  { from: "owner", text: "Add pumpkin bread to the fall menu, $9 a loaf." },
  {
    from: "rover",
    text: "I will add Pumpkin Bread to the Fall menu at $9 a loaf. It goes on your site as soon as you say yes. Add it?",
  },
  { from: "owner", text: "Yes." },
  {
    from: "rover",
    text: "Done, Pumpkin Bread is on the Fall menu. Upload a photo whenever you have one, or ask me to undo it.",
  },
];

export function ChatSpecimen() {
  return (
    <figure className="relative border border-line bg-bg-raised p-6 md:p-8">
      <Brackets size="lg" />

      <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em]">
        <span className="text-rust-soft">Rover</span>
        <span className="text-ink-dim">In your own words</span>
      </div>

      <ol className="mt-6 space-y-4">
        {exchange.map((line, i) => (
          <li
            key={i}
            className={
              line.from === "owner"
                ? "ml-auto max-w-[85%] border border-line-strong bg-bg px-4 py-3"
                : "max-w-[92%] border-l border-rust pl-4"
            }
          >
            <div
              className={
                "font-mono text-[10px] uppercase tracking-[0.2em] " +
                (line.from === "owner" ? "text-ink-dim" : "text-rust-soft")
              }
            >
              {line.from === "owner" ? "You" : "Rover"}
            </div>
            <p className="mt-1.5 min-w-0 text-[14px] leading-relaxed text-ink-muted">
              {line.text}
            </p>
          </li>
        ))}
      </ol>

      <figcaption className="sr-only">
        An example conversation. The owner asks to add pumpkin bread to the fall
        menu at nine dollars a loaf. Rover restates the change and asks for a
        yes, the owner says yes, and Rover confirms it is live and offers to add a
        photo or undo it.
      </figcaption>
    </figure>
  );
}
