import { StaticImageData } from "next/image";
import { ReactNode, ComponentType } from "react";
import type { RoleCategory } from "@/lib/role-icons";

export type Skill = {
  name: string;
  logo: string;
  website: string;
  description: string;

  tags: string[]; 
};
export type SocialLink = {
  icon: string | StaticImageData;
  title: string;
  subtitle?: string;

  href: string;
};

export type ExperienceType =
  | "Internship"
  | "Full-time"
  | "Part-time"
  | "Freelance"
  | "Contract"
  | "Apprenticeship"
  | "Trainee"
  | "Volunteer"
  | "Open Source"
  | "Certification"
  | "Course"
  | "Education"
  | "Research"
  | "Leadership"
  | "Mentorship";

export interface ExperiencePosition {
  id: string;

  role: string;
  roleType: ExperienceType;
  roleCategory: RoleCategory;

  roleTagline?: string;
  description?: string;

  startDate: string;
  endDate: string;
  duration?: string; 

  current?: boolean;

  location?: string;
  employmentMode?: "Remote" | "Onsite" | "Hybrid";

  techStack?: string[];
  highlights?: string[];

  achievements?: string[];
}

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

export type ProjectMedia = {
  type: "image" | "video";
  url: string;
  alt?: string;
  thumbnail?: string;
};

export type Project = {
  title: string;
  tagline?: string;

  shortDescription?: string;

  period?: {
    start: string;
    end?: string;
  };
  duration?: string;

  icon?: any;
  logo?: string;

  techUsed?: string[];

  github?: string;
  live?: string;
  link?: string;

  isExpanded?: boolean;

  description: string;

  media?: ProjectMedia[];
};

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

  //  Navigation
  navigation?: NavLink[];

  //  Socials
  socials: SocialLink[];

  //  Skills (Better structured)
  skills?: Skill[];

  //  Projects
  projects?: Project[];

  //  Experience
  experience?: Experience[];

  //  Education
  education?: Experience[];

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
