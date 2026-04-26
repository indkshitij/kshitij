"use client";

import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";
import { useSound } from "@/hooks/use-sound";
import { SOUNDS } from "@/lib/sounds";
import { trackEvent } from "@/lib/events";

export function PostKeyboardShortcuts({
  previous,
  next,
}: {
  previous: string | null;
  next: string | null;
}) {
  const playTurnPageSound = useSound(SOUNDS?.turnPage);
  const router = useRouter();

  const navigate = (
    href: string | null,
    direction: "previous" | "next",
    keys: string,
  ) => {
    if (href) {
      trackEvent({
        name: "keyboard_shortcut_navigate",
        properties: { path: href, keys, direction },
      });
      router.push(href);
    }
  };

  useHotkeys("ArrowRight", (event) => {
    // A native interaction was prevented on this event, someone else took ownership of it, ignore.
    if (event.defaultPrevented) {
      return;
    }
    playTurnPageSound();
    navigate(next, "next", "ArrowRight");
  });
  useHotkeys("ArrowLeft", (event) => {
    // A native interaction was prevented on this event, someone else took ownership of it, ignore.
    if (event.defaultPrevented) {
      return;
    }
    playTurnPageSound();
    navigate(previous, "previous", "ArrowLeft");
  });

  return null;
}
