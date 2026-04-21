import React from "react";
import { cn } from "@/lib/utils";

type PageWrapperProps = {
  children: React.ReactNode;

  // styling
  className?: string;
  contentClassName?: string;

  // layout control
  maxWidth?: string;
  padding?: string;

  // borders
  showBorderX?: boolean;
  showBorderY?: boolean;

  // height control
  minHeight?: string;
  maxHeight?: string;

  // center content
  center?: boolean;
};

const PageWrapper = ({
  children,
  className,
  contentClassName,
  maxWidth = "max-w-[95%] sm:max-w-2xl md:max-w-2xl lg:max-w-3xl",
  padding = "",
  showBorderX = true,
  showBorderY = false,
  minHeight = "",
  maxHeight = "",
  center = true,
}: PageWrapperProps) => {
  return (
    <div className={`${showBorderY ? "border-y border-line" : ""}`}>
      <div
        className={cn(
          "w-full", 
          center && "mx-auto",
          maxWidth,
          showBorderX && "border-x border-line",
          minHeight,
          maxHeight,
          className,
        )}
      >
        <div className={cn("w-full", padding, contentClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
