import Experience from "@/components/experience";
import { Icons } from "@/components/icons";
import LabelWithGraphic from "@/components/label-with-graphic";
import Section from "./section";

const exp: ExperienceProps[] = [
  {
    head1: "Data Analyst",
    head2: <LabelWithGraphic icon={Icons.Stack} content="SQL, PowerBI, Excel" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/cg.png"
        content="Capgemini, Warsaw"
      />
    ),
    head4: "Dec 2023 - Jul 2025",
    bulletPoints: [
      "Processed and examined data to derive business insights.",
      "Worked cross-functionally to enhance data-driven decisions.",
      "Supported root cause analysis for operational challenges.",
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
      "Conducted market research and trend identification.",
      "Designed and assessed organizational initiatives.",
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
