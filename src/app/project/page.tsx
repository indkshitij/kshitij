import PageLayout from "@/components/layout/page-layout";
import ProjectsSection from "@/components/sections/project/projects-section";

export const metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <PageLayout>
      <ProjectsSection />
    </PageLayout>
  );
}