import { Brain } from "lucide-react";
import type { Project } from "@/types/project-type";

export const PROJECTS: Project[] = [
  {
    title: "Brainwave AI - Interview Simulator",
    tagline: "AI-powered voice-based mock interview platform",

    shortDescription:
      "Simulates real interviews using voice AI and provides structured feedback.",

    techUsed: ["MERN", "Vapi", "Gemini", "Tailwind CSS"],

    github: "https://github.com/indkshitij/brainwave-ai",
    live: "https://brainwave-ai.vercel.app/",
    icon: Brain,

    media: [
      { type: "image", url: "/projects/brainwave-1.png" },
      { type: "image", url: "/projects/brainwave-2.png" },
    ],

    description: `
AI-powered mock interview platform designed to simulate real-world interview scenarios using voice interaction and intelligent feedback systems.

Built to help users practice interviews across roles and experience levels with measurable insights and structured evaluation.

### Key Highlights

- Reduced interview preparation effort by 50% through configurable simulation flows  
- Improved interaction latency by 30% using optimized frontend rendering strategies  
- Generated structured feedback for each session using AI-driven evaluation models  
- Enabled role-based and experience-level customization for realistic interview scenarios  

### Features

- Voice-based real-time interview sessions using AI agents  
- AI-generated questions based on role, stack, and difficulty  
- Structured feedback with performance breakdown and insights  
- Dashboard for tracking past interviews and performance  

### Approach

Focused on building a scalable system combining real-time voice interaction with AI feedback processing, ensuring low latency, modular architecture, and consistent evaluation.
`,
  },

  {
    title: "Neo Finance - AI Finance Manager",
    tagline: "AI-enabled personal finance and expense tracking platform",

    shortDescription:
      "Automates expense tracking and financial insights using AI.",

    techUsed: ["MERN", "Gemini", "Resend", "Inngest", "Arcjet"],

    github: "https://github.com/indkshitij/Neo-Finance",
    live: "https://neo-finance.onrender.com/",

    media: [
      { type: "image", url: "/projects/neo-1.png" },
      { type: "image", url: "/projects/neo-2.png" },
    ],

    description: `
Full-stack personal finance management platform designed to simplify expense tracking, automate data entry, and provide intelligent financial insights.

Built with AI-powered receipt processing, event-driven workflows, and secure transaction management.

### Key Highlights

- Reduced manual expense entry by 60% through automated receipt interpretation  
- Improved financial visibility with budget alerts and monthly reports  
- Ensured data consistency using transactional integrity mechanisms  
- Automated workflows using event-driven architecture  

### Features

- AI-powered bill scanning and transaction auto-fill  
- Budget tracking with alerts and monthly summaries  
- Secure authentication and user session management  
- Data visualization for spending and category insights  
- Automated email notifications and reports  

### Approach

Designed as a scalable full-stack system integrating AI processing, secure APIs, and background workflows, with a focus on reliability, performance, and user experience.
`,
  },
  {
    title: "Smart AI Summarizer",
    tagline: "AI-powered browser content summarization tool",

    shortDescription:
      "Extracts and summarizes web content using scraping + AI processing.",

    techUsed: ["React.js", "Python", "Flask", "Scrapy", "Groq API"],

    github: "https://github.com/indkshitij/Summarize-Chrome-Extension",

    media: [{ type: "image", url: "/projects/summarizer-1.png" }],

    description: `
AI-powered web application that extracts content from any webpage and generates concise summaries using a combination of web scraping and AI models.

Designed to improve information consumption by reducing large content into structured, readable insights.

### Key Highlights

- Reduced content review time by 50% through on-demand summarization  
- Enabled real-time processing using multi-threaded backend execution  
- Built an end-to-end pipeline integrating scraping, processing, and AI summarization  
- Supported cross-browser usage with optional Chrome extension integration  

### Features

- Web scraping using Scrapy and dynamic content handling  
- AI-generated summaries using Groq API  
- Copy-to-clipboard and downloadable summaries  
- Real-time summarization with optimized backend processing  
- Optional Chrome extension for in-browser usage  

### Approach

Designed as a modular pipeline combining data extraction, backend processing, and AI summarization, ensuring fast response times and scalable handling of large content inputs.
`,
  },
  {
    title: "Full Stack Portfolio Management System",
    tagline: "Portfolio + admin dashboard with content management",

    shortDescription:
      "MERN-based portfolio with admin panel for managing projects, skills, and content.",

    techUsed: ["MERN", "JWT", "Cloudinary", "Tailwind CSS"],

    github: "https://github.com/indkshitij/Kshitij-Portfolio",

    media: [{ type: "image", url: "/projects/portfolio-1.png" }],

    description: `
Full-stack portfolio platform with an integrated admin dashboard to manage projects, skills, education, and user interactions.

Built to provide a complete content management system with secure authentication and scalable backend architecture.

### Key Highlights

- Built a complete CRUD-based admin dashboard for managing portfolio content  
- Implemented secure authentication using JWT and protected routes  
- Integrated Cloudinary for efficient media storage and delivery  
- Designed scalable APIs for handling dynamic content updates  

### Features

- Public portfolio with projects, experience, and contact form  
- Admin dashboard for managing all content  
- Secure authentication and session management  
- Image upload and optimization using Cloudinary  
- REST API architecture with structured routing  

### Approach

Focused on building a scalable full-stack system with clear separation of concerns, secure authentication, and efficient content management workflows.
`,
  },
  {
    title: "Postgres File Uploader",
    tagline: "Automated data ingestion pipeline for structured datasets",

    shortDescription:
      "Uploads CSV/Excel data into PostgreSQL with logging and batching.",

    techUsed: ["Python", "PostgreSQL", "SQLAlchemy", "Pandas"],

    github: "https://github.com/indkshitij/Postgress-File-Uploader",

    media: [{ type: "image", url: "/projects/uploader-1.png" }],

    description: `
Data ingestion utility designed to automate the process of uploading structured data from CSV and Excel files into PostgreSQL databases.

Built for reliability, scalability, and efficient handling of large datasets.

### Key Highlights

- Automated ingestion of CSV and Excel files into database tables  
- Implemented batch processing for handling large datasets efficiently  
- Ensured fault tolerance with structured logging and error handling  
- Standardized table creation and data normalization  

### Features

- Automatic file detection and processing  
- Scalable batch inserts for large data volumes  
- Centralized logging system for monitoring and debugging  
- Secure database configuration and connection handling  

### Approach

Designed as a scalable data pipeline with emphasis on reliability, modularity, and efficient database interaction for production-ready usage.
`,
  },
];
