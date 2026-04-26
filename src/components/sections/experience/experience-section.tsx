import SectionHeading from "@/components/atoms/section-heading";
import PageWrapper from "@/components/layout/page-wrapper";
import EXPERIENCE from "@/data/experience";
import ExperienceCard from "./experience-card";
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
