import PageLayout from "@/components/layout/page-layout";
import BlogSection from "@/components/sections/blog/blog-section";

export const metadata = {
  title: "Blog",
};

export default function Page() {
  return (
    <PageLayout>
      <BlogSection />
    </PageLayout>
  );
}
