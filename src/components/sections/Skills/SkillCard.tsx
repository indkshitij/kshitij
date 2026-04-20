import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skill } from "@/types";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function SkillCard({ skill }: { skill: Skill }) {
  const { resolvedTheme } = useTheme();
  const baseClass = "rounded-md select-none corner-squircle";

  const src =
    resolvedTheme === "dark"
      ? skill.darkLogo || skill.logo || skill.lightLogo || "/fallback.svg"
      : skill.lightLogo || skill.logo || skill.darkLogo || "/fallback.svg";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={skill.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={skill.name}
          className="group relative transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Image
            src={src}
            alt={skill.name}
            width={38}
            height={38}
            unoptimized
            aria-hidden
            className={`${baseClass}`}
          />
        </a>
      </TooltipTrigger>

      <TooltipContent>
        <p className="font-medium text-sm">{skill.name}</p>
      </TooltipContent>
    </Tooltip>
  );
}
