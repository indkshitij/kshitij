"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { personalData } from "@/data/personal-data";
import { Download, ExternalLink } from "lucide-react"; 

type ResumeButtonProps = {
  className?: string;
  buttonClassName?: string;
  iconClassName?: string;

  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";

  showIcon?: boolean;
  iconOnly?: boolean;

  icon?: React.ElementType; 
};

const sizeStyles = {
  sm: "h-8 px-2.5 text-xs",
  md: "h-9 px-3 text-sm",
  lg: "h-10 px-4 text-sm",
};

const ResumeButton = ({
  className,
  buttonClassName,
  iconClassName,

  size = "md",
  variant = "outline",

  showIcon = true,
  iconOnly = false,

  icon,
}: ResumeButtonProps) => {
  const { url, fileName, label, openInNewTab, downloadable } =
    personalData.resume;

  // fallback icons
  const DefaultIcon = downloadable ? Download : ExternalLink;

  // use custom icon if provided
  const IconComponent = icon || DefaultIcon;

  return (
    <div className={cn("inline-flex", className)}>
      <Link
        href={url}
        target={openInNewTab ? "_blank" : "_self"}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        download={downloadable ? fileName : undefined}
        aria-label={label}
      >
        <Button
          variant={variant}
          className={cn(
            "group flex items-center gap-2 transition-all duration-200",
            "hover:-translate-y-px hover:shadow-sm active:scale-[0.97] cursor-pointer",
            sizeStyles[size],
            iconOnly && "px-2",
            buttonClassName
          )}
        >
          {showIcon && (
            <IconComponent
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                "group-hover:scale-110",
                iconClassName
              )}
            />
          )}

          {!iconOnly && label}
        </Button>
      </Link>
    </div>
  );
};

export default ResumeButton;