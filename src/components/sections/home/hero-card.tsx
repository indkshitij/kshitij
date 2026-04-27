"use client";

import PageWrapper from "@/components/layout/page-wrapper";
import { useEffect, useRef } from "react";
import NameLogo from "@/components/atoms/name-logo";

const HeroCard = () => {
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    let floatTime = 0;

    const strength = 5; // mouse influence
    const maxMove = 50; // max mouse movement
    const floatAmplitude = 10; // idle float range

    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t;

    const animate = () => {
      floatTime += 0.02;

      // floating motion (idle)
      const floatX = Math.sin(floatTime) * floatAmplitude;
      const floatY = Math.cos(floatTime * 1.2) * floatAmplitude;

      // smooth follow mouse
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);

      const finalX = currentX + floatX;
      const finalY = currentY + floatY;

      const rotateX = (-finalY / maxMove) * 8;
      const rotateY = (finalX / maxMove) * 8;

      el.style.transform = `
        translate(${finalX}px, ${finalY}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.06)
      `;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      let moveX = (centerX - x) / strength;
      let moveY = (centerY - y) / strength;

      targetX = Math.max(-maxMove, Math.min(maxMove, moveX));
      targetY = Math.max(-maxMove, Math.min(maxMove, moveY));
    };

    const reset = () => {
      targetX = 0;
      targetY = 0;
    };

    animate();

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <PageWrapper>
      <div className="select-none aspect-2/1  sm:aspect-3/1 flex items-center justify-center text-black dark:text-white screen-line-top screen-line-bottom before:-top-px after:-bottom-px bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5">
        <div className="relative inline-block">
          <div ref={ref} className="will-change-transform w-auto h-auto">
            <NameLogo width={150} height={150} priority />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default HeroCard;
