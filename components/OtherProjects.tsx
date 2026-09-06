import { Section, SectionHeader } from "./ui/Section";

const projects = [
  {
    title: "Sales Systems",
    body: "Outbound and booking systems built to help businesses generate leads and revenue.",
  },
  {
    title: "Internal Tools & Automation",
    body: "Custom dashboards, workflows, and automation tools used by real teams in production.",
  },
  {
    title: "Experimental Projects",
    body: "Independent builds and ideas, including marketplaces and AI tools.",
  },
];

export function OtherProjects() {
  return (
    <Section id="other" className="border-t border-line">
      <SectionHeader
        eyebrow="Adjacent work"
        title="Other Systems & Projects"
        description="Products and tools I have built outside of client work. Different domains, same standard for what counts as finished."
      />

      <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-line bg-bg-raised/60 p-5 transition-colors hover:border-line-strong"
          >
            <h3 className="text-base font-medium tracking-tightish text-white">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
