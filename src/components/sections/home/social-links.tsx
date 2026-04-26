"use client";

import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SocialLink } from "@/types/social-link-type";
import PageWrapper from "@/components/layout/page-wrapper";
import SOCIAL_LINKS from "@/data/social-links";
import { Panel } from "@/components/ui/panel";

export function SocialLinks() {
  return (
    <PageWrapper showBorderX={false} showBorderY={false}>
      <Panel className="before:content-none after:content-none ">
        <h2 className="sr-only">Social Links</h2>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-2 gap-2 md:grid-cols-3">
            <div className="border-r border-line" />
            <div className="border-l border-line md:border-x" />
            <div className="border-l border-line max-md:hidden" />
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {SOCIAL_LINKS.map((link, index) => {
              return <SocialLinkItem key={index} {...link} />;
            })}
          </div>
        </div>
      </Panel>
    </PageWrapper>
  );
}

export function SocialLinkItem({ icon, title, href }: SocialLink) {
  return (
    <a
      className={cn(
        "group not-visited:flex cursor-pointer items-center gap-4 p-4 pr-2 transition-[background-color] ease-out hover:bg-accent-muted",
        "max-md:nth-[2n+1]:screen-line-top max-md:nth-[2n+1]:screen-line-bottom",
        "md:nth-[3n+1]:screen-line-top md:nth-[3n+1]:screen-line-bottom",
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
      <div className="relative size-8 shrink-0 ">
        <Image
          className="rounded-md select-none corner-squircle dark:bg-muted-foreground "
          src={icon}
          alt={title}
          width={32}
          height={32}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-black/10 ring-inset dark:ring-white/15 corner-squircle" />
      </div>

      <h3 className="flex-1 font-semibold text-sm ">{title}</h3>

      <ArrowUpRightIcon
        className={cn(
          "size-4 text-muted-foreground",
          "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          "group-hover:scale-105",
          "group-hover:text-primary",
        )}
      />
    </a>
  );
}
