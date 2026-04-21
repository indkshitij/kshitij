"use client";

import { useTheme } from "next-themes";

import { META_THEME_COLORS } from "@/data/web-essential";
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
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { useAppContext } from "@/context/app-context";

export default function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();

  const { setMetaColor } = useMetaColor();

  const playClick = useSound(SOUNDS?.themeChangeSound);

  const isMac = useAppContext();

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
          <KbdGroup>
            <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>+<Kbd>D</Kbd>
          </KbdGroup>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
