"use client";

import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import type { VolumeIconHandle } from "@/components/animated-icons/volume";
import { VolumeIcon } from "@/components/animated-icons/volume";
import { useSoundLazy } from "@/hooks/use-sound";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string;
  namePronunciationUrl: string;
}) {
  const { play, preload } = useSoundLazy(namePronunciationUrl);

  const volumeIconRef = useRef<VolumeIconHandle>(null);

  const handlePlayClick = () => {
    volumeIconRef.current?.startAnimation();
    play();
    trackEvent({
      name: "play_name_pronunciation",
    });
  };

  useHotkeys("p", handlePlayClick);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className={cn(
            "relative after:absolute after:-inset-2",
            "touch-manipulation text-muted-foreground transition-[color,scale] select-none hover:text-foreground active:scale-[0.9]",
            className,
          )}
          onPointerEnter={() => preload()}
          onClick={handlePlayClick}
          aria-label="Pronounce my name"
        >
          <VolumeIcon ref={volumeIconRef} className="size-4.5" />
        </button>
      </TooltipTrigger>

      <TooltipContent>
        <div className="flex items-center gap-1">
          Pronounce Name
          <KbdGroup>
            <Kbd>P</Kbd>
          </KbdGroup>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
