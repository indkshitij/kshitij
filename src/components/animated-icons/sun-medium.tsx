"use client";

import type { Variants, Transition, HTMLMotionProps } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface SunMediumIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SunMediumIconProps extends HTMLMotionProps<"div"> {
  size?: number;
  autoPlay?: boolean;
}

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    scale: 1,
  },
  animate: (i: number) => ({
    opacity: [0, 1],
    scale: [0.8, 1],
    transition: {
      delay: i * 0.08,
      duration: 0.35,
      ease: "easeOut",
    },
  }),
};

const svgVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [0, 10, -10, 5, -5, 0],
  },
};

const svgTransition: Transition = {
  duration: 1,
  ease: "easeInOut",
};

const SunMediumIcon = forwardRef<SunMediumIconHandle, SunMediumIconProps>(
  (
    { onMouseEnter, onMouseLeave, className, size = 24, autoPlay, ...props },
    ref,
  ) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    // autoplay
    if (autoPlay && !isControlledRef.current) {
      controls.start("animate");
    }

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("animate");
        }
        onMouseEnter?.(e);
      },
      [controls, onMouseEnter],
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("normal");
        }
        onMouseLeave?.(e);
      },
      [controls, onMouseLeave],
    );

    return (
      <motion.div
        className={cn(
          "inline-flex items-center justify-center",
          "transition-transform duration-200",
          "hover:scale-105 active:scale-95",
          className,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.9 }}
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={svgVariants}
          animate={controls}
          transition={svgTransition}
          aria-hidden
        >
          {/* center */}
          <motion.circle
            cx="12"
            cy="12"
            r="4"
            animate={controls}
            variants={{
              normal: { scale: 1 },
              animate: { scale: [1, 1.1, 1] },
            }}
          />

          {/* rays */}
          {[
            "M12 3v1",
            "M12 20v1",
            "M3 12h1",
            "M20 12h1",
            "m18.364 5.636-.707.707",
            "m6.343 17.657-.707.707",
            "m5.636 5.636.707.707",
            "m17.657 17.657.707.707",
          ].map((d, index) => (
            <motion.path
              key={d}
              d={d}
              animate={controls}
              variants={pathVariants}
              custom={index + 1}
            />
          ))}
        </motion.svg>
      </motion.div>
    );
  },
);

SunMediumIcon.displayName = "SunMediumIcon";

export { SunMediumIcon };
