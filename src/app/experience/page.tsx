
import PageLayout from "@/components/layout/page-layout";
import ExperienceSection from "@/components/sections/experience/experience-section";
import FilledGridWrapper from "@/components/layout/filled-grid-wrapper";

export const metadata = {
  title: "Experience",
};

export default function Page() {
  return (
    <PageLayout>
      <FilledGridWrapper showTopBorder={false}  />
      <ExperienceSection />
      <FilledGridWrapper showBottomBorder={false} />
    </PageLayout>
  );
}