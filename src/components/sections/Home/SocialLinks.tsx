import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SocialLink } from "@/types";
import SOCIAL_LINKS  from "@/data/SocialLinks";
import PageWrapper from "@/components/layout/PageWrapper";

export function SocialLinks() {
  return (
    <>
      {/* Grid */}
      <div className="border-y border-line">
        <PageWrapper>
          <div className="grid grid-cols-2 md:grid-cols-3 mx-1">
            {SOCIAL_LINKS.slice(0, 3).map((link, index) => (
              <SocialLinkItem key={index} {...link} />
            ))}
          </div>
        </PageWrapper>
      </div>
      <div className="mt-2 border-t border-line">
        <PageWrapper>
          <div className="grid grid-cols-2 md:grid-cols-3 mx-1 ">
            {SOCIAL_LINKS.slice(3, 6).map((link, index) => (
              <SocialLinkItem key={index} {...link} />
            ))}
          </div>
        </PageWrapper>
      </div>
    </>
  );
}

export function SocialLinkItem({ icon, title, href }: SocialLink) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center gap-3 p-4 border-x border-line mx-1",
        "transition-all duration-200 ease-out",
        "hover:bg-muted/50 hover:border-line",
        "active:scale-[0.98]",
      )}
    >
      {/* Icon */}
      <div className="relative size-8 shrink-0 dark:bg-white/80 rounded-md">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="rounded-md select-none"
          quality={100}
        />

        <div className="absolute inset-0 rounded-md ring-1 ring-black/10 dark:ring-white/15 pointer-events-none" />
      </div>

      {/* Title */}
      <h3 className="flex-1 text-sm font-medium">{title}</h3>

      {/* Arrow */}
      <ArrowUpRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  );
}
