"use client";

import { useHotkeys } from "react-hotkeys-hook";
import { useTheme } from "next-themes";

import { META_THEME_COLORS } from "@/data/webEssential";
import { useMetaColor } from "@/hooks/use-meta-color";
import { useSound } from "@/hooks/use-sound";
import { SOUNDS } from "@/lib/sounds";

export default function Hotkeys() {
  const { resolvedTheme, setTheme } = useTheme();
  const { setMetaColor } = useMetaColor();
  const playClick = useSound(SOUNDS.themeChangeSound);

  useHotkeys("d", (e) => {
    e.preventDefault();

    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    playClick(0.2);
    setTheme(nextTheme);

    setMetaColor(
      nextTheme === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light,
    );
  });

  return null;
}
