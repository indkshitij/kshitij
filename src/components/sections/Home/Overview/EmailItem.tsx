"use client";

import { MailIcon } from "lucide-react";
import { toast } from "sonner";

import { CopyButton } from "@/components/atoms/CopyButton";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "../../../atoms/IntroItem";

type EmailItemProps = {
  email: string;
};

export function EmailItem({ email }: EmailItemProps) {
  return (
    <IntroItem className="group">
      {/* Icon */}
      <IntroItemIcon>
        <MailIcon  />
      </IntroItemIcon>

      {/* Email link */}
      <IntroItemContent>
        <IntroItemLink
          href={`mailto:${email}`}
          aria-label={`Send email to ${email}`}
          className="font-mono text-xs sm:text-sm"
        >
          {email}
        </IntroItemLink>
      </IntroItemContent>

      {/* Copy button */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyButton
          variant="ghost"
          size="icon-sm"
          text={email}
          className="text-muted-foreground"
          onCopySuccess={() => toast.success("Email copied")}
          onCopyError={() => toast.error("Failed to copy")}
        />
      </div>
    </IntroItem>
  );
}
