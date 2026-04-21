"use client";

import React, { useEffect, useRef } from "react";
import { Delaunay } from "d3-delaunay";

const TEXT = "KSHITIJ";

export default function CrackTextFinal() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    type Point = {
      x: number;
      y: number;
      vx: number;
      vy: number;
    };

    // 🎯 points (balanced density)
    const points: Point[] = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0015,
      vy: (Math.random() - 0.5) * 0.0015,
    }));

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;
    };

    window.addEventListener("mousemove", handleMouse);

    const draw = () => {
      const { width, height } = canvas;

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      // 🔥 move + cursor influence
      points.forEach((p) => {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // subtle attraction
        if (dist < 0.25) {
          p.vx += dx * 0.0002;
          p.vy += dy * 0.0002;
        }

        p.x += p.vx;
        p.y += p.vy;

        // bounds
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        // friction (smooth motion)
        p.vx *= 0.98;
        p.vy *= 0.98;
      });

      const coords: Array<[number, number]> = points.map((p) => [p.x * width, p.y * height]);

      const delaunay = Delaunay.from(coords);
      const voronoi = delaunay.voronoi([0, 0, width, height]);

      // ✨ subtle glow pass
      ctx.strokeStyle = "rgba(140,192,124,0.08)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      voronoi.render(ctx);
      ctx.stroke();

      // 🧊 main stroke
      ctx.strokeStyle = "rgba(140,192,124,0.55)";
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      voronoi.render(ctx);
      ctx.stroke();

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[300px] bg-background">
      <div className="group relative w-full max-w-[1000px] h-[300px]">

        {/* 🎨 CANVAS */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        />

        {/* 🔥 MASK */}
        <svg
          viewBox="0 0 1000 300"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <defs>
            <mask id="mask-text">
              <rect width="100%" height="100%" fill="black" />
              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                fontSize="220"
                fontWeight="900"
                fontFamily="Arial Black, system-ui, sans-serif"
                fill="white"
              >
                {TEXT}
              </text>
            </mask>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="black"
            mask="url(#mask-text)"
          />
        </svg>

        {/* 🟢 NORMAL FILL */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[clamp(120px,18vw,220px)] font-black text-[#8cc07c] transition-opacity duration-300 group-hover:opacity-0">
            {TEXT}
          </span>
        </div>

        {/* 🧊 OUTLINE */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-[clamp(120px,18vw,220px)] font-black text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            {TEXT}
          </span>
        </div>
      </div>
    </div>
  );
}