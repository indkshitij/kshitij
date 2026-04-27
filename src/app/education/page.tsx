import PageLayout from "@/components/layout/page-layout";
import EducationSection from "@/components/sections/education/education-section";
import FilledGridWrapper from "@/components/layout/filled-grid-wrapper";

export const metadata = {
  title: "Education",
};

export default function Page() {
  return (
    <PageLayout>
      <FilledGridWrapper showTopBorder={false}  />
      <EducationSection />
      <FilledGridWrapper showBottomBorder={false} />
    </PageLayout>
  );
}