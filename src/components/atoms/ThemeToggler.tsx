"use client";

import { useTheme } from "next-themes";

import { META_THEME_COLORS } from "@/data/webEssential";
import { useMetaColor } from "@/hooks/use-meta-color";
import { useSound } from "@/hooks/use-sound";
import { SOUNDS } from "@/lib/sounds";
import { MoonIcon } from "@/components/animated-icons/moon";
import { SunMediumIcon } from "@/components/animated-icons/sun-medium";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";

export default function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();

  const { setMetaColor } = useMetaColor();

  const playClick = useSound(SOUNDS?.themeChangeSound);

  const switchTheme = (sound = true) => {
    if (sound) playClick(0.2);
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setMetaColor(
      resolvedTheme === "dark"
        ? META_THEME_COLORS.light
        : META_THEME_COLORS.dark,
    );
  };


  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="border-none cursor-pointer"
          variant="ghost"
          size="icon-sm"
          aria-label="Toggle Mode"
          onClick={() => switchTheme()}
        >
          <MoonIcon className="relative hidden after:absolute after:-inset-2 [html.dark_&]:block " />
          <SunMediumIcon className="relative hidden after:absolute after:-inset-2 [html.light_&]:block " />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="pr-2 pl-3">
        <div className="flex items-center gap-3">
          Toggle Mode
          <Kbd>D</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
