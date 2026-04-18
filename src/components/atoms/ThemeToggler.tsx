"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";

import { SunMediumIcon } from "@/components/animated-icons/sun-medium";
import { MoonIcon } from "@/components/animated-icons/moon";

type ThemeToggleProps = {
  showBorder?: boolean;
  showBg?: boolean;
  rounded?: "md" | "full" | "sm" | "lg";
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
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const switchTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const handleClick = () => {
    setIsPressed(true);
    setIsSwitching(true);

    if ("startViewTransition" in document) {
      (document as any).startViewTransition(switchTheme);
    } else {
      switchTheme();
    }

    setTimeout(() => {
      setIsPressed(false);
      setIsSwitching(false);
    }, 250);
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
        "group relative flex items-center justify-center overflow-hidden",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "cursor-pointer select-none",

        sizeClasses[size],
        roundedClasses[rounded],

        showBg &&
          "bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-md",

        showBorder &&
          "border border-neutral-200/60 dark:border-neutral-800/60",

        "hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50",
        "hover:shadow-sm",

        isPressed && "scale-[0.92]",

        isSwitching && "scale-95",

        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40"
      )}
    >
      {/* subtle hover glow */}
      <span
        className={clsx(
          "absolute inset-0 rounded-inherit",
          "opacity-0 transition-opacity duration-300",
          "bg-black/5 dark:bg-white/5",
          "group-hover:opacity-100"
        )}
      />

      {/* click ripple */}
      <span
        className={clsx(
          "absolute inset-0 rounded-inherit",
          "scale-75 opacity-0",
          "bg-black/10 dark:bg-white/10",
          "transition-all duration-300",
          isPressed && "scale-100 opacity-100"
        )}
      />

      {/* Moon */}
      <span
        className={clsx(
          "absolute flex items-center justify-center",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-75"
        )}
      >
        <MoonIcon />
      </span>

      {/* Sun */}
      <span
        className={clsx(
          "absolute flex items-center justify-center",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          !isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-75"
        )}
      >
        <SunMediumIcon />
      </span>
    </button>
  );
}
