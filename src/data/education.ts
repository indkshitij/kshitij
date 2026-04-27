import type { Experience } from "@/types/experience-type";

const EDUCATION: Experience[] = [
  // START COLLEGE
  {
    id: "rgpv",
    companyName: "School of Information Technology, RGPV",
    isCurrentEmployer: true,

    positions: [
      {
        id: "btech-cse-ai",
        role: "Bachelor of Technology - Computer Science Engineering (AI & ML)",
        roleType: "Full-time",
        roleCategory: "education",

        description: `
Pursuing a Bachelor’s degree in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning, focused on building scalable systems and applying intelligent solutions to real-world problems.

The program includes practical exposure to Machine Learning, Natural Language Processing, and Reinforcement Learning, along with hands-on development through projects and system design.

### Key Highlights

- Worked on AI/ML concepts including supervised learning, NLP, and reinforcement learning  
- Built full-stack applications integrating modern frameworks and APIs  
- Strengthened problem-solving ability through consistent Data Structures and Algorithms practice  
- Applied concepts through real-world projects and collaborative development  

### Approach

Focused on combining strong technical fundamentals with practical implementation, emphasizing clean architecture, performance optimization, and scalable system design.

Actively developing leadership, communication, and teamwork skills through group projects and technical collaboration.
      `,

        startDate: "Nov 2022",
        endDate: "Jun 2026",
        duration: "",

        techStack: [
          // AI / Machine Learning
          "Artificial Intelligence (AI)",
          "Machine Learning",
          "Natural Language Processing",
          "Reinforcement Learning",
          "TensorFlow",
          "NumPy",
          "Pandas",

          // Programming Languages
          "Python",
          "JavaScript",
          "C++",

          // Frontend Development
          "React.js",
          "Next.js",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Bootstrap",

          // Backend Development
          "Node.js",
          "Express.js",

          // Databases
          "MongoDB",
          "SQL",

          // Tools & DevOps
          "Git",
          "GitHub",
          "Postman API",
          "Docker",
          "Azure",

          // UI/UX & Design
          "Figma",
          "UI/UX Design",
          "Wireframing",
          // "Problem Solving",
          // "Object-Oriented Programming",
          // "Front-End Development",
          // "Communication",
          // "Leadership",
          // "Teamwork",
        ],

        highlights: [
          "Applied AI/ML concepts including NLP and reinforcement learning in practical scenarios",
          "Built scalable full-stack applications using modern technologies",
          "Developed strong problem-solving and system design skills",
          "Strengthened collaboration and leadership through team-based projects",
        ],
      },
    ],
  },
  //END COLLEGE
  // START SCHOOL
  {
    id: "bbs-school",
    companyName: "B.B.S. Memorial Higher Secondary School",
    isCurrentEmployer: false,

    positions: [
      {
        id: "intermediate-pcm",
        role: "Higher Secondary Education (PCM)",
        roleType: "Full-time",
        roleCategory: "education",

        description: `
Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics, building a strong analytical and logical foundation.

Actively participated in sports and school events, taking initiative in organizing activities and contributing to team coordination and execution.

### Key Highlights

- Developed strong analytical thinking and quantitative problem-solving skills  
- Participated in sports and extracurricular activities  
- Took leadership roles in organizing school events  
- Built communication and teamwork skills through collaborative participation  

### Approach

Focused on discipline, consistency, and teamwork, while developing leadership and communication skills through active involvement in academics and extracurricular activities.
      `,

        startDate: "Mar 2021",
        endDate: "Mar 2022",
        duration: "",

        techStack: [
          "Mathematics",
          "Communication",
          "Leadership",
          "Team Leadership",
          "Teamwork",
          "English",
          "Event Management",
        ],

        highlights: [
          "Achieved 87% in board examinations",
          "Demonstrated leadership in school-level events",
          "Actively participated in sports and team activities",
          "Built strong communication and teamwork abilities",
        ],
      },
    ],
  },
  // END SCHOOL
];

export default EDUCATION;
