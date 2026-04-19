"use client";

import type { ExperiencePosition } from "@/types";
import { InfinityIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleChevronsIcon,
} from "@/components/animated-icons/collapsible-animated";

import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Markdown } from "@/components/ui/markdown";
import { Separator } from "@/components/ui/separator";
import { Tag } from "@/components/atoms/Tag";
import { Prose } from "@/components/ui/typography";

import { formatDuration } from "@/lib/date";
import { cn } from "@/lib/utils";
import { roleIconMap, getRoleCategory } from "@/lib/role-icons";
import { IntroItemIcon } from "@/components/atoms/IntroItem";


type Props = {
  position: ExperiencePosition;
  index: number;
};

export function ExperiencePositionItem({ position, index }: Props) {
  const start = position.startDate;
  const end = position.endDate;

  const isOngoing = !end || end === "Present";
  const duration = formatDuration(start, end);

  const category = position.roleCategory ?? getRoleCategory(position.role);

  const Icon = roleIconMap[category];

  
  return (
    <Collapsible
      className="relative pb-5 "
      defaultOpen={index === 0}
      disabled={!position.description}
      
    >
      <CollapsibleTrigger
        className={cn(
          "group block w-full text-left",
          "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent-muted",
          "outline-none focus-visible:before:ring-2 focus-visible:before:ring-ring/50 focus-visible:before:ring-inset",
          "data-disabled:before:content-none",
        )}
      >
        {/* Top Row */}
        <div className="relative z-1 mb-1 flex items-center gap-3 sm:gap-4">
          {/* Icon */}
          <IntroItemIcon>{Icon && <Icon />}</IntroItemIcon>

          {/* Role */}
          <h4 className="flex-1 font-medium text-balance">{position.role}</h4>

          {/* Chevron */}
          <div className="shrink-0 text-muted-foreground group-data-disabled:hidden [&_svg]:size-4">
            <CollapsibleChevronsIcon duration={0.15} />
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center flex-wrap gap-2 pl-12 text-sm text-muted-foreground">
          {position.roleType && (
            <>
              <dl>
                <dt className="sr-only">Employment Type</dt>
                <dd>{position.roleType}</dd>
              </dl>

              <Separator
                orientation="vertical"
                className="data-vertical:h-4 data-vertical:self-center"
              />
            </>
          )}

          {/* Dates */}
          <dl>
            <dt className="sr-only">Employment Period</dt>
            <dd className="flex items-center gap-0.5 tabular-nums">
              <span>{start}</span>
              <span className="font-mono"> {" - "} </span>

              {isOngoing ? (
                <InfinityIcon
                  className="size-4.5 translate-y-[0.5px]"
                  aria-label="Present"
                />
              ) : (
                <span>{end}</span>
              )}
            </dd>
          </dl>

          {/* Duration */}
          {duration && (
            <>
              <Separator
                orientation="vertical"
                className="data-vertical:h-4 data-vertical:self-center"
              />
              <dl>
                <dt className="sr-only">Duration</dt>
                <dd className="tabular-nums">{duration}</dd>
              </dl>
            </>
          )}
        </div>
      </CollapsibleTrigger>

      {/* Description */}
      <CollapsibleContent className="overflow-hidden">
        {position.description && (
          <Prose className="pt-4 pl-12">
            <Markdown>{position.description}</Markdown>
          </Prose>
        )}
      </CollapsibleContent>

      {/* Tech Stack */}
      {Array.isArray(position.techStack) && position.techStack.length > 0 && (
        <ul className="flex flex-wrap gap-1.5 pt-4 pl-12">
          {position.techStack.map((skill, i) => (
            <li key={i} className="flex">
              <Tag>{skill}</Tag>
            </li>
          ))}
        </ul>
      )}
    </Collapsible>
  );
}
