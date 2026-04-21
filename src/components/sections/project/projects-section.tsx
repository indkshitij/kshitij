"use client";
import PageWrapper from "@/components/layout/page-wrapper";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/sections/project/project-card";
import SectionHeading from "@/components/atoms/section-heading";
import { Separator } from "@/components/ui/separator";
import { CollapsibleList } from "@/components/ui/collapsible-list";
export default function ProjectsSection() {
  return (
    <>
      <>
        <PageWrapper>
          <SectionHeading title="Projects" />
        </PageWrapper>
        <Separator />
        <PageWrapper>
          <CollapsibleList
            items={PROJECTS}
            max={4}
            renderItem={(item) => <ProjectCard project={item} />}
          />
        </PageWrapper>
      </>
    </>
  );
}
