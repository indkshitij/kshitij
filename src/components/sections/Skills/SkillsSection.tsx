"use client";

import SectionHeading from "@/components/atoms/SectionHeading";
import PageWrapper from "@/components/layout/PageWrapper";
import SKILLS from "@/data/skills";
import SkillCard from "@/components/sections/Skills/SkillCard";
import { TooltipProvider } from "@/components/ui/tooltip";

const SkillsSection = () => {
  return (
    <>
      <PageWrapper>
        <SectionHeading title="Stacks" />
      </PageWrapper>
      <PageWrapper>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {SKILLS.length > 0 ? (
            SKILLS.map((skill, idx) => <SkillCard key={idx} skills={[skill]} />)
          ) : (
            <p>No skills found</p>
          )}
        </div>
      </PageWrapper>{" "}
    </>
  );
};

export default SkillsSection;
