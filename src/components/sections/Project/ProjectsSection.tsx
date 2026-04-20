"use client"
import PageWrapper from "@/components/layout/PageWrapper";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/sections/Project/ProjectCard";
import SectionHeading from "@/components/atoms/SectionHeading";
import { Separator } from "@/components/ui/separator";
import { CollapsibleList } from "@/components/ui/collapsible-list";
export default function ProjectsSection() {
  return (
    <>
      <>
        <PageWrapper>
          <SectionHeading title="Projects" />
        </PageWrapper>
        <Separator/>
        <PageWrapper>
          <CollapsibleList
            items={PROJECTS}
            max={4}
            renderItem={(item) => <ProjectCard project={item}  />}
          />
        </PageWrapper>
      </>
    </>
  );
}
