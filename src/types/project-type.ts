
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