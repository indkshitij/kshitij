import { StaticImageData } from "next/image";

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  points: string[];
}

export interface Project {
  title: string;
  tech: string[];
  description: string[];
  github: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

export interface PersonalData {
  name: string;
  avatar?: string | StaticImageData;
  designation: string;
  tagline?: string;
  namePronunciation?: string;
  namePronunciationUrl?: string;
  flipSentences: string[];
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  about: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    leetcode: string;
    linktree: string;
  };
}
