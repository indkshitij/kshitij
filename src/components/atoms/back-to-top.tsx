"use client";

import { useSound } from "@/hooks/use-sound";
import { SOUNDS } from "@/lib/sounds";
import { ArrowUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type BackToTopProps = {
  className?: string;
  children?: ReactNode; // ✅ custom UI
  showTooltip?: boolean;
  tooltipText?: string;
};

const BackToTop = ({
  className,
  children,
  showTooltip = true,
  tooltipText = "Back to top",
}: BackToTopProps) => {
  const playSwipe = useSound(SOUNDS?.swipe);

  const handleClick = () => {
    playSwipe();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const DefaultButton = (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className={cn(
        "group relative flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10",
        "rounded-full border border-black/10 dark:border-white/10",
        "bg-black/[0.03] dark:bg-white/[0.04]",
        "text-muted-foreground hover:text-foreground",
        "transition-all duration-300 ease-out",
        "hover:scale-110 hover:bg-black/[0.06] dark:hover:bg-white/[0.08]",
        "focus:outline-none focus:ring-2 focus:ring-foreground/20 cursor-pointer",
        className,
      )}
    >
      {/* glow */}
      <span className="absolute inset-0 rounded-full opacity-0 blur-md transition duration-300 bg-black/10 dark:bg-white/10 group-hover:opacity-100" />

      <ArrowUp
        size={16}
        className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );

  const content = children ? (
    <div onClick={handleClick} className="inline-flex cursor-pointer">
      {children}
    </div>
  ) : (
    DefaultButton
  );

  if (!showTooltip) return content;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{content}</TooltipTrigger>
      <TooltipContent>{tooltipText}</TooltipContent>
    </Tooltip>
  );
};

export default BackToTop;
