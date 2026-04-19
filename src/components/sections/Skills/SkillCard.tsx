import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skill } from "@/types";
import Image from "next/image";

const SkillCard = ({ skills, title }: { skills: Skill[]; title?: string }) => {
  return (
    <>
      {/* Optional Title (for filtered groups like "Frontend") */}
      {title && (
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      )}

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-2">
        {skills.map((item) => (
          <Tooltip key={item.name}>
            <TooltipTrigger asChild>
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="flex items-center justify-center size-10 rounded-md border border-line bg-muted hover:bg-accent transition hover:scale-105 active:scale-95"
              >
                <Image
                  src={item.logo}
                  alt=""
                  width={32}
                  height={32}
                  aria-hidden
                />
              </a>
            </TooltipTrigger>

            <TooltipContent>
              <div className="text-xs max-w-[200px]">
                <p className="font-medium">{item.name}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </>
  );
};

export default SkillCard;
