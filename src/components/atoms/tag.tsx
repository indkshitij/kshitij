import React from "react";
import { cn } from "@/lib/utils";

type TagProps = React.ComponentProps<"span"> & {
  variant?: "default" | "soft" | "outline";
};

function Tag({
  className,
  variant = "default",
  ...props
}: TagProps) {
  return (
    <span
      data-slot="tag"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 text-xs font-mono",
        "border backdrop-blur-sm select-none",

        "whitespace-nowrap",
        "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",

        "transition-all duration-200 ease-out",
        "will-change-transform",

        "cursor-pointer",
        "active:scale-[0.96]",

        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",

        variant === "default" && [
          "bg-zinc-50 text-muted-foreground",
          "border-zinc-200 shadow-sm",
          "dark:bg-zinc-900 dark:border-zinc-800",

          // hover
          "hover:bg-accent hover:text-foreground",
          "hover:border-zinc-300 dark:hover:border-zinc-700",
          "hover:shadow-md hover:-translate-y-[1px]",
        ],

        variant === "soft" && [
          "bg-muted/60 text-muted-foreground border-transparent",
          "hover:bg-muted hover:text-foreground",
        ],

        variant === "outline" && [
          "bg-transparent text-muted-foreground border-dashed",
          "hover:border-solid hover:text-foreground",
          "hover:bg-accent/40",
        ],


        className
      )}
      {...props}
    />
  );
}

export { Tag };