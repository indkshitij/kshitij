"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/personalData";
import Icon from "@/lib/icons";

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold"
      >
        Kshitij Singh
      </motion.h1>

      <p className="mt-4 text-gray-500">
        Full Stack Developer | AI & ML Enthusiast
      </p>

      <p className="mt-2 text-sm">
        +91 91799 09425 • ind.kshitijsingh@gmail.com • Bhopal, MP
      </p>

      <div className="flex justify-center gap-6 mt-6">
        <a href={personalData.socials.github} target="_blank" rel="noopener noreferrer">
          <Icon name="github" />
        </a>
        <a href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer">
          <Icon name="linkedin" />
        </a>
      </div>
    </section>
  );
}