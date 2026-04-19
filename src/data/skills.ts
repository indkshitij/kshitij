import { Skill } from "@/types";

export const SKILLS: Skill[] = [
  // Languages
  {
    name: "C++",
    logo: "/techStack/c++.svg",
    website: "https://isocpp.org",
    description:
      "High-performance language used for system design and competitive programming.",
    tags: ["language"],
  },
  {
    name: "JavaScript",
    logo: "/techStack/js.svg",
    website:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description:
      "Core language of the web used for building interactive applications.",
    tags: ["language", "frontend", "backend"],
  },
  {
    name: "TypeScript",
    logo: "/techStack/typescript.svg",
    website: "https://www.typescriptlang.org",
    description:
      "Typed superset of JavaScript for scalable and maintainable apps.",
    tags: ["language", "frontend", "backend"],
  },
  {
    name: "Python",
    logo: "/techStack/python.svg",
    website: "https://www.python.org",
    description:
      "Versatile language for backend, scripting, and AI/ML.",
    tags: ["language", "backend"],
  },
  {
    name: "SQL",
    logo: "/techStack/mysql.svg",
    website: "https://www.postgresql.org/docs/",
    description:
      "Query language for managing relational databases.",
    tags: ["language", "database"],
  },

  // Frontend
  {
    name: "React.js",
    logo: "/techStack/react.svg",
    website: "https://react.dev",
    description:
      "Library for building dynamic and component-based UIs.",
    tags: ["frontend"],
  },
  {
    name: "Next.js",
    logo: "/techStack/nextjs.svg",
    website: "https://nextjs.org",
    description:
      "Full-stack React framework with SSR and routing.",
    tags: ["frontend", "backend"],
  },
  {
    name: "HTML5",
    logo: "/techStack/html5.svg",
    website:
      "https://developer.mozilla.org/en-US/docs/Web/HTML",
    description:
      "Markup language for structuring web content.",
    tags: ["frontend"],
  },
  {
    name: "CSS3",
    logo: "/techStack/css3.svg",
    website:
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description:
      "Styling language for designing responsive UI.",
    tags: ["frontend"],
  },
  {
    name: "Tailwind CSS",
    logo: "/techStack/tailwindcss.svg",
    website: "https://tailwindcss.com",
    description:
      "Utility-first CSS framework for rapid UI development.",
    tags: ["frontend"],
  },

  // Backend
  {
    name: "Node.js",
    logo: "/techStack/nodejs.svg",
    website: "https://nodejs.org",
    description:
      "JavaScript runtime for building scalable backend services.",
    tags: ["backend"],
  },
  {
    name: "Express.js",
    logo: "/techStack/expressjs.png",
    website: "https://expressjs.com",
    description:
      "Minimal web framework for building APIs with Node.js.",
    tags: ["backend"],
  },
  {
    name: "REST APIs",
    logo: "/techStack/api.png",
    website: "https://restfulapi.net",
    description:
      "Standard architecture for building scalable web services.",
    tags: ["backend"],
  },

  // Databases
  {
    name: "PostgreSQL",
    logo: "/techStack/postgresql.svg",
    website: "https://www.postgresql.org",
    description:
      "Powerful open-source relational database.",
    tags: ["database"],
  },
  {
    name: "MongoDB",
    logo: "/techStack/mongodb.svg",
    website: "https://www.mongodb.com",
    description:
      "NoSQL database for flexible and scalable data storage.",
    tags: ["database"],
  },
  {
    name: "Mongoose",
    logo: "/techStack/mongoose.svg",
    website: "https://mongoosejs.com",
    description:
      "ODM library for MongoDB in Node.js.",
    tags: ["database", "backend"],
  },

  // Tools
  {
    name: "Git",
    logo: "/techStack/git.svg",
    website: "https://git-scm.com",
    description:
      "Version control system for tracking code changes.",
    tags: ["tool"],
  },
  {
    name: "GitHub",
    logo: "/techStack/github.svg",
    website: "https://github.com",
    description:
      "Platform for hosting and collaborating on code.",
    tags: ["tool"],
  },
  {
    name: "Postman",
    logo: "/techStack/postman.svg",
    website: "https://www.postman.com",
    description:
      "API testing and development tool.",
    tags: ["tool"],
  },
  {
    name: "VS Code",
    logo: "/techStack/vscode.svg",
    website: "https://code.visualstudio.com",
    description:
      "Lightweight but powerful code editor.",
    tags: ["tool"],
  },
];

export default SKILLS;