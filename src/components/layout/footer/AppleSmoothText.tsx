"use client";

import React, { useEffect, useRef } from "react";
import { Delaunay } from "d3-delaunay";

const TEXT = "KSHITIJ";

export default function AppleSmoothText() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // 🧠 evenly distributed grid (IMPORTANT)
    const GRID_X = 12;
    const GRID_Y = 6;

    type Point = {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
    };

    const points: Point[] = [];

    for (let y = 0; y < GRID_Y; y++) {
      for (let x = 0; x < GRID_X; x++) {
        points.push({
          baseX: (x + 0.5) / GRID_X,
          baseY: (y + 0.5) / GRID_Y,
          x: 0,
          y: 0,
        });
      }
    }

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

      // 🔥 smooth motion (no jitter)
      points.forEach((p, i) => {
        const waveX =
          Math.sin(t * 0.6 + i * 0.3) * 0.015;

        const waveY =
          Math.cos(t * 0.6 + i * 0.25) * 0.015;

        // 🧲 soft cursor influence
        const dx = mouse.current.x - p.baseX;
        const dy = mouse.current.y - p.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const influence = Math.exp(-dist * 8) * 0.05;

        p.x = p.baseX + waveX + dx * influence;
        p.y = p.baseY + waveY + dy * influence;
      });

      const coords: Array<[number, number]> = points.map((p) => [p.x * width, p.y * height]);

      const delaunay = Delaunay.from(coords);
      const voronoi = delaunay.voronoi([0, 0, width, height]);

      // ✨ ultra subtle glow
      ctx.strokeStyle = "rgba(140,192,124,0.05)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      voronoi.render(ctx);
      ctx.stroke();

      // 🧊 main lines (clean)
      ctx.strokeStyle = "rgba(140,192,124,0.35)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      voronoi.render(ctx);
      ctx.stroke();

      t += 0.01;
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
          className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
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
                fontFamily="Arial Black, system-ui"
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

        {/* 🟢 NORMAL */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[clamp(120px,18vw,220px)] font-black text-[#8cc07c] transition-opacity duration-500 group-hover:opacity-0">
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