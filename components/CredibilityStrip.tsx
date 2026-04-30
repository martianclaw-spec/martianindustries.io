import { Container } from "./ui/Container";

const items = [
  "Built and operated by venue operators",
  "Field-tested across golf & sim racing",
  "Multi-location experience",
  "Hands-on with real hardware",
];

export function CredibilityStrip() {
  return (
    <div className="border-y border-line bg-bg-raised/40">
      <Container>
        <ul
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-center"
          aria-label="Operator credibility"
        >
          {items.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted"
            >
              <span className="h-1 w-1 rounded-full bg-rust" aria-hidden />
              {item}
              {i < items.length - 1 ? (
                <span className="hidden h-3 w-px bg-line md:inline-block" />
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
