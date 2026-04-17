import PlaneGridWrapper from "@/components/layout/PlaneGridWrapper";
import React from "react";

const HeroCard = () => {
  return (
    <PlaneGridWrapper padding="">
      <div
        className="select-none aspect-2/1 border-x border-line select-none sm:aspect-3/1 flex items-center justify-center text-black dark:text-white screen-line-top screen-line-bottom before:-top-px after:-bottom-px bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/10 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/10"
        style={{ WebkitTouchCallout: "none" }}
      >
        {/* Inner content */}
        <div className="relative inline-block">
          {/* Animated wrapper */}
          <div className="transition-transform duration-300 ease-out hover:translate-x-1 hover:translate-y-1">
            <div className="font-black text-4xl sm:text-5xl tracking-tight leading-none uppercase drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)] dark:drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)] press-start-2p-regular !important">
              Kshitij
            </div>
          </div>
        </div>
      </div>
    </PlaneGridWrapper>
  );
};

export default HeroCard;
