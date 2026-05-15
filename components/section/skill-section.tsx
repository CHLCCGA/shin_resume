import Section from "./section";

const skills = [
  {
    category: "AI Research",
    items: [
      "Adversarial ML",
      "LLM Evaluation",
      "PEFT",
      "Quantization",
      "Multimodal",
    ],
  },
  {
    category: "Agentic AI",
    items: [
      "Multi-agent orchestration",
      "LangChain",
      "AutoGen",
      "Claude Code",
      "Codex",
    ],
  },
  {
    category: "HPC & Training",
    items: ["Distributed Training", "SLURM", "PyTorch", "DeepSpeed"],
  },
  {
    category: "Core Tools",
    items: ["Python", "HuggingFace", "PyG", "SQL", "Git", "Linux"],
  },
];

export default function SkillSection() {
  return (
    <Section title="SKILLS">
      <div className="flex flex-col gap-y-1 text-sm">
        {skills.map((skill) => (
          <div key={skill.category} className="md:flex md:gap-x-4">
            <div className="md:ml-8 md:w-36 shrink-0 font-bold text-black dark:text-white">
              {skill.category}
            </div>
            <div className="text-zinc-700 dark:text-zinc-300">
              {skill.items.join(" | ")}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
