import { notFound } from "next/navigation";
import { BLOGS } from "@/data/blog-data";
import BlogDetailSection from "@/components/sections/blog/blog-detail/blog-detail-section";
import PageLayout from "@/components/layout/page-layout";
import { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug?.toLowerCase();

  const post = BLOGS.find((p) => p.slug?.toLowerCase() === slug);

  return {
    title: post?.title || "Blog",
    description: post?.description,
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;

  const slug = resolvedParams.slug?.toLowerCase();

  const index = BLOGS.findIndex((p) => p.slug?.toLowerCase() === slug);

  if (index === -1) return notFound();

  const post = BLOGS[index];

  //  get previous and next
  const previousPost = BLOGS[index - 1] || null;
  const nextPost = BLOGS[index + 1] || null;

  return (
    <>
      <PageLayout>
        <BlogDetailSection
          post={post}
          previous={previousPost}
          next={nextPost}
        />
      </PageLayout>
    </>
  );
}
