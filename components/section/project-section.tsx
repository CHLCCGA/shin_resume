import Experience from "@/components/experience";
import { Icons, type Icon } from "@/components/icons";
import LabelWithGraphic from "@/components/label-with-graphic";
import { type ImageProps } from "next/image";
import Link from "next/link";
import Section from "./section";

type ProjectTitleProps = {
  image?: ImageProps["src"];
  icon?: Icon;
  title: string;
  link?: string;
};

function ProjectTitle({ image, icon, title, link }: ProjectTitleProps) {
  const label = <LabelWithGraphic image={image} icon={icon} content={title} />;

  if (!link) {
    return label;
  }

  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center gap-x-1 group"
    >
      {label}
      <Icons.Link
        size={12}
        className="text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200 group-hover:animate-shake"
      />
    </Link>
  );
}

export default function ProjectSection() {
  const exp: ExperienceProps[] = [
    {
      head1: (
        <ProjectTitle
          icon={Icons.Bot}
          title="autoresearch"
        />
      ),
      head2: (
        <LabelWithGraphic
          icon={Icons.Stack}
          content="AutoGen, Claude Code, Python"
        />
      ),
      head3: "Autonomous multi-agent research coordination system",
      head4: "AI research tooling",
      bulletPoints: [
        "Coordinates agentic research workflows across planning, coding, and review loops.",
      ],
    },
    {
      head1: (
        <ProjectTitle
          image="/images/logos/pyg.png"
          title="LLM Framework"
          link="https://github.com/CHLCCGA/LLM"
        />
      ),
      head2: (
        <LabelWithGraphic
          icon={Icons.Stack}
          content="HuggingFace, bitsandbytes, PyTorch"
        />
      ),
      head3: "End-to-end pipeline: transformers, quantization, PEFT",
      head4: "LLM systems",
      bulletPoints: [
        "Covers practical transformer workflows, low-bit quantization, and PEFT/LoRA fine-tuning.",
      ],
    },
    {
      head1: (
        <ProjectTitle
          image="/images/logos/kaggle.png"
          title="Kaggle Loan Prediction"
          link="https://github.com/CHLCCGA/Kaggle/tree/main/lap"
        />
      ),
      head2: (
        <LabelWithGraphic icon={Icons.Stack} content="XGBoost, sklearn, Python" />
      ),
      head3: <LabelWithGraphic icon={Icons.Star} content="Top 22% (820/3858)" />,
      head4: "Classical ML",
      bulletPoints: [
        "Applied feature engineering, model ensembling, and competition-focused validation.",
      ],
    },
  ];

  return (
    <Section title="PROJECTS">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
