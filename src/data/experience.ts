import type { Experience } from "@/types";

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
      "A fintech startup focused on building scalable financial analytics dashboards for enterprise clients.",

    positions: [
      {
        id: "forescribe-frontend-intern",
        role: "Frontend Developer Intern",
        roleType: "Internship",
        roleCategory: "frontend",

        roleTagline: "Building scalable financial dashboards",
        description:
          "Worked on developing high-performance UI systems and integrating multiple backend services into a unified dashboard.",

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
          "Resolved 9 critical UI issues before production release",
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
      "A service-based company delivering full-stack web solutions with a focus on performance and scalability.",

    positions: [
      {
        id: "agile-web-intern",
        role: "Web Developer Intern",
        roleType: "Internship",
        roleCategory: "fullstack",

        roleTagline: "Full-stack development with performance optimization",
        description:
          "Built and optimized full-stack applications while ensuring stable deployments and efficient development cycles.",

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
// import { Experience } from "@/types";

// const experiences: Experience[] = [
//   {
//     company: "Forescribe",
//     role: "Frontend Developer Intern",
//     roleTagline: "Building scalable financial dashboards",

//     type: "Internship", // Internship | Full-time | Freelance
//     location: "Remote",

//     startDate: "Nov 2025",
//     endDate: "Dec 2025",
//     duration: "2 months",

//     current: false,

//     techStack: [
//       "Next.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "React Query",
//       "REST APIs",
//     ],

//     points: [
//       "Developed 12 reusable UI modules for enterprise financial reporting systems",
//       "Integrated 10+ backend services into a unified dashboard interface",
//       "Reduced release cycles by 20% by improving component reusability",
//       "Fixed 9 critical UI issues during pre-release validation",
//     ],
//   },

//   {
//     company: "Agile Support",
//     role: "Web Developer Intern",
//     roleTagline: "Full-stack development with performance optimization",

//     type: "Internship",
//     location: "India",

//     startDate: "Jan 2023",
//     endDate: "Jan 2024",
//     duration: "1 year",

//     current: false,

//     techStack: [
//       "MongoDB",
//       "Express.js",
//       "React.js",
//       "Node.js",
//       "Tailwind CSS",
//       "Figma",
//     ],

//     points: [
//       "Built 6 full-stack applications across independent deployment pipelines",
//       "Improved page load performance by 30% through optimization techniques",
//       "Maintained zero rollback incidents across production releases",
//       "Enhanced sprint planning consistency across 14 development cycles",
//     ],
//   },
// ];

// export default experiences;
