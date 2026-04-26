"use client"

import type { BlogPost } from "@/types/blog-type"

import { useFilteredPosts } from "@/hooks/use-filtered-posts"
import { PostList } from "@/components/sections/blog/post-list"

export function PostListWithSearch({ posts }: { posts: BlogPost[] }) {
  const filteredPosts = useFilteredPosts(posts)
  return <PostList posts={filteredPosts} />
}
