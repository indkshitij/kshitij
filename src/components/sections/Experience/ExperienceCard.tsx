"use client";

import Image from "next/image";
import type { Experience } from "@/types";
import { ExperiencePositionItem } from "./ExperiencePositionItem";
import PageWrapper from "@/components/layout/PageWrapper";

type Props = {
  experience: Experience;
  index: number;
};

const ExperienceCard = ({ experience, index }: Props) => {
  return (
    <PageWrapper>
      {" "}
      <div
        id={`experience-${experience.id}`}
        className="px-5 scroll-mt-14 space-y-4 py-4 border-b border-line"
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex size-6 shrink-0 items-center justify-center select-none">
            {experience.companyLogo ? (
              typeof experience.companyLogo === "string" ||
              (typeof experience.companyLogo === "object" &&
                "src" in experience.companyLogo) ? (
                <Image
                  src={experience.companyLogo}
                  alt={`${experience.companyName} logo`}
                  width={24}
                  height={24}
                  className="rounded-full"
                  unoptimized
                />
              ) : typeof experience.companyLogo === "function" ? (
                (() => {
                  const Icon = experience.companyLogo;
                  return <Icon className="size-4 text-muted-foreground" />;
                })()
              ) : (
                experience.companyLogo
              )
            ) : (
              <span className="flex size-2 rounded-full bg-muted-foreground/40" />
            )}
          </div>

          <h3 className="text-lg leading-snug font-semibold">
            {experience.companyWebsite ? (
              <a
                className="underline-offset-4 hover:underline"
                href={experience.companyWebsite}
                target="_blank"
                rel="noopener"
              >
                {experience.companyName}
              </a>
            ) : (
              experience.companyName
            )}
          </h3>

          {experience.isCurrentEmployer && (
            <span
              className="relative flex items-center justify-center"
              aria-label="Current Employer"
            >
              <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-info" />
            </span>
          )}
        </div>

        {/* Timeline positions */}
        <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
          {experience.positions.map((position, i) => (
            <ExperiencePositionItem
              key={position.id}
              position={position}
              index={i}
            />
          ))}
        </div>
      </div>{" "}
    </PageWrapper>
  );
};

export default ExperienceCard;