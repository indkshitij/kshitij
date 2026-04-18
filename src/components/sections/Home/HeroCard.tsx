import PageWrapper from "@/components/layout/PageWrapper";

const HeroCard = () => {
  return (
    <>
      <PageWrapper>
        <div
          className="select-none aspect-2/1 sm:aspect-6/2 flex items-center justify-center text-black dark:text-white before:-top-px after:-bottom-px bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/10 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
          style={{ WebkitTouchCallout: "none" }}
        >
          {/* Inner content */}
          <div className="relative inline-block">
            {/* Animated wrapper */}
            <div className="transition-transform duration-300 ease-out hover:translate-x-1 hover:translate-y-1">
              <div className="text-8xl font-bold font-pixel">
                KS
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default HeroCard;
