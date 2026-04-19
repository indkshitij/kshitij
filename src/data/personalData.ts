import { PersonalData } from "@/types";
import SOCIAL_LINKS from "@/data/SocialLinks";
import profile from "@/assets/Image.jpg";
import EXPERIENCE from "@/data/experience";
import NAV_LINK from "./webEssential";
import EDUCATION from "@/data/education";
import { PROJECTS } from "./projects";
import SKILLS from "./skills";

export const personalData: PersonalData = {
  name: "Kshitij Singh",
  designation: "Software Developer",
  avatar: profile,
  tagline: "Building scalable web apps & AI-powered solutions",
  namePronunciation: "/sounds/kshitij.mp3",
  namePronunciationUrl: "/sounds/kshitij.mp3",
  timeZone: "Asia/Kolkata",
  website: "https://kshitij-singh.vercel.app",
  gender: "male",
  pronouns: "he/him",

  flipSentences: [
    "Building full-stack web applications.",
    "Transforming ideas into digital reality.",
    "Passionate about UI/UX.",
  ],

  contact: {
    phone: "+919179909425",
    email: "ind.kshitijsingh@gmail.com",
    location: "Bhopal, Madhya Pradesh, India",
    availability: "Open to opportunities",
  },

  about: `
I'm a **Software Developer** focused on building scalable web applications and modern user experiences.

- 🚀 Passionate about full-stack development
- 🎯 Strong focus on clean UI & performance
- 💡 Exploring AI-powered applications

I enjoy turning ideas into real products and continuously improving my skills.

You can explore my work on [GitHub](https://github.com/indkshitij) or connect on [LinkedIn](https://linkedin.com/in/kshitijsingh07).
`,
  site: {
    url: process.env.APP_URL || "https://yourdomain.com",
    title: "Kshitij Singh | Software Developer",
    description: "Portfolio of Kshitij Singh",
    keywords: ["React", "Next.js", "Full Stack Developer"],
    ogImage: profile,
  },

  navigation: NAV_LINK,

  socials: SOCIAL_LINKS,

  skills: SKILLS,

  projects: PROJECTS,

  experience: EXPERIENCE,

  education: EDUCATION,

  achievements: ["Solved 200+ DSA problems", "Built multiple full-stack apps"],

  certifications: [
    "Full Stack Web Development",
    "Data Structures & Algorithms",
  ],

  interests: ["AI", "System Design", "UI/UX"],

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

// export const SOCIAL_LINKS: SocialLink[] = [
//   {
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//     title: "GitHub",
//     subtitle: "indkshitij",
//     href: "https://github.com/indkshitij",
//   },
//   {
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
//     title: "LinkedIn",
//     subtitle: "kshitijsingh07",
//     href: "https://linkedin.com/in/kshitijsingh07",
//   },
//   {
//     icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
//     title: "LeetCode",
//     subtitle: "1kshitij",
//     href: "https://leetcode.com/u/1kshitij",
//   },
//   {
//     icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
//     title: "Instagram",
//     subtitle: "@yourusername",
//     href: "https://instagram.com/yourusername",
//   },
//   {
//     icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png",
//     title: "X (Twitter)",
//     subtitle: "@yourusername",
//     href: "https://x.com/yourusername",
//   },
//   {
//     icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_(2017).svg",
//     title: "YouTube",
//     subtitle: "@yourchannel",
//     href: "https://www.youtube.com/@yourchannel",
//   },
// ];
