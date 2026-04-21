"use client";

import { useHotkeys } from "react-hotkeys-hook";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { META_THEME_COLORS } from "@/data/webEssential";
import { useMetaColor } from "@/hooks/use-meta-color";
import { useSound } from "@/hooks/use-sound";
import { SOUNDS } from "@/lib/sounds";

export default function Hotkeys() {
  const { resolvedTheme, setTheme } = useTheme();
  const { setMetaColor } = useMetaColor();
  const playClick = useSound(SOUNDS.themeChangeSound);

  // detect OS (for future use if needed)
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().includes("MAC"));
  }, []);

  useHotkeys(
    // change here if you want safer combo:
    // "meta+shift+d, ctrl+shift+d"
    "meta+d, ctrl+d",
    (e) => {
      e.preventDefault();

      const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

      playClick(0.2);
      setTheme(nextTheme);

      setMetaColor(
        nextTheme === "dark"
          ? META_THEME_COLORS.dark
          : META_THEME_COLORS.light
      );
    },
    { enableOnFormTags: true }
  );

  return null;
}