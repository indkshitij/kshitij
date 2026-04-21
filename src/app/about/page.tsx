import About from "@/components/pages/about-page";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer/Footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default page;
