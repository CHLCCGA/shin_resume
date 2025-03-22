import Experience from "@/components/experience";
import { Icons } from "@/components/icons";
import LabelWithGraphic from "@/components/label-with-graphic";
import { headers } from "next/headers";
import { type ImageProps } from "next/image";
import Link from "next/link";
import Section from "./section";

type ProjectTitleProps = {
  image: ImageProps["src"];
  title: string;
  link: string;
};

async function getStarNumber(owner: string, repo: string) {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const queryParams = new URLSearchParams({ owner, repo }).toString();
  const res = await fetch(
    `${protocol}://${host}/api/github/star?${queryParams}`,
    {
      cache: "no-cache",
    }
  );
  const { starNumber } = await res.json();
  return starNumber;
}

function ProjectTitle({ image, title, link }: ProjectTitleProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center gap-x-1 group"
    >
      <LabelWithGraphic image={image} content={title} />
      <Icons.Link
        size={12}
        className="text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200 group-hover:animate-shake"
      />
    </Link>
  );
}

export default async function ProjectSection() {
  const exp: ExperienceProps[] = [
    {
      head1: (
        <ProjectTitle
          image="/images/logos/pyg.png"
          title="Master's Thesis - LBGCN"
          link="https://github.com/CHLCCGA/LBGCN"
        />
      ),
      head2: (
        <LabelWithGraphic icon={Icons.Stack} content="GCN, Llama-3-8B, BERT" />
      ),
      head3: (
        <LabelWithGraphic
          icon={Icons.Star}
          content={`# Github Stars: ${await getStarNumber(
            "LBGCN"
          )}`}
        />
      ),
      head4: "Jul  2024",
      bulletPoints: [
        "Enhancing Text Classification with Meta-Llama-3-8B-Augmented BertGCN.",
        "Hugging Face's bitsandbytes and transformers for model quantization enhances efficiency.",
        "Address data scarcity and boost robustness. ",
      ],
    },
    {
      head1: (
        <ProjectTitle
          image="/images/logos/kaggle.png"
          title="Kaggle Loan Approval Prediction (S4E10)"
          link="https://www.kaggle.com/competitions/playground-series-s4e10"
        />
      ),
      head2: <LabelWithGraphic icon={Icons.Stack} content="Rank 820/3858" />,
      head3: <LabelWithGraphic icon={Icons.Star} content={`#Score:0.96436`} />,
      head4: "Dec 2024",
      bulletPoints: [
        "Enhanced 2% performance through feature selection, interaction features, and categorical encoding.",
        "Ensemble CatBoost, LightGBM, and XGBoost, utilize hyperparameter optimization, 8% improve.",
        "Applied Blending and Stacking to improve generalization, achieving 2% performance gain.",
      ],
    },
  ];

  return (
    <Section title="PROJECT">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
