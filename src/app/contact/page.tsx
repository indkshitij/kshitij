import PageLayout from "@/components/layout/page-layout";
import ContactSection from "@/components/sections/contact/contact-section";

export const metadata = {
  title: "Contact",
};

const Page = () => {
  return (
    <PageLayout>
      <ContactSection />
    </PageLayout>
  );
};

export default Page;