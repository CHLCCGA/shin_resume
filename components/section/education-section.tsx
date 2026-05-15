import { Icons } from "@/components/icons";
import LabelWithGraphic from "@/components/label-with-graphic";
import Section from "./section";

const education: EducationProps[] = [
  {
    title: "PhD, Computer Science",
    org: {
      name: "AGH University of Krakow",
    },
    time: "2025 - present",
    detail: "Topic: Large Language Models under Adversarial Attacks",
  },
  {
    title: "M.S., Computer Science",
    org: {
      name: "University of Lodz",
      logo: "/images/logos/ul.png",
    },
    time: "2022 - 2024",
  },
  {
    title: "B.S., Mathematics",
    org: {
      name: "Tiangong University",
      logo: "/images/logos/tu.jpg",
    },
    time: "2016 - 2020",
  },
];

function Education({ title, gpa, org, time, detail }: EducationProps) {
  return (
    <section className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
      <div className="hidden md:block">
        <div className="text-sm font-semibold flex flex-wrap justify-between text-zinc-700 dark:text-zinc-300">
          <div className="flex gap-x-4 flex-wrap">
            <span className="font-bold text-black dark:text-white">
              {title}
            </span>
            {gpa && <LabelWithGraphic icon={Icons.FileBadge} content={gpa} />}
          </div>
          <span>{time}</span>
        </div>
        <LabelWithGraphic image={org.logo} content={org.name} />
        {detail && (
          <div className="text-zinc-600 dark:text-zinc-400">{detail}</div>
        )}
      </div>
      <div className="text-sm font-semibold md:hidden text-zinc-700 dark:text-zinc-300 mb-1">
        <div className="flex gap-x-4 flex-wrap justify-between">
          <div className="font-bold text-black dark:text-white">{title}</div>
          {gpa && <LabelWithGraphic icon={Icons.FileBadge} content={gpa} />}
        </div>
        <div className="flex gap-x-4 flex-wrap justify-between">
          <LabelWithGraphic image={org.logo} content={org.name} />
          <span className="text-right flex-1">{time}</span>
        </div>
        {detail && (
          <div className="text-zinc-600 dark:text-zinc-400">{detail}</div>
        )}
      </div>
    </section>
  );
}

export default function EducationSection() {
  return (
    <Section title="EDUCATION">
      <div className="flex flex-col gap-y-1">
        {education.map((e, index) => (
          <Education key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
