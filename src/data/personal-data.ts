import { PersonalData } from "@/types";
import SOCIAL_LINKS from "@/data/social-links";
import profile from "../../public/personal/Image2.png";
import EXPERIENCE from "@/data/experience";
import NAV_LINK from "./web-essential";
import EDUCATION from "@/data/education";
import { PROJECTS } from "@/data/projects";
import SKILLS from "@/data/skills";

const email = process.env.NEXT_PUBLIC_EMAIL;
const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER;

export const personalData: PersonalData = {
  name: "Kshitij Singh",
  designation: "Full Stack Software Developer",
  avatar: profile,
  tagline: "Building scalable web apps & AI-powered solutions",
  namePronunciation: "/sounds/kshitij.mp3",
  namePronunciationUrl: "/sounds/kshitij.mp3",
  timeZone: "Asia/Kolkata",
  website: "https://kshitij-singh.vercel.app",
  gender: "male",
  pronouns: "he/him",

  flipSentences: [
    "Designing scalable full-stack applications.",
    "Engineering AI-powered digital products.",
    "Optimizing performance & user experience.",
  ],

  contact: {
    phone: phone || "unavailable",
    email: email || "unavailable",
    location: "Bhopal, Madhya Pradesh, India",
    availability: "Open to opportunities",
    isAvailable: true,
  },
about: `
Software Engineer specializing in full-stack development and applied AI, focused on building scalable, efficient, and reliable systems.

Experienced in developing end-to-end products—from system design to deployment—with strong attention to performance, maintainability, and user experience.

### Key Highlights

- Built AI-powered platforms addressing real-world problems in interview preparation, finance management, and content summarization  
- Improved system performance through optimized data flow, rendering strategies, and backend integration  
- Designed modular and scalable architectures for long-term maintainability  
- Strengthened problem-solving skills through consistent practice of Data Structures and Algorithms  

### Approach

Focused on writing clean, maintainable code and building systems that scale effectively while delivering reliable user experiences.

Interested in solving complex problems and creating impactful technology-driven solutions.
`,

  resume: {
    url: "/resume.pdf",
    fileName: "Kshitij_Singh_Resume.pdf",
    label: "Download Resume",
    openInNewTab: true,
    downloadable: true,
  },

  site: {
    url: process.env.APP_URL || "https://kshitij-singh.vercel.app",
    title: "Kshitij Singh | Full Stack Developer",
    description:
      "Portfolio of Kshitij Singh - Full Stack Developer specializing in AI-powered applications",
    keywords: [
      "Full Stack Developer",
      "Next.js",
      "React",
      "Node.js",
      "AI Developer",
    ],
    ogImage: profile,
  },

  navigation: NAV_LINK,

  socials: SOCIAL_LINKS,

  skills: SKILLS,

  projects: PROJECTS,

  experience: EXPERIENCE,

  education: EDUCATION,

  achievements: [
    "Solved 200+ DSA problems",
    "Built 10+ full-stack applications",
    "Improved performance metrics by 30%",
  ],

  certifications: [
    "Full Stack Web Development",
    "Data Structures & Algorithms",
  ],

  interests: ["AI Systems", "Scalable Backend Design", "UI/UX Engineering"],

  branding: {
    username: "indkshitij",
    githubRepo: "portfolio",
    githubUrl: "https://github.com/indkshitij",
  },

  theme: {
    light: "#ffffff",
    dark: "#09090b",
  },

  stats: {
    yearsOfExperience: 1,
    projectsCompleted: 10,
    technologies: 15,
  },

  cta: {
    primary: "Hire Me",
    secondary: "Download Resume",
    resumeUrl: "/resume.pdf",
  },

  utm: {
    source: "kshitij-portfolio",
  },
};
