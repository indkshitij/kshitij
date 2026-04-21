import {StaticImageData, } from "next/image";
import { ReactNode, ComponentType } from "react";
import { RoleCategory } from "@/lib/role-icons";

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