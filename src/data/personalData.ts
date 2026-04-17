import { PersonalData } from "@/types";
import profile from "@/assets/Image.jpg";

export const personalData: PersonalData = {
  name: "Kshitij Singh",
  designation: "Software Developer",
  avatar: profile,
  namePronunciation: "/kshitij.mp3",
  namePronunciationUrl: "/kshitij.mp3",
  flipSentences: [
    "Building full-stack web applications.",
    "Transforming ideas into digital reality.",
    "Passionate about UI/UX.",
  ],
  contact: {
    phone: "+91 91799 09425",
    email: "ind.kshitijsingh@gmail.com",
    location: "Bhopal, Madhya Pradesh, India",
  },

  about:
    "Passionate software developer with a strong interest in building scalable web applications and AI-driven solutions. Experienced in modern web technologies and continuously exploring new tools to enhance development efficiency and product quality.",

  socials: {
    github: "https://github.com/indkshitij",
    linkedin: "https://linkedin.com/in/kshitijsingh07",
    instagram: "https://instagram.com/yourusername",
    leetcode: "https://leetcode.com/u/1kshitij",
    linktree: "https://linktr.ee/yourusername",
  },
};