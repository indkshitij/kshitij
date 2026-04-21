import React from "react";
import EDUCATION from "@/data/education";
import PageWrapper from "@/components/layout/page-wrapper";
import SectionHeading from "@/components/atoms/section-heading";
import ExperienceCard from "../experience/experience-card";

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
