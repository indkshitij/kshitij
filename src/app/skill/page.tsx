import PageLayout from "@/components/layout/page-layout";
import SkillsSection from "@/components/sections/skills/skill-section";
import FilledGridWrapper from "@/components/layout/filled-grid-wrapper";

export const metadata = {
  title: "Tech Stack",
};


const page = () => {
  return (
    <>
      <PageLayout>
        <FilledGridWrapper showTopBorder={false} />
        <SkillsSection />
        <FilledGridWrapper showBottomBorder={false} />
      </PageLayout>
    </>
  );
};

export default page;
