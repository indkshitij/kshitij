import Projects from "@/components/pages/project-page";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer/Footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
};

export default page;
