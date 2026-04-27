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
import NAV_LINK from "@/data/web-essential";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSound } from "@/hooks/use-sound";
import { SOUNDS } from "@/lib/sounds";
import NameLogo from "@/components/atoms/name-logo";

const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      <footer className="relative border-y border-line">
        <PageWrapper>
          <>
            {/* ================= TOP ================= */}
            <div className="px-2 sm:px-5 py-5 sm:py-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              {/* LEFT */}
              <div className="flex flex-col items-start gap-1 max-w-full md:max-w-xs">
                {/* Top row: logo + name */}
                <div className="flex items-center gap-2 sm:gap-2">
                  {/* Logo */}
                  <NameLogo width={45} height={45} priority />

                  {/* Name */}
                  <p className="text-base sm:text-lg md:text-xl font-medium font-mono tracking-tight text-foreground">
                    {personalData.name}
                  </p>
                </div>

                {/* Tagline */}
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm max-w-[90%] sm:max-w-full">
                  {personalData?.tagline}
                </p>
              </div>

              {/* RIGHT: SOCIALS */}
              <div className="flex flex-col gap-3">
                <p className="text-sm tracking-wider text-muted-foreground/50 font-mono">
                  Connect
                </p>

                <div className="flex items-center gap-6">
                  {personalData?.socials?.map((s, idx) => (
                    <Tooltip key={idx}>
                      <TooltipTrigger asChild>
                        <a
                          href={s.href as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" group relative text-muted-foreground/70 hover:text-foreground transition-all duration-300 "
                        >
                          <span className=" absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition bg-foreground/10" />

                          <Icon
                            name={getIconName(s.title)}
                            className="size-[18px] relative z-10 group-hover:scale-110 transition"
                          />
                        </a>
                      </TooltipTrigger>

                      <TooltipContent>{s.title}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= NAV + TOP BUTTON ================= */}
            <div className="px-2 sm:px-5 py-5 sm:py-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between  border-t border-line py-5">
              {/* NAVIGATION */}
              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-wider text-muted-foreground/50 font-mono">
                  Navigation
                </p>

                <div className="flex flex-wrap items-center gap-2 sm:gap-5">
                  {NAV_LINK.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <div className="w-30 sm:w-fit" key={link.name}>
                        <Link
                          href={link.href}
                          className={` relative px-1 text-sm tracking-tight transition-all duration-300 ${isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"} after:absolute after:left-0 after:-bottom-1.5 after:h-[1px] after:bg-foreground/80 after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
                        >
                          {link.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* BACK TO TOP  */}
              <BackToTop />
            </div>
          </>
        </PageWrapper>
        {/* ================= BOTTOM ================= */}
        <div className="border-t border-line">
          <PageWrapper>
            <div className="px-2 sm:px-5 py-5 sm:py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ">
              <p className="text-xs text-muted-foreground/70">
                © {new Date().getFullYear()} {personalData.name}
              </p>

              <p className="text-xs text-muted-foreground/50">
                Crafting digital experiences with precision
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
      <div className="relative h-68 w-full overflow-hidden mt-5">
        <p
          className={cn(
            "pointer-events-none select-none text-center font-black",
            "text-[90px] sm:text-[200px] md:text-[240px] lg:text-[320px] xl:text-[360px]",
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

const BackToTop = () => {
  const playSwipe = useSound(SOUNDS?.swipe);
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => {
            playSwipe();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Back to top"
          className="group relative flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-muted-foreground hover:text-foreground transition-all duration-300 ease-out hover:scale-110 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-foreground/20 cursor-pointer"
        >
          {/* subtle glow */}
          <span className="absolute inset-0 rounded-full opacity-0 blur-md transition duration-300 bg-black/10 dark:bg-white/10 group-hover:opacity-100" />

          <ArrowUp
            size={16}
            className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </button>
      </TooltipTrigger>

      <TooltipContent>Back to top</TooltipContent>
    </Tooltip>
  );
};
