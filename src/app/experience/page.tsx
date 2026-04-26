
import PageLayout from "@/components/layout/page-layout";
import ExperienceSection from "@/components/sections/experience/experience-section";

export const metadata = {
  title: "Experience",
};

export default function Page() {
  return (
    <PageLayout>
      <ExperienceSection />
    </PageLayout>
  );
}