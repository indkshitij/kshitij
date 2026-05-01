import { Skill } from "@/types/skill-type";

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
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
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
    description: "Versatile language for backend, scripting, and AI/ML.",
    tags: ["language", "backend"],
  },
  {
    name: "SQL",
    logo: "/techStack/sql.svg",
    website: "https://www.postgresql.org/docs/",
    description: "Query language for managing relational databases.",
    tags: ["language", "database"],
  },

  // Frontend

  {
    name: "HTML5",
    logo: "/techStack/html5.svg",
    website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    description: "Markup language for structuring web content.",
    tags: ["frontend"],
  },
  {
    name: "CSS3",
    logo: "/techStack/css3.svg",
    website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description: "Styling language for designing responsive UI.",
    tags: ["frontend"],
  },
  {
    name: "React.js",
    logo: "/techStack/react.svg",
    website: "https://react.dev",
    description: "Library for building dynamic and component-based UIs.",
    tags: ["frontend"],
  },
  {
    name: "Next.js",
    logo: "/techStack/nextjs2.svg",
    website: "https://nextjs.org",
    description: "Full-stack React framework with SSR and routing.",
    tags: ["frontend", "backend"],
  },
  {
    name: "Tailwind CSS",
    logo: "/techStack/tailwindcss.svg",
    website: "https://tailwindcss.com",
    description: "Utility-first CSS framework for rapid UI development.",
    tags: ["frontend"],
  },

  // Backend
  {
    name: "Node.js",
    logo: "/techStack/nodejs.svg",
    website: "https://nodejs.org",
    description: "JavaScript runtime for building scalable backend services.",
    tags: ["backend"],
  },
  {
    name: "Express.js",
    lightLogo: "/techStack/express-js-light.svg",
    darkLogo: "/techStack/express-js-dark.svg",
    website: "https://expressjs.com",
    description: "Minimal web framework for building APIs with Node.js.",
    tags: ["backend"],
  },
  {
    name: "REST APIs",
    logo: "/techStack/api.png",
    website: "https://restfulapi.net",
    description: "Standard architecture for building scalable web services.",
    tags: ["backend"],
  },

  // Databases
  {
    name: "PostgreSQL",
    logo: "/techStack/postgresql.svg",
    website: "https://www.postgresql.org",
    description: "Powerful open-source relational database.",
    tags: ["database"],
  },
  {
    name: "MongoDB",
    logo: "/techStack/mongo.png",
    website: "https://www.mongodb.com",
    description: "NoSQL database for flexible and scalable data storage.",
    tags: ["database"],
  },
  {
    name: "Mongoose",
    logo: "/techStack/mongoose.svg",
    website: "https://mongoosejs.com",
    description: "ODM library for MongoDB in Node.js.",
    tags: ["database", "backend"],
  },

  // State Management & Routing
  {
    name: "Redux",
    logo: "/techStack/redux.svg",
    website: "https://redux.js.org",
    description:
      "Predictable state container for managing complex application state.",
    tags: ["frontend"],
  },
  {
    name: "React Router",
    
      lightLogo: "/techStack/reactrouter.svg",
      darkLogo: "/techStack/react-router-dark.svg",
    
    website: "https://reactrouter.com",
    description:
      "Routing library for handling navigation in React applications.",
    tags: ["frontend"],
  },

  // UI Libraries
  {
    name: "shadcn/ui",
    lightLogo:"/techStack/shadcnui.svg",darkLogo:"/techStack/shadcn-dark.png",
    website: "https://ui.shadcn.com",
    description:
      "Accessible and customizable UI components built with Radix and Tailwind.",
    tags: ["frontend", "ui"],
  },
  {
    name: "Radix UI",
    logo: "/techStack/radixuidark.png",
    website: "https://www.radix-ui.com",
    description:
      "Low-level UI primitives for building accessible design systems.",
    tags: ["frontend", "ui"],
  },
  {
    name: "Base UI",
    logo: "/techStack/baseuidark.jpeg",
    website: "https://baseweb.design",
    description:
      "React component library focused on accessibility and performance.",
    tags: ["frontend", "ui"],
  },
  // UI Libraries
  {
    name: "Material UI",
    logo: "/techStack/materialui.svg",
    website: "https://mui.com",
    description: "React UI library implementing Google’s Material Design.",
    tags: ["frontend", "ui"],
  },
  {
    name: "Chakra UI",
    logo: "/techStack/chakraui.svg",
    website: "https://chakra-ui.com",
    description: "Accessible and modular component library for React apps.",
    tags: ["frontend", "ui"],
  },
  {
    name: "Hero UI",
    logo: "/techStack/headlessui.svg",
    website: "https://heroicons.com",
    description:
      "Beautifully designed UI icons and components for modern apps.",
    tags: ["frontend", "ui"],
  },

  // Animation
  {
    name: "Framer Motion",
    logo:"/techStack/framer.png",
    website: "https://www.framer.com/motion/",
    description: "Animation library for React with powerful gesture support.",
    tags: ["frontend"],
  },

  // Media / Storage
  {
    name: "Cloudinary",
    logo: "/techStack/cloudinary.svg",
    website: "https://cloudinary.com",
    description: "Cloud-based media management for images and videos.",
    tags: ["backend", "cloud"],
  },

  // Validation / Utility
  {
    name: "Zod",
    logo: "/techStack/zod.svg",
    website: "https://zod.dev",
    description: "TypeScript-first schema validation for safer data handling.",
    tags: ["backend", "frontend"],
  },

  // Realtime / Communication
  {
    name: "Socket IO",
    logo: "/techStack/socketio.png",
    website: "https://socket.io",
    description:
      "Library for real-time, bidirectional communication between client and server.",
    tags: ["backend"],
  },
  {
    name: "Axios",
    logo: "/techStack/axiosbase.png",
    website: "https://axios-http.com",
    description: "Promise-based HTTP client for making API requests.",
    tags: ["frontend", "backend"],
  },

  // Authentication / Security
  {
    name: "JWT",
    logo: "/techStack/jwt.svg",
    website: "https://jwt.io",
    description:
      "Standard for securely transmitting information as JSON objects.",
    tags: ["backend"],
  },
  {
    name: "Clerk",
    logo: "/techStack/clerk.jpeg",
    website: "https://clerk.com",
    description: "Authentication and user management for modern applications.",
    tags: ["backend", "tool"],
  },

  // Tools
  {
    name: "Git",
    logo: "/techStack/git.svg",
    website: "https://git-scm.com",
    description: "Version control system for tracking code changes.",
    tags: ["tool"],
  },
  {
    name: "GitHub",
    
      lightLogo: "/techStack/github.svg",
      darkLogo: "/techStack/github-dark.png",
    
    website: "https://github.com",
    description: "Platform for hosting and collaborating on code.",
    tags: ["tool"],
  },
  {
    name: "Postman",
    logo: "/techStack/postman.svg",
    website: "https://www.postman.com",
    description: "API testing and development tool.",
    tags: ["tool"],
  },
  {
    name: "VS Code",
    logo: "/techStack/vscode.svg",
    website: "https://code.visualstudio.com",
    description: "Lightweight but powerful code editor.",
    tags: ["tool"],
  }, // Experimental / Fun
  {
    name: "Anti-Gravity",
    logo: "/techStack/antigravity.png",
    website: "https://xkcd.com/353/",
    description: "Because every developer needs a little humor and curiosity.",
    tags: ["fun"],
  },

  // DevOps & Cloud
  {
    name: "Docker",
    logo: "/techStack/docker.svg",
    website: "https://www.docker.com",
    description:
      "Containerization platform for building and deploying applications.",
    tags: ["devops", "backend"],
  },
  {
    name: "Microsoft Azure",
    logo: "/techStack/azure.svg",
    website: "https://azure.microsoft.com",
    description:
      "Cloud computing platform for deploying, managing, and scaling apps.",
    tags: ["cloud", "devops"],
  },

  // AI Tools
  {
    name: "Claude",
    logo: "/techStack/claude-ai.svg",
    website: "https://claude.ai",
    description: "AI assistant for coding, reasoning, and content generation.",
    tags: ["ai", "tool"],
  },
  {
    name: "Cursor",
    logo: "/techStack/cursor.jpeg",
    website: "https://cursor.sh",
    description:
      "AI-powered code editor built for faster development workflows.",
    tags: ["ai", "tool"],
  },
  {
    name: "ChatGPT",
    logo: "/techStack/chatgpt.svg",
    website: "https://chat.openai.com",
    description: "AI assistant for coding, debugging, and knowledge tasks.",
    tags: ["ai", "tool"],
  },
  {
    name: "Gemini",
    logo: "/techStack/geminicolor.svg",
    website: "https://deepmind.google/technologies/gemini/",
    description: "Google’s multimodal AI model for reasoning and generation.",
    tags: ["ai", "tool"],
  },
  {
    name: "Grok",
    logo: "/techStack/grok.png",
    website: "https://x.ai",
    description: "AI model by xAI for reasoning and conversational tasks.",
    tags: ["ai"],
  },
  // AI / Voice
  {
    name: "Vapi",
    logo: "/techStack/vapi.svg",
    website: "https://vapi.ai",
    description: "Voice AI platform for building conversational applications.",
    tags: ["ai"],
  },

  // Deployment / Platforms
  {
    name: "Vercel",
    
      lightLogo: "/techStack/vercel.png",
      darkLogo: "/techStack/vercellogo-dark.png",
    
    website: "https://vercel.com",
    description:
      "Platform for deploying frontend frameworks and serverless applications.",
    tags: ["cloud", "devops"],
  },
  {
    name: "Render",
    
      lightLogo: "/techStack/render.jpeg",
      darkLogo: "/techStack/render.jpeg",
    
    website: "https://render.com",
    description:
      "Cloud platform for hosting web services, APIs, and databases.",
    tags: ["cloud", "devops"],
  },

  {
    name: "Slack",
    logo: "/techStack/slack.svg",
    website: "https://slack.com",
    description:
      "Collaboration platform used for team communication and integrations.",
    tags: ["tool"],
  },

  // Data Science
  {
    name: "NumPy",
    logo: "/techStack/numpy.svg",
    website: "https://numpy.org",
    description:
      "Library for numerical computing and array operations in Python.",
    tags: ["data"],
  },
  {
    name: "Pandas",
    logo: "/techStack/pandaslogo.png",
    website: "https://pandas.pydata.org",
    description:
      "Data analysis and manipulation library for structured datasets.",
    tags: ["data"],
  },
  {
    name: "Matplotlib",
    logo: "/techStack/matplotliblogo.png",
    website: "https://matplotlib.org",
    description:
      "Visualization library for creating charts and graphs in Python.",
    tags: ["data"],
  },

  // Design / Creativity

  {
    name: "Figma",
    logo: "/techStack/figma.svg",
    website: "https://www.figma.com",
    description:
      "Collaborative design tool for UI/UX prototyping and design systems.",
    tags: ["design", "tool"],
  },
  {
    name: "Canva",
    logo: "/techStack/canva.svg",
    website: "https://www.canva.com",
    description:
      "Design tool for creating graphics, presentations, and visuals.",
    tags: ["design", "tool"],
  },
];

export default SKILLS;
