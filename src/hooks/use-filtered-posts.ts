import { BlogPost } from "@/types/blog-type"
import { useSearchQuery } from "@/hooks/use-search-query"

const normalize = (text: string) => text.toLowerCase().replaceAll(" ", "")

const matchesQuery = (post: BlogPost, normalizedQuery: string) => {
  const normalizedTitle = normalize(post.title)
  const normalizedDescription = normalize(post.description)

  return (
    normalizedTitle.includes(normalizedQuery) ||
    normalizedDescription.includes(normalizedQuery)
  )
}

const searchPosts = (posts: BlogPost[], query: string | null) => {
  if (!query) return posts

  const normalizedQuery = normalize(query)
  return posts.filter((post) => matchesQuery(post, normalizedQuery))
}

export function useFilteredPosts(posts: BlogPost[]) {
  const { query } = useSearchQuery()
  return searchPosts(posts, query)
}
