import React from "react";
import { cn } from "@/lib/utils";

type OpenToOpportunityProps = {
  available?: boolean;
  label?: string;
  className?: string;
};

const OpenToOpportunity = ({
  available = true,
  label = "Open to opportunities",
  className,
}: OpenToOpportunityProps) => {
  if (!available) return null;

  return (
    <div
      className={cn(
        "group inline-flex items-center gap-2",
        "px-2.5 py-1 rounded-sm",

        // typography
        "text-xs font-mono text-muted-foreground",

        // base
        "bg-muted/40 border border-border/60 backdrop-blur-sm",
        "shadow-[0_1px_0_rgba(0,0,0,0.04)]",

        "transition-all duration-200 ease-out",
        "hover:bg-muted/70 hover:border-border hover:shadow-md hover:-translate-y-px",
        "active:scale-[0.97]",
        "cursor-auto select-none",

        className
      )}
    >
      {/* Status Dot */}
      <span className="relative flex h-2 w-2">
        {/* glow (idle) */}
        <span className="absolute inset-0 rounded-full bg-emerald-400/30 blur-[2px] transition-all duration-200 group-hover:bg-emerald-400/60 group-hover:blur-[3px]" />

        {/* main dot */}
        <span className="relative h-2 w-2 rounded-full bg-emerald-500 transition-transform duration-200 group-hover:scale-110" />
      </span>

      {/* Text */}
      <span className="whitespace-nowrap transition-colors duration-200 group-hover:text-foreground">
        {label}
      </span>
    </div>
  );
};

export default OpenToOpportunity;