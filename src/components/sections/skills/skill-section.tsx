"use client";

import SectionHeading from "@/components/atoms/section-heading";
import PageWrapper from "@/components/layout/page-wrapper";
import SKILLS from "@/data/skills";
import SkillCard from "@/components/sections/skills/skill-card";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";

const SkillsSection = () => {
  return (
    <>
      <PageWrapper>
        <SectionHeading title="Tech Stacks" />
      </PageWrapper>

      <Separator />

      <PageWrapper className="p-2.5 sm:p-5">
        <TooltipProvider>
          {SKILLS.length > 0 ? (
            <div
              className="flex flex-wrap items-center justify-between gap-4"
              style={{ padding: "20px 20px" }}
            >
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
