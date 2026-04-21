import type { Experience } from "@/types/experience-type";

const EDUCATION: Experience[] = [
  {
    id: "college",
    companyName: "ABC Institute of Technology",
    isCurrentEmployer: false,

    positions: [
      {
        id: "btech-cse",
        role: "Bachelor of Technology in Computer Science",
        roleType: "Full-time",
        roleCategory: "education",

        description: `
Studied core computer science subjects including data structures, algorithms, operating systems, and databases.

Focused on building strong fundamentals in software engineering and problem solving.  
Actively participated in coding contests and technical events.
        `,

        startDate: "Aug 2021",
        endDate: "May 2025",
        duration: "",

        techStack: [
          "Data Structures",
          "Algorithms",
          "Operating Systems",
          "DBMS",
          "Computer Networks",
          "OOP",
        ],

        highlights: [
          "Maintained a CGPA of 8.5/10",
          "Solved 400+ problems on coding platforms",
          "Built multiple academic and personal projects",
          "Participated in hackathons and tech events",
        ],
      },

      {
        id: "minor-ai",
        role: "Minor in Artificial Intelligence",
        roleType: "Certification",
        roleCategory: "education",

        description: `
Completed a specialization in Artificial Intelligence focusing on machine learning and data analysis.
        `,

        startDate: "Jan 2023",
        endDate: "Dec 2024",
        duration: "",

        techStack: ["Machine Learning", "Python", "Data Analysis"],

        highlights: [
          "Built ML models for classification tasks",
          "Worked on real-world datasets",
        ],
      },
    ],
  },

  {
    id: "school",
    companyName: "XYZ Senior Secondary School",

    positions: [
      {
        id: "higher-secondary",
        role: "Higher Secondary (12th Grade)",
        roleType: "Full-time",
        roleCategory: "education",

        description: `
Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.
        `,

        startDate: "Apr 2019",
        endDate: "Mar 2021",
        duration: "",

        techStack: ["Mathematics", "Physics", "Chemistry"],

        highlights: [
          "Scored 85% overall",
          "Strong analytical foundation",
        ],
      },

      {
        id: "secondary",
        role: "Secondary School (10th Grade)",
        roleType: "Full-time",
        roleCategory: "education",

        description: `
Completed secondary education with strong academic performance.
        `,

        startDate: "Apr 2017",
        endDate: "Mar 2019",
        duration: "",

        techStack: ["Science", "Mathematics"],

        highlights: [
          "Scored 88% overall",
          "Early interest in technology",
        ],
      },
    ],
  },
];

export default EDUCATION;