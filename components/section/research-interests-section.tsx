import Section from "./section";

const researchInterests = [
  "Adversarial robustness of LLMs",
  "LLM red-teaming",
  "Agentic AI security",
  "Multimodal LLMs",
  "LLM evaluation",
];

export default function ResearchInterestsSection() {
  return (
    <Section title="RESEARCH INTERESTS">
      <div className="md:ml-8 text-sm text-zinc-700 dark:text-zinc-300">
        {researchInterests.join(" | ")}
      </div>
    </Section>
  );
}
