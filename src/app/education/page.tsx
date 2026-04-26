import PageLayout from "@/components/layout/page-layout";
import EducationSection from "@/components/sections/education/education-section";

export const metadata = {
  title: "Education",
};

export default function Page() {
  return (
    <PageLayout>
      <EducationSection />
    </PageLayout>
  );
}