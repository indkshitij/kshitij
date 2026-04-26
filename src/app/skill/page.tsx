import PageLayout from "@/components/layout/page-layout";
import SkillsSection from "@/components/sections/skills/skill-section";

export const metadata = {
  title: "Tech Stack",
};


const page = () => {
  return (
    <>
      <PageLayout>
        <SkillsSection />
      </PageLayout>
    </>
  );
};

export default page;
