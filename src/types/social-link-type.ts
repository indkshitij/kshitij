import { StaticImageData } from "next/image";

export type SocialLink = {
  icon: string | StaticImageData;
  title: string;
  subtitle?: string;

  href: string;
};
