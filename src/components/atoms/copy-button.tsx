"use client";

import { CheckIcon, CircleXIcon, CopyIcon } from "lucide-react";
import type { HTMLMotionProps, Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import type { CopyState } from "@/hooks/use-copy-to-clipboard";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { useSound } from "@/hooks/use-sound";
import { SOUNDS } from "@/lib/sounds";


// Animation variants
const iconVariants: Variants = {
  initial: { opacity: 0, scale: 0.8, y: 4 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: -4 },
};

const iconMotionProps: HTMLMotionProps<"span"> = {
  variants: iconVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: { duration: 0.2, ease: "easeOut" },
};

type CopyStateIconProps = {
  state: CopyState;
  idleIcon?: React.ReactNode;
  doneIcon?: React.ReactNode;
  errorIcon?: React.ReactNode;
};

export function CopyStateIcon({
  state,
  idleIcon,
  doneIcon,
  errorIcon,
}: CopyStateIconProps) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {state === "idle" && (
        <motion.span key="idle" {...iconMotionProps}>
          {idleIcon ?? <CopyIcon className="size-4" />}
        </motion.span>
      )}

      {state === "done" && (
        <motion.span key="done" {...iconMotionProps}>
          {doneIcon ?? (
            <CheckIcon className="size-4 text-accent-foreground" strokeWidth={3} />
          )}
        </motion.span>
      )}

      {state === "error" && (
        <motion.span key="error" {...iconMotionProps}>
          {errorIcon ?? <CircleXIcon className="size-4 text-red-500" />}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

type CopyButtonProps = ComponentProps<typeof Button> & {
  text: string | (() => string);
  onCopySuccess?: (text: string) => void;
  onCopyError?: (error: Error) => void;
} & Pick<CopyStateIconProps, "idleIcon" | "doneIcon" | "errorIcon">;

export function CopyButton({
  size = "icon",
  text,
  idleIcon,
  doneIcon,
  errorIcon,
  onClick,
  onCopySuccess,
  onCopyError,
  className = "",
  children,
  ...props
}: CopyButtonProps) {
  const { state, copy } = useCopyToClipboard({
    onCopySuccess,
    onCopyError,
  });
  const playBlip = useSound(SOUNDS.blip);

  return (
    <Button
      size={size}
      onClick={(e: any) => {
        playBlip();
        copy(text);
        onClick?.(e);
      }}
      aria-label="Copy"
      className={`
        relative
        flex items-center gap-2
        rounded-md
        transition-all duration-200
        hover:bg-gray-200
        active:scale-95
        focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer
        ${className}
      `}
      {...props}
    >
      {/* Icon */}
      <CopyStateIcon
        state={state}
        idleIcon={idleIcon}
        doneIcon={doneIcon}
        errorIcon={errorIcon}
      />

      {/* Optional text */}
      {children && <span className="text-sm font-medium">{children}</span>}

      {/*  subtle glow on success */}
      {state === "done" && (
        <span className="absolute inset-0 rounded-md bg-accent-muted animate-pulse" />
      )}
    </Button>
  );
}
