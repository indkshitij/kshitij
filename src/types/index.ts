import { StaticImageData } from "next/image";
import { ReactNode,ComponentType } from "react";
import type { RoleCategory } from "@/lib/role-icons";

export interface SkillCategory {
  title: string;
  skills: string[];
}

export type SocialLink = {
  icon: string | StaticImageData;
  title: string;
  subtitle?: string;

  href: string;
};



export type ExperienceType =
  | "Internship"
  | "Full-time"
  | "Freelance"
  | "Part-Time"
  | "Contract";


export interface ExperiencePosition {
  id: string;

  role: string;
  roleType: ExperienceType;
  roleCategory: RoleCategory;

  roleTagline?: string;
  description?: string;

  startDate: string;
  endDate: string;  
  duration?: string; // optional → can be auto-calculated

  current?: boolean;

  location?: string; 
  employmentMode?: "Remote" | "Onsite" | "Hybrid"; 

  techStack?: string[];
  highlights?: string[];

  achievements?: string[];
}

/* ---------- Company ---------- */

export type CompanyLogo =
  | string
  | StaticImageData
  | ComponentType<{ className?: string }>
  | ReactNode;

export interface Experience {
  id: string;

  companyName: string;
  companyLogo?: CompanyLogo;
  companyWebsite?: string;

  industry?: string; 
  companySize?: "Startup" | "Mid-size" | "Enterprise"; 

  location?: string; 

  isCurrentEmployer?: boolean;

  positions: ExperiencePosition[];

  summary?: string; 
}
export interface Project {
  title: string;
  tech: string[];
  description: string[];
  github: string;
  live?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

export interface Job {
  title: string;
  company: string;
  website: string;
  experienceId: string;
}

export interface PersonalData {
  //  Basic
  name: string;
  avatar?: string | StaticImageData;
  designation: string;
  tagline?: string;
  namePronunciation?: string;
  namePronunciationUrl?: string;
  timeZone?: string;
  website?: string;
  gender: "male" | "female";
  pronouns: string;

  //  Hero
  flipSentences: string[];

  //  Contact
  contact: {
    phone: string;
    email: string;
    location: string;
    availability?: string;
  };

  //  About
  about: string;

  //  SEO
  site?: {
    url: string;
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string | StaticImageData;
  };

  //  Jobs
  jobs?: Job[];

  //  Navigation
  navigation?: NavLink[];

  //  Socials
  socials: SocialLink[];

  //  Skills (Better structured)
  skills?: SkillCategory[];

  //  Projects
  projects?: Project[];

  //  Experience
  experience?: Experience[];

  //  Education
  education?: Education[];

  //  Achievements
  achievements?: string[];

  //  Extras
  certifications?: string[];
  interests?: string[];

  //  Branding
  branding?: {
    username: string;
    githubRepo: string;
    githubUrl: string;
  };

  //  Theme
  theme?: {
    light: string;
    dark: string;
  };

  //  Stats
  stats?: {
    yearsOfExperience: number;
    projectsCompleted: number;
    technologies: number;
  };

  //  CTA
  cta?: {
    primary: string;
    secondary?: string;
    resumeUrl?: string;
  };

  //  Tracking
  utm?: {
    source: string;
  };
}

export interface NavLink {
  name: string;
  href: string;
  tooltip: string;
}
