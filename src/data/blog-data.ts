import { BlogPost } from "@/types/blog-type";

export const BLOGS: BlogPost[] = [
  {
    id: "1",
    title: "Designing Minimal Interfaces That Feel Premium",
    slug: "minimal-ui-design1",
    description:
      "Learn how to craft minimal interfaces that still feel rich and premium through motion, spacing, and subtle details.",

    coverImage: "/blog/images/img1.png",

    media: [
      {
        type: "video",
        alt: "abcdef dsnkdsjn",
        url: "/blog/videos/vid1/vid1.mp4",
        poster: "/blog/videos/vid1/thumnail.png",
      },
    ],

    author: {
      name: "Kshitij Singh",
      avatar: "/personal/Image.jpg",
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
          url: "/blog/images/img2.png",
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
        content: "Simplicity is the ultimate sophistication.",
      },
      {
        type: "video",
        media: {
          type: "video",
          alt: "abcdef dsnkdsjn",
          url: "/blog/videos/vid1/vid1.mp4",
          poster: "/blog/videos/vid1/thumnail.png",
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

    coverImage: "/blog/images/img1.png",

    author: {
      name: "Kshitij Singh",
      avatar: "/personal/Image.jpg",
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
        codeLanguage: "react",
        interactive: true,
        content: `
import { motion } from "framer-motion";

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Hello World
    </motion.div>
  );
}
  `,
      },
      {
        type: "code",
        codeLanguage: "javascript",
        content: `
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Kshitij"));
  `,
      },
      {
        type: "code",
        codeLanguage: "typescript",
        content: `
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Kshitij",
  age: 22,
};

console.log(user);
  `,
      },
      {
        type: "code",
        codeLanguage: "cpp",
        content: `
#include <iostream>
using namespace std;

int main() {
  cout << "Hello, C++!" << endl;
  return 0;
}
  `,
      },
      {
        type: "code",
        codeLanguage: "html",
        content: `
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
  `,
      },
      {
        type: "code",
        codeLanguage: "css",
        content: `
body {
  background: #0f172a;
  color: white;
  font-family: sans-serif;
}
  `,
      },
    ],
  },
  {
    id: "3",
    title: "Designing Minimal Interfaces That Feel Premium",
    slug: "minimal-ui-design2",
    description:
      "Learn how to craft minimal interfaces that still feel rich and premium through motion, spacing, and subtle details.",

    coverImage: "/blog/images/img2.png",

    media: [
      {
        type: "video",
        alt: "abcdef dsnkdsjn",
        url: "/blog/videos/vid1/vid1.mp4",
        poster: "/blog/videos/vid1/thumnail.png",
      },
    ],

    author: {
      name: "Kshitij Singh",
      avatar: "/personal/Image.jpg",
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
          url: "/blog/images/img2.png",
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
        content: "Simplicity is the ultimate sophistication.",
      },
      {
        type: "video",
        media: {
          type: "video",
          alt: "abcdef dsnkdsjn",
          url: "/blog/videos/vid1/vid1.mp4",
          poster: "/blog/videos/vid1/thumnail.png",
        },
      },
    ],
  },

  {
    id: "4",
    title: "Building Interactive UI with Motion",
    slug: "interactive-ui-motion2",
    description:
      "A deep dive into creating engaging UI using motion libraries like Framer Motion.",

    coverImage: "/blog/images/img1.png",

    author: {
      name: "Kshitij Singh",
      avatar: "/personal/Image.jpg",
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
  {
    id: "5",
    title: "Designing Minimal Interfaces That Feel Premium",
    slug: "minimal-ui-design3",
    description:
      "Learn how to craft minimal interfaces that still feel rich and premium through motion, spacing, and subtle details.",

    coverImage: "/blog/images/img2.png",

    media: [
      {
        type: "video",
        alt: "abcdef dsnkdsjn",
        url: "/blog/videos/vid1/vid1.mp4",
        poster: "/blog/videos/vid1/thumnail.png",
      },
    ],

    author: {
      name: "Kshitij Singh",
      avatar: "/personal/Image.jpg",
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
          url: "/blog/images/img2.png",
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
        content: "Simplicity is the ultimate sophistication.",
      },
      {
        type: "video",
        media: {
          type: "video",
          alt: "abcdef dsnkdsjn",
          url: "/blog/videos/vid1/vid1.mp4",
          poster: "/blog/videos/vid1/thumnail.png",
        },
      },
    ],
  },

  {
    id: "6",
    title: "Building Interactive UI with Motion",
    slug: "interactive-ui-motion3",
    description:
      "A deep dive into creating engaging UI using motion libraries like Framer Motion.",

    coverImage: "/blog/images/img1.png",

    author: {
      name: "Kshitij Singh",
      avatar: "/personal/Image.jpg",
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
        codeLanguage: "react",
        interactive: true,
        content: `
  import { motion } from "framer-motion";

  export default function Example() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Hello World
      </motion.div>
    );
  }
  `,
      },
      {
        type: "code",
        codeLanguage: "javascript",
        content: `
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Kshitij"));
  `,
      },
      {
        type: "code",
        codeLanguage: "typescript",
        content: `
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Kshitij",
  age: 22,
};

console.log(user);
  `,
      },
      {
        type: "code",
        codeLanguage: "cpp",
        content: `
#include <iostream>
using namespace std;

int main() {
  cout << "Hello, C++!" << endl;
  return 0;
}
  `,
      },
      {
        type: "code",
        codeLanguage: "html",
        content: `
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
  `,
      },
      {
        type: "code",
        codeLanguage: "css",
        content: `
body {
  background: #0f172a;
  color: white;
  font-family: sans-serif;
}
  `,
      },
    ],
  },
  {
    id: "7",
    title: "Designing Minimal Interfaces That Feel Premium",
    slug: "minimal-ui-design4",
    description:
      "Learn how to craft minimal interfaces that still feel rich and premium through motion, spacing, and subtle details.",

    coverImage: "/blog/images/img2.png",

    media: [
      {
        type: "video",
        alt: "abcdef dsnkdsjn",
        url: "/blog/videos/vid1/vid1.mp4",
        poster: "/blog/videos/vid1/thumnail.png",
      },
    ],

    author: {
      name: "Kshitij Singh",
      avatar: "/personal/Image.jpg",
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
          url: "/blog/images/img2.png",
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
        content: "Simplicity is the ultimate sophistication.",
      },
      {
        type: "video",
        media: {
          type: "video",
          alt: "abcdef dsnkdsjn",
          url: "/blog/videos/vid1/vid1.mp4",
          poster: "/blog/videos/vid1/thumnail.png",
        },
      },
    ],
  },

  {
    id: "8",
    title: "Building Interactive UI with Motion",
    slug: "interactive-ui-motion4",
    description:
      "A deep dive into creating engaging UI using motion libraries like Framer Motion.",

    coverImage: "/blog/images/img2.png",

    author: {
      name: "Kshitij Singh",
      avatar: "/personal/Image.jpg",
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
        codeLanguage: "react",
        interactive: true,
        content: `
import { motion } from "framer-motion";

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Hello World
    </motion.div>
  );
}
  `,
      },
      {
        type: "code",
        codeLanguage: "javascript",
        content: `
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Kshitij"));
  `,
      },
      {
        type: "code",
        codeLanguage: "typescript",
        content: `
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Kshitij",
  age: 22,
};

console.log(user);
  `,
      },
      {
        type: "code",
        codeLanguage: "cpp",
        content: `
#include <iostream>
using namespace std;

int main() {
  cout << "Hello, C++!" << endl;
  return 0;
}
  `,
      },
      {
        type: "code",
        codeLanguage: "html",
        content: `
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
  `,
      },
      {
        type: "code",
        codeLanguage: "css",
        content: `
body {
  background: #0f172a;
  color: white;
  font-family: sans-serif;
}
  `,
      },
    ],
  },
];
