import PageLayout from "@/components/layout/page-layout";
import ContactSection from "@/components/sections/contact/contact-section";
import FilledGridWrapper from "@/components/layout/filled-grid-wrapper";
export const metadata = {
  title: "Contact",
};

const Page = () => {
  return (
    <PageLayout>
      <FilledGridWrapper showTopBorder={false} />
      <ContactSection />
      <FilledGridWrapper  showBottomBorder={false} />
    </PageLayout>
  );
};

export default Page;