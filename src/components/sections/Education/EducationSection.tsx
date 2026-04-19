import React from "react";
import EDUCATION from "@/data/education";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/atoms/SectionHeading";
import ExperienceCard from "../Experience/ExperienceCard";

const EducationSection = () => {
  return (
    <>
      <div className="border-b border-line ">
        <PageWrapper>
          <SectionHeading title="Education" />
        </PageWrapper>
      </div>

      {EDUCATION.map((edu, index) => (
        <ExperienceCard key={edu.id} experience={edu} />
      ))}
    </>
  );
};

export default EducationSection;
