"use client";

import PageWrapper from "@/components/layout/page-wrapper";
import { personalData } from "@/data/personal-data";
import Icon, { getIconName } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ResumeButton from "../atoms/resume-button";
import BackToTop from "@/components/atoms/back-to-top";

const Footer = () => {
  return (
    <>
      <footer className="relative border-y border-line">
        {/* subtle background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />

        <PageWrapper>
          <div className="px-2 sm:px-5 py-16 sm:py-20 flex flex-col items-center text-center gap-12">
            {/* NAME + TAGLINE */}
            <div className="flex flex-col items-center gap-4 max-w-md">
              <p className="text-2xl sm:text-3xl font-mono tracking-tight text-foreground">
                {personalData.name}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {personalData.tagline}
              </p>
            </div>

            {/* SOCIALS (improved) */}
            <div className="flex items-center gap-4">
              {personalData.socials.map((s, idx) => (
                <Tooltip key={idx}>
                  <TooltipTrigger asChild>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center size-10 rounded-lg border-[1.5px] border-border/60 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:border-foreground/30 hover:bg-muted/50 hover:translate-y-px hover:shadow-md cursor-pointer"
                    >
                      {/* glow */}
                      <span className="absolute inset-0 rounded-lg opacity-0 blur-md transition duration-300 bg-foreground/10 group-hover:opacity-100" />

                      <Icon
                        name={getIconName(s.title)}
                        className="size-5 relative z-10 text-muted-foreground/70 group-hover:text-foreground transition-all duration-200 group-hover:scale-110"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{s.title}</TooltipContent>
                </Tooltip>
              ))}
            </div>

            {/* CTA BLOCK */}
            <div className="flex flex-col items-center gap-4">
              {/* Primary CTA */}
              <ResumeButton />

              {/* BackToTop (clean + subtle) */}
              <BackToTop showTooltip={false}>
                <div className="flex items-center gap-1 text-xs text-muted-foreground/60 hover:text-foreground transition">
                  <span>Back to top</span>
                  <span className="translate-y-[1px]">↑</span>
                </div>
              </BackToTop>
            </div>
          </div>
        </PageWrapper>

        {/* BOTTOM */}
        <div className="border-t border-line">
          <PageWrapper>
            <div className="px-2 sm:px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
              <p className="text-xs text-muted-foreground/70">
                © {new Date().getFullYear()} {personalData.name}
              </p>

              <p className="text-xs text-muted-foreground/50">
                Crafted with intention ✦
              </p>
            </div>
          </PageWrapper>
        </div>
      </footer>
      <BigGradientText text="kshitij" />
    </>
  );
};

export default Footer;


const BigGradientText = ({ text }: { text: string }) => {
  return (
    <>
      {/* ================= BIG TEXT ================= */}
      <div className="relative h-20 sm:h-35  md:h-45 lg:h-64 w-full overflow-hidden mt-5 ">
        <p
          className={cn(
            "pointer-events-none select-none text-center font-black",
            "text-[90px] sm:text-[200px] md:text-[240px] lg:text-[280px] xl:text-[300px]",
            "leading-none tracking-tight",
            "bg-gradient-to-b from-foreground/15 via-foreground/10 to-transparent",
            "dark:from-white/15 dark:via-white/10",
            "bg-clip-text text-transparent",
            "[mask-image:linear-gradient(to_bottom,black,transparent)]",
            "absolute top-0 left-1/2 -translate-x-1/2",
          )}
        >
          {text}
        </p>
      </div>
    </>
  );
};
