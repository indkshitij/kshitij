import PageLayout from "@/components/layout/page-layout";
import ProjectsSection from "@/components/sections/project/projects-section";
import FilledGridWrapper from "@/components/layout/filled-grid-wrapper";
export const metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <PageLayout>
      <FilledGridWrapper showTopBorder={false}/>
      <ProjectsSection />
      <FilledGridWrapper showBottomBorder={false} />
    </PageLayout>
  );
}