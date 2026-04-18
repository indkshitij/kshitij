import SectionHeading from "@/components/atoms/SectionHeading";
import PageWrapper from "@/components/layout/PageWrapper";
import EXPERIENCE from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
const ExperienceSection = () => {
  return (
    <>
      <div className="border-b border-line ">
        <PageWrapper>
          {" "}
          <SectionHeading title="Experience" />
        </PageWrapper>
      </div>

      {EXPERIENCE.map((exp, index) => (
        <ExperienceCard key={exp.id} experience={exp} index={index} />
      ))}
    </>
  );
};

export default ExperienceSection;
