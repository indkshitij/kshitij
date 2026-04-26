export interface Author {
  name: string;
  avatar: string;
  role?: string;
}

export interface BlogMedia {
  type: "image" | "video";
  url: string;
  alt?: string;
  poster?: string; // for video thumbnail
}

export interface BlogContentBlock {
  type: "paragraph" | "heading" | "image" | "video" | "quote" | "code";
  content?: string;
  media?: BlogMedia;
  codeLanguage?: string;
  interactive?: boolean;
  dependencies?: Record<string, string>;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;

  coverImage: string;
  media?: BlogMedia[]; 

  author: Author;

  publishedAt: string;
  updatedAt?: string;

  tags: string[];
  category: string;

  readingTime: string;
  featured?: boolean;

  content: BlogContentBlock[];
}