import PageLayout from "@/components/layout/page-layout";
import FilledGridWrapper from "@/components/layout/filled-grid-wrapper";
import HeroSection from "@/components/sections/home/hero-section";
import ExperienceSection from "@/components/sections/experience/experience-section";
import EducationSection from "@/components/sections/education/education-section";

export default function Home() {
  return (
    <>
    <PageLayout>
      <>
       <HeroSection />
      <FilledGridWrapper />
      <ExperienceSection />
      <FilledGridWrapper />
      <EducationSection />
      <FilledGridWrapper />
      </>
    </PageLayout>
    </>
  );
}
