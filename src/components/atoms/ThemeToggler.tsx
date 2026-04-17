"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Icon from "@/lib/icons";
import clsx from "clsx";

type ThemeToggleProps = {
  showBorder?: boolean;
  showBg?: boolean;
  rounded?: "md" | "full"|"sm"|"lg";
  size?: "sm" | "md" | "lg";
};

export default function ThemeToggle({
  showBorder = false,
  showBg = false,
  rounded = "md",
  size = "sm",
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const switchTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const handleClick = () => {
    setIsPressed(true);

    if (!("startViewTransition" in document)) {
      switchTheme();
    } else {
      (document as any).startViewTransition(switchTheme);
    }

    setTimeout(() => setIsPressed(false), 150);
  };

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-11 w-11",
  };

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      aria-label="Toggle Theme"
      className={clsx(
        "relative flex items-center justify-center overflow-hidden",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "cursor-pointer",

        sizeClasses[size],
        roundedClasses[rounded],

        showBg && "bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur",

        showBorder && "border border-neutral-200/60 dark:border-neutral-800/60",

        "hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60",

        isPressed && "scale-90",

        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40",
      )}
    >
      {/* subtle inner highlight */}
      <div className="absolute inset-0 rounded-inherit bg-white/10 dark:bg-white/0 pointer-events-none" />

      {/*  Moon */}
      <span
        className={clsx(
          "absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-75",
          isPressed && "scale-90",
        )}
      >
        <Icon name="moon" />
      </span>

      {/* Sun */}
      <span
        className={clsx(
          "absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          !isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-75",
          isPressed && "scale-90",
        )}
      >
        <Icon name="sun" />
      </span>
    </button>
  );
}
