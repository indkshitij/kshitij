"use client";
import { useState } from "react";
import { EllipsisIcon, LinkIcon, Share2 } from "lucide-react";
import { toast } from "react-hot-toast";

import { Button } from "@/components//ui/button";
import { Icons } from "@/lib/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyText } from "@/lib/copy";

export function PostShareMenu({ title, url }: { title: string; url: string }) {
  const absoluteUrl = url.startsWith("http")
    ? url
    : typeof window !== "undefined"
      ? new URL(url, window.location.origin).toString()
      : url;

  const urlEncoded = encodeURIComponent(absoluteUrl);
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              className="flex items-center gap-2 transition cursor-pointer"
            >
              <Share2 />
              <p className="text-[12.5px]">Share</p>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>

        <TooltipContent>Share</TooltipContent>
      </Tooltip>

      <DropdownMenuContent
        className="w-fit"
        alignOffset={-6}
        collisionPadding={8}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <DropdownMenuItem
          onClick={() => {
            copyText(absoluteUrl);
            toast.success("Link copied");
          }}
        >
          <LinkIcon />
          Copy link
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={`https://x.com/intent/tweet?url=${urlEncoded}`}
            target="_blank"
            rel="noopener"
          >
            <Icons.x />
            Share on X
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite?url=${urlEncoded}`}
            target="_blank"
            rel="noopener"
          >
            <Icons.linkedin />
            Share on LinkedIn
          </a>
        </DropdownMenuItem>

        {typeof navigator !== "undefined" && "share" in navigator && (
          <DropdownMenuItem
            onClick={(e) => {
              e.preventDefault(); // Prevent the menu from closing
              navigator.share({ title, url: absoluteUrl }).catch(() => {});
            }}
          >
            <EllipsisIcon />
            Other app
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
