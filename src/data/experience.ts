import type { Experience } from "@/types/experience-type";

const EXPERIENCE: Experience[] = [
  {
    id: "forescribe",
    companyName: "Forescribe",
    companyLogo: "/experience/forescribeLogo.png",
    companyWebsite: "https://forescribe.com",

    industry: "Fintech",
    companySize: "Startup",
    location: "Remote",

    isCurrentEmployer: false,

    summary:
      "A fintech startup focused on AI-driven financial analytics, spend optimization, and digital infrastructure visibility for enterprises.",

    positions: [
      {
        id: "forescribe-frontend-intern",
        role: "Frontend Developer Intern",
        roleType: "Internship",
        roleCategory: "frontend",

        roleTagline: "Building scalable financial analytics dashboards",

        description: `
Worked on developing high-performance frontend systems for enterprise financial analytics, focusing on scalability, performance, and seamless data integration.

Contributed to building unified reporting interfaces by integrating multiple backend services into a single, cohesive platform.

### Key Highlights

- Developed 12 standardized and reusable UI modules for financial reporting systems  
- Integrated 10+ backend services into a unified internal dashboard  
- Restructured overlapping workflows across teams to improve development efficiency  
- Identified and resolved critical UI issues during validation phases  

### Impact

- Reduced release cycle time by 20% through workflow optimization  
- Improved system stability by resolving 7+ critical UI defects before production  
- Enhanced data accessibility and reporting efficiency for enterprise users  

### Approach

Focused on building modular UI systems, optimizing data flow, and ensuring reliability in production-ready applications through structured validation and clean component design.
        `,

        startDate: "Nov 2025",
        endDate: "Dec 2025",
        duration: "2 months",

        location: "Remote",
        employmentMode: "Remote",

        current: false,

        techStack: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "React Query",
          "REST APIs",
        ],

        highlights: [
          "Developed 12 reusable UI modules for enterprise reporting systems",
          "Integrated 10+ backend services into a unified dashboard",
          "Improved component reusability across projects",
        ],

        achievements: [
          "Reduced release cycle time by 20%",
          "Resolved 15+ critical UI issues before production release",
        ],
      },
    ],
  },

  {
    id: "agile-support",
    companyName: "Agile Support",
    companyLogo: "/experience/agileLogo.png",

    industry: "Software Services",
    companySize: "Mid-size",
    location: "India",

    isCurrentEmployer: false,

    summary:
      "A service-based company providing full-stack development, product engineering, and growth solutions for startups and businesses.",

    positions: [
      {
        id: "agile-web-intern",
        role: "Web Developer Intern",
        roleType: "Internship",
        roleCategory: "fullstack",

        roleTagline: "Full-stack development with performance optimization",

        description: `
Worked on building and maintaining full-stack web applications using the MERN stack, focusing on scalability, performance, and clean architecture.

Collaborated with cross-functional teams to deliver production-ready applications, ensuring stable deployments and efficient development workflows.

### Key Highlights

- Built 6 independent full-stack applications across isolated deployment pipelines  
- Improved application responsiveness through frontend and backend optimizations  
- Participated in structured development cycles with consistent peer reviews  
- Ensured stability across staging and production environments  

### Impact

- Reduced average page load time by 30%, improving user experience  
- Maintained zero rollback incidents across production deployments  
- Improved sprint planning consistency across 14 development cycles  

### Approach

Focused on writing maintainable code, optimizing performance, and ensuring reliable deployments while collaborating effectively within engineering teams.
        `,

        startDate: "Jan 2023",
        endDate: "Jan 2024",
        duration: "1 year",

        location: "India",
        employmentMode: "Onsite",

        current: false,

        techStack: [
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "Tailwind CSS",
          "Figma",
        ],

        highlights: [
          "Built 6 full-stack applications across independent deployments",
          "Improved page load performance using optimization techniques",
          "Maintained stable production releases with zero rollbacks",
        ],

        achievements: [
          "Improved page load performance by 30%",
          "Maintained 100% deployment success rate",
          "Enhanced sprint planning across 14 development cycles",
        ],
      },
    ],
  },
];

export default EXPERIENCE;