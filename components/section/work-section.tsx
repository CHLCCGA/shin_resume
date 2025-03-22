import Experience from "@/components/experience";
import { Icons } from "@/components/icons";
import LabelWithGraphic from "@/components/label-with-graphic";
import Section from "./section";

const exp: ExperienceProps[] = [
  {
    head1: "Data analyst",
    head2: <LabelWithGraphic icon={Icons.Stack} content="SQL, PowerBI, EXCEL" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/cg.png"
        content="Capgemini, Warsaw"
      />
    ),
    head4: "Dec 2023 - Pres.",
    bulletPoints: [
      "Process, analyze, and summarize raw data to extract meaningful insights.",
      "Collaborate with multiple teams to improve data-driven decision-making.",
      "Assist team leads in root cause analysis to identify and resolve key business issues.",
    ],
  },
  {
    head1: "Management Trainee",
    head2: <LabelWithGraphic icon={Icons.Stack} content="Project Management" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/yili.png"
        content="Yili Group, Beijing"
      />
    ),
    head4: "Aug 2020 - Nov 2022",
    bulletPoints: [
      "Conduct market analysis to identify target and trends.",
      "Plan, implement, and evaluate programs.",
    ],
  },
  {
    head1: "Internship in Financial department  ",
    head2: <LabelWithGraphic icon={Icons.Stack} content="Financial Modeling" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/cg.jpg"
        content="Chunguang Real Estate Development, Hebei"
      />
    ),
    head4: "Dec 2019 - Feb 2020",
    bulletPoints: [
      "Evaluate monthly pension reports, manage daily documents, and maintain financial records.",
    ],
  },
];

export default function WorkSection() {
  return (
    <Section title="WORK EXPERIENCE">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
