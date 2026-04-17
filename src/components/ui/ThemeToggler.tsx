"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Icon from "@/lib/icons";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const switchTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const handleClick = () => {
    // same behavior as your reference
    if (!document.startViewTransition) {
      switchTheme();
    } else {
      document.startViewTransition(switchTheme);
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle Theme"
      className="
        relative flex items-center justify-center
        size-9
        rounded-md
        border border-neutral-200 dark:border-neutral-800
        bg-white dark:bg-neutral-900
        hover:bg-neutral-100 dark:hover:bg-neutral-800
        transition-colors
      "
    >
      {/* 🌙 Dark */}
      <span className="hidden [html.dark_&]:block">
        <Icon name="moon" />
      </span>

      {/* 🌞 Light */}
      <span className="hidden [html.light_&]:block">
        <Icon name="sun" />
      </span>
    </button>
  );
}