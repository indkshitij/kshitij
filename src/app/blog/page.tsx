import FilledGridWrapper from "@/components/layout/filled-grid-wrapper";
import PageLayout from "@/components/layout/page-layout";
import BlogSection from "@/components/sections/blog/blog-section";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
};

export default function Page() {
  return (
    <PageLayout>
      <FilledGridWrapper showTopBorder={false} />
      <Suspense fallback={<div>Loading blogs...</div>}>
        <BlogSection />
      </Suspense>
      <FilledGridWrapper showTopBorder={false} showBottomBorder={false} />
    </PageLayout>
  );
}