"use client";

import PageWrapper from "@/components/layout/page-wrapper";
import SectionHeading from "@/components/atoms/section-heading";
import { Separator } from "@/components/ui/separator";
import { PostList } from "@/components/sections/blog/post-list";
import { PostSearchInput } from "@/components/sections/blog/post-search-input";
import { BLOGS } from "@/data/blog-data";
import { useFilteredPosts } from "@/hooks/use-filtered-posts";

const BlogSection = () => {
  const filteredPosts = useFilteredPosts(BLOGS);

  return (
    <div>
      <PageWrapper>
        <SectionHeading title="Blogs" />
      </PageWrapper>
      <Separator />

      <PageWrapper showBorderY={false}>
        <div className="p-4">
          <PostSearchInput />
        </div>
        <PostList posts={filteredPosts} />
      </PageWrapper>
    </div>
  );
};

export default BlogSection;
