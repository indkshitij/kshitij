import SectionHeading from "@/components/atoms/section-heading";
import PageWrapper from "@/components/layout/page-wrapper";
import ContactForm from "@/components/sections/contact/contact-form";
import { Separator } from "@/components/ui/separator";

const ContactSection = () => {
  return (
    <div>
      <PageWrapper>
        <SectionHeading title="Contact" />
      </PageWrapper>
      <Separator />
      <PageWrapper>
        <ContactForm />
      </PageWrapper>
    </div>
  );
};

export default ContactSection;
