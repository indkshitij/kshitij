"use client";

import { PhoneIcon } from "lucide-react";
import { toast } from "sonner";

import { CopyButton } from "@/components/atoms/copy-button";
import { formatPhoneNumber } from "@/lib/string";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "../../../atoms/intro-item";

type PhoneItemProps = {
  phoneNumber: string;
};

export function PhoneItem({ phoneNumber }: PhoneItemProps) {
  const formatted = formatPhoneNumber(phoneNumber);

  return (
    <IntroItem className="group">
      {/* Icon */}
      <IntroItemIcon>
        <PhoneIcon />
      </IntroItemIcon>

      {/* Phone link */}
      <IntroItemContent>
        <IntroItemLink
          href={`tel:${phoneNumber}`}
          aria-label={`Call ${formatted}`}
          className="font-mono text-xs sm:text-sm"
        >
          {formatted}
        </IntroItemLink>
      </IntroItemContent>

      {/* Copy button */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyButton
          variant="ghost"
          size="icon-sm"
          text={phoneNumber}
          className="text-muted-foreground"
          onCopySuccess={() => toast.success("Copied")}
          onCopyError={() => toast.error("Failed")}
        />
      </div>
    </IntroItem>
  );
}
