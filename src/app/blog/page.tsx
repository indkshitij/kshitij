import PageLayout from "@/components/layout/page-layout";
import BlogSection from "@/components/sections/blog/blog-section";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
};

export default function Page() {
  return (
    <PageLayout>
      <Suspense fallback={<div>Loading blogs...</div>}>
        <BlogSection />
      </Suspense>
    </PageLayout>
  );
}