"use client";

import React, { useEffect, useRef } from "react";

const TEXT = "KSHITIJ";

export default function CrackText() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    // 🔥 generate points
    const points = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.002,
      vy: (Math.random() - 0.5) * 0.002,
    }));

    const draw = () => {
      const { width, height } = canvas;

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(120,255,160,0.6)";
      ctx.lineWidth = 1;

      // 🔥 move points
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      });

      // 🔥 draw connections (Voronoi-like)
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 0.15) {
            ctx.beginPath();
            ctx.moveTo(points[i].x * width, points[i].y * height);
            ctx.lineTo(points[j].x * width, points[j].y * height);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[#1c1c1c]">
      <div className="group relative w-[1000px] h-[300px]">

        {/* 🎨 CANVAS */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
                fontFamily="Arial Black, sans-serif"
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
          <span className="text-[220px] font-black text-[#8cc07c] transition-opacity duration-300 group-hover:opacity-0">
            {TEXT}
          </span>
        </div>

        {/* 🧊 OUTLINE */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-[220px] font-black text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            {TEXT}
          </span>
        </div>
      </div>
    </div>
  );
}