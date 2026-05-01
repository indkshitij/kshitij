
import { Skill } from "@/types/skill-type";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Tag } from "@/components/atoms/tag";

export default function SkillCard({ skill }: { skill: Skill }) {
  const { resolvedTheme } = useTheme();

  const src =
    resolvedTheme === "dark"
      ? skill.darkLogo || skill.logo || skill.lightLogo || "/fallback.svg"
      : skill.lightLogo || skill.logo || skill.darkLogo || "/fallback.svg";

  return (
    <a
      href={skill.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={skill.name}
      className="group relative transition-all duration-200 hover:scale-105 active:scale-95"
    >
      <Tag
        variant="default"
        className="group transition-all duration-200 hover:scale-105 active:scale-95 px-1 py-1"
      >
        {/* Icon */}
        <div className="flex items-center justify-center gap-2">
          <Image
            src={src}
            alt={skill.name}
            width={22}
            height={22}
            unoptimized
            aria-hidden
            className="rounded-sm"
          />

          {/* Name */}
          <span className="text-xs font-mono">{skill.name}</span>
        </div>
      </Tag>
    </a>
  );
}
