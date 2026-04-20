"use client";

import SectionHeading from "@/components/atoms/SectionHeading";
import PageWrapper from "@/components/layout/PageWrapper";
import SKILLS from "@/data/skills";
import SkillCard from "@/components/sections/Skills/SkillCard";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";

const SkillsSection = () => {
  return (
    <>
      <PageWrapper>
        <SectionHeading title="Stacks" />
      </PageWrapper>

      <Separator />

   <PageWrapper className="p-5">
  <TooltipProvider>
    {SKILLS.length > 0 ? (
      <div className="flex flex-wrap items-center justify-between gap-4" style={{ padding: "20px 20px" }}>
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    ) : (
      <div className="flex items-center justify-center py-10 text-sm text-muted-foreground">
        No skills found
      </div>
    )}
  </TooltipProvider>
</PageWrapper>
    </>
  );
};

export default SkillsSection;
