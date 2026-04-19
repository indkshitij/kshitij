import SectionHeading from "@/components/atoms/SectionHeading";
import PageWrapper from "@/components/layout/PageWrapper";
import EXPERIENCE from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
import { Separator } from "@/components/ui/separator";
const ExperienceSection = () => {
  return (
    <>
      <PageWrapper>
        {" "}
        <SectionHeading title="Experience" />
      </PageWrapper>
      <Separator />

      {EXPERIENCE.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </>
  );
};

export default ExperienceSection;
