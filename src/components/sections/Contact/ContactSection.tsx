import SectionHeading from "@/components/atoms/SectionHeading";
import PageWrapper from "@/components/layout/PageWrapper";
import ContactForm from "@/components/sections/Contact/ContactForm";
import { Separator } from "@/components/ui/separator";

const ContactSection = () => {
  return (
    <div>
      <PageWrapper>
        <SectionHeading title="Contact" />
      </PageWrapper>
      <Separator/>
      <PageWrapper>
        <ContactForm />
      </PageWrapper>
    </div>
  );
};

export default ContactSection;
