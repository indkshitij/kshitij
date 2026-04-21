import BlogPage from "@/components/pages/blog-page";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <BlogPage />
      <Footer />
    </div>
  );
};

export default page;
