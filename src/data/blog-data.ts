import { BlogPost } from "@/types/blog-type";

export const BLOGS: BlogPost[] = [
  {
    id: "1",
    title: "Designing Minimal Interfaces That Feel Premium",
    slug: "minimal-ui-design",
    description:
      "Learn how to craft minimal interfaces that still feel rich and premium through motion, spacing, and subtle details.",

    coverImage: "/images/blog/minimal-ui.jpg",

    media: [
      {
        type: "video",
        url: "/videos/ui-demo.mp4",
        poster: "/images/blog/video-thumb.jpg",
      },
    ],

    author: {
      name: "Kshitij Singh",
      avatar: "/images/authors/kshitij.jpg",
      role: "Frontend Developer",
    },

    publishedAt: "2025-02-10",
    updatedAt: "2025-02-12",

    tags: ["UI", "Design", "Frontend"],
    category: "Design",

    readingTime: "5 min read",
    featured: true,

    content: [
      {
        type: "heading",
        content: "Why Minimal Design Works",
      },
      {
        type: "paragraph",
        content:
          "Minimal design removes distractions and allows users to focus on what matters most. It improves usability and performance.",
      },
      {
        type: "image",
        media: {
          type: "image",
          url: "/images/blog/minimal-example.jpg",
          alt: "Minimal UI Example",
        },
      },
      {
        type: "paragraph",
        content:
          "Spacing, typography, and motion play a key role in making minimal design feel premium.",
      },
      {
        type: "quote",
        content:
          "Simplicity is the ultimate sophistication.",
      },
      {
        type: "video",
        media: {
          type: "video",
          url: "/videos/motion-demo.mp4",
          poster: "/images/blog/motion-thumb.jpg",
        },
      },
    ],
  },

  {
    id: "2",
    title: "Building Interactive UI with Motion",
    slug: "interactive-ui-motion",
    description:
      "A deep dive into creating engaging UI using motion libraries like Framer Motion.",

    coverImage: "/images/blog/motion-ui.jpg",

    author: {
      name: "Kshitij Singh",
      avatar: "/images/authors/kshitij.jpg",
    },

    publishedAt: "2025-03-01",

    tags: ["Animation", "React", "UX"],
    category: "Development",

    readingTime: "7 min read",

    content: [
      {
        type: "heading",
        content: "Motion Improves UX",
      },
      {
        type: "paragraph",
        content:
          "Motion gives feedback, guides attention, and makes interfaces feel alive.",
      },
      {
        type: "code",
        content: `
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
/>
        `,
      },
    ],
  },
];