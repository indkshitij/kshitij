import { BoxIcon, InfinityIcon, LinkIcon } from "lucide-react";
import Image from "next/image";

import {
  Collapsible,
  CollapsibleChevronsIcon,
} from "@/components/animated-icons/collapsible-animated";
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Markdown } from "@/components/ui/markdown";
import { Tag } from "@/components/atoms/Tag";
import { Prose } from "@/components/ui/typography";
import GithubIcon from "@/assets/socialIcon/github.png";
import LiveIcon from "@/assets/webEssential/link.png";
import { Project } from "@/types/index";
import { IntroItem, IntroItemIcon } from "@/components/atoms/IntroItem";

export function ProjectCard({
  className,
  project,
  
}: {
  className?: string;
  project: Project;
  
}) {
  const start = project.period?.start;
  const end = project.period?.end;

  const isOngoing = !!start && !end;
  const isSinglePeriod = !!start && start === end;

  const techUsed = project.techUsed;
  const links = [
    {
      href: project.github,
      icon: GithubIcon,
      label: "Open GitHub Repository",
    },
    {
      href: project.live || project.link,
      icon: LiveIcon,
      label: "Open Live Project",
    },
  ].filter((item) => item.href);
  return (
    <Collapsible className={className} defaultOpen={project.isExpanded}>
      <div className="flex items-center hover:bg-accent-muted border-b border-line ">
        <div className="px-5 relative">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
              width={32}
              height={32}
              className="flex shrink-0 select-none"
              unoptimized
              aria-hidden
            />
          ) : (
            <IntroItemIcon>
              <BoxIcon  />
            </IntroItemIcon>
          )}
        </div>

        <div className="flex-1 border-l border-line">
          <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left">
            <div className="flex-1">
              <h3 className="mb-1 leading-snug font-medium text-balance">
                {project.title}
              </h3>

              <dl className="text-sm text-muted-foreground">
                <dt className="sr-only">Period</dt>
                {start && (
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    {!isSinglePeriod && (
                      <>
                        <span className="font-mono">—</span>
                        {isOngoing ? (
                          <InfinityIcon
                            className="size-4.5 translate-y-[0.5px]"
                            aria-label="Present"
                          />
                        ) : (
                          <span>{end}</span>
                        )}
                      </>
                    )}
                  </dd>
                )}
              </dl>
            </div>

            {links.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                  >
                    <Image
                      className="rounded-md select-none corner-squircle dark:bg-muted-foreground"
                      src={item.icon}
                      alt="" // decorative
                      width={24}
                      height={24}
                      unoptimized
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-black/10 ring-inset dark:ring-white/15 corner-squircle" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}

            <div className="ml-5 shrink-0 text-muted-foreground [&_svg]:size-4">
              <CollapsibleChevronsIcon duration={0.15} />
            </div>
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-line p-4">
          {project.description && (
            <Prose>
              <Markdown>{project.description}</Markdown>
            </Prose>
          )}

          {techUsed?.length ? (
            <ul className="flex flex-wrap gap-1.5">
              {techUsed.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
