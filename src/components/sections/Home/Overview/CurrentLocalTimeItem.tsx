"use client";

import {
  Clock1Icon,
  Clock2Icon,
  Clock3Icon,
  Clock4Icon,
  Clock5Icon,
  Clock6Icon,
  Clock7Icon,
  Clock8Icon,
  Clock9Icon,
  Clock10Icon,
  Clock11Icon,
  Clock12Icon,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
} from "../../../atoms/IntroItem";

const CLOCK_ICONS: Record<number, LucideIcon> = {
  1: Clock1Icon,
  2: Clock2Icon,
  3: Clock3Icon,
  4: Clock4Icon,
  5: Clock5Icon,
  6: Clock6Icon,
  7: Clock7Icon,
  8: Clock8Icon,
  9: Clock9Icon,
  10: Clock10Icon,
  11: Clock11Icon,
  12: Clock12Icon,
};

type Props = {
  timeZone?: string;
};

export function CurrentLocalTimeItem({ timeZone }: Props) {
  const [time, setTime] = useState("00:00");
  const [hour, setHour] = useState(12);
  const [diffText, setDiffText] = useState("");

  useEffect(() => {
    if (!timeZone) return;

    const timeFormatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const hourFormatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "numeric",
      hour12: false,
    });

    const update = () => {
      const now = new Date();

      // time
      setTime(timeFormatter.format(now));

      const h = parseInt(hourFormatter.format(now), 10);
      setHour(h);

      const target = new Date(now.toLocaleString("en-US", { timeZone }));

      const offsetMinutes = -target.getTimezoneOffset();

      const sign = offsetMinutes >= 0 ? "+" : "-";
      const abs = Math.abs(offsetMinutes);

      const hours = Math.floor(abs / 60);
      const minutes = abs % 60;

      const gmt = `GMT${sign}${hours}:${minutes.toString().padStart(2, "0")}`;

      // optional: map readable label
      const label =
        timeZone === "Asia/Kolkata" ? "India" : timeZone.replace("Asia/", "");

      setDiffText(`${label} (${gmt})`);
    };

    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, [timeZone]);

  const hour12 = hour % 12 || 12;
  const ClockIcon = CLOCK_ICONS[hour12];

  return (
    <IntroItem>
      {/* Icon */}
      <IntroItemIcon>
        <ClockIcon className="size-4" />
      </IntroItemIcon>

      {/* Content */}
      <IntroItemContent className="flex items-center gap-2">
        {/* Time */}
        <Tooltip>
          <TooltipTrigger asChild>
            <span className=" font-fira tabular-nums font-mono">{time}</span>
          </TooltipTrigger>

          <TooltipContent>{timeZone || "Unknown timezone"}</TooltipContent>
        </Tooltip>

        {/* Subtle info */}
        <span className="text-muted-foreground font-fira text-xs">· {diffText}</span>
      </IntroItemContent>
    </IntroItem>
  );
}
