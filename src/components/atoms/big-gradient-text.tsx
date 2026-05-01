"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const BigGradientText = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  return (
    <div
      ref={ref}
      className="relative h-20 sm:h-35 md:h-45 lg:h-64 w-full overflow-hidden mt-5"
    >
      <motion.p
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 100, scale: 0.94 }
        }
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "pointer-events-none select-none text-center font-black",
          "text-[90px] sm:text-[200px] md:text-[240px] lg:text-[280px] xl:text-[300px]",
          "leading-none tracking-tight",
          "bg-gradient-to-b from-foreground/15 via-foreground/10 to-transparent",
          "dark:from-white/15 dark:via-white/10",
          "bg-clip-text text-transparent",
          "[mask-image:linear-gradient(to_bottom,black,transparent)]",
          "absolute top-0 left-1/2 -translate-x-1/2"
        )}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default BigGradientText;