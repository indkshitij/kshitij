import { StaticImageData } from "next/image";
import { Experience } from "@/types/experience-type";
import { SocialLink } from "@/types/social-link-type";
import { Skill } from "@/types/skill-type";
import { Project } from "@/types/project-type";
import { NavLink } from "@/types/nav-link-type";

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
