"use client";

import React, { useEffect, useRef, useMemo, useState } from "react";
import { Delaunay } from "d3-delaunay";

interface InteractiveVoronoiTextProps {
  text: string;
  className?: string;
  lineColor?: string; // e.g., "rgba(140, 192, 124, 0.5)"
}

export default function InteractiveVoronoiText({
  text = "KSHITIJ",
  className = "",
  lineColor = "var(--foreground)",
}: InteractiveVoronoiTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // 🔒 Synchronized SVG Mask (Ensures cracks are ONLY inside text)
  const maskUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    
    // We use a high-resolution viewBox for the mask to maintain sharpness
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 300">
        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="central"
          font-size="220"
          font-weight="900"
          font-family="system-ui, sans-serif"
          fill="white"
        >${text}</text>
      </svg>
    `;
    return `url("data:image/svg+xml;base64,${window.btoa(svg)}")`;
  }, [text]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    
    const resize = () => {
      const { clientWidth, clientHeight } = container;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      ctx.scale(dpr, dpr);
      setDimensions({ width: clientWidth, height: clientHeight });
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    // 🎯 Animation State
    const POINT_COUNT = 75;
    const points = Array.from({ length: POINT_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.001,
      vy: (Math.random() - 0.5) * 0.001,
    }));

    const animate = (time: number) => {
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, clientWidth, clientHeight);

      // 🏃 Update Physics (Time-based smooth motion)
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Soft Bounce
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      });

      // 💎 Render Voronoi
      const coords = points.map((p) => [p.x * clientWidth, p.y * clientHeight]) as [number, number][];
      const delaunay = Delaunay.from(coords);
      const voronoi = delaunay.voronoi([0, 0, clientWidth, clientHeight]);

      ctx.beginPath();
      voronoi.render(ctx);
      ctx.strokeStyle = lineColor;
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 0.75;
      ctx.stroke();

      // Add a subtle jitter-free "pulse" by drawing a secondary faint layer
      ctx.beginPath();
      voronoi.render(ctx);
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 2;
      ctx.stroke();

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [lineColor]);

  return (
    <div 
      ref={containerRef}
      className={`group relative w-full flex items-center justify-center select-none overflow-hidden ${className}`}
      style={{ height: "clamp(120px, 25vh, 400px)" }}
    >
      {/* 🟢 DEFAULT BASE STATE (Solid Text) */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out group-hover:opacity-0">
        <span 
          className="font-black text-foreground"
          style={{ fontSize: "clamp(4rem, 18vw, 14rem)", lineHeight: 1 }}
        >
          {text}
        </span>
      </div>

      {/* ⚪️ HOVER STATE (Outline Text) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <span 
          className="font-black text-transparent"
          style={{ 
            fontSize: "clamp(4rem, 18vw, 14rem)", 
            lineHeight: 1,
            WebkitTextStroke: `1px ${lineColor}`,
            opacity: 0.3
          }}
        >
          {text}
        </span>
      </div>

      {/* 🎨 ANIMATED CANVAS (Masked to Text) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
        style={{
          WebkitMaskImage: maskUrl,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
          maskImage: maskUrl,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />
    </div>
  );
}

// "use client";

// import React, { useEffect, useRef } from "react";
// import { Delaunay } from "d3-delaunay";

// const TEXT = "KSHITIJ";

// export default function CrackTextVoronoi() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     type Point = {
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//     };

//     // 🔥 generate moving points
//     const points: Point[] = Array.from({ length: 60 }, () => ({
//       x: Math.random(),
//       y: Math.random(),
//       vx: (Math.random() - 0.5) * 0.002,
//       vy: (Math.random() - 0.5) * 0.002,
//     }));

//     const draw = () => {
//       const { width, height } = canvas;

//       ctx.clearRect(0, 0, width, height);

//       // 🔥 move points
//       points.forEach((p) => {
//         p.x += p.vx;
//         p.y += p.vy;

//         if (p.x < 0 || p.x > 1) p.vx *= -1;
//         if (p.y < 0 || p.y > 1) p.vy *= -1;
//       });

//       // 🔥 convert to coordinates
//       const coords: Array<[number, number]> = points.map((p) => [
//         p.x * width,
//         p.y * height,
//       ]);

//       const delaunay = Delaunay.from(coords);
//       const voronoi = delaunay.voronoi([0, 0, width, height]);

//       // 🔥 background (black)
//       ctx.fillStyle = "black";
//       ctx.fillRect(0, 0, width, height);

//       // 🔥 draw edges only
//       ctx.strokeStyle = "rgba(120,255,160,0.7)";
//       ctx.lineWidth = 1;

//       ctx.beginPath();
//       voronoi.render(ctx);
//       ctx.stroke();

//       requestAnimationFrame(draw);
//     };

//     draw();

//     return () => {
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-50v">
//       <div className="group relative w-[1000px] h-[300px]">
//         {/* 🎨 CANVAS */}
//         <canvas
//           ref={canvasRef}
//           className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//         />

//         {/* 🔥 TEXT MASK */}
//         <svg
//           viewBox="0 0 1000 300"
//           className="absolute inset-0 w-full h-full pointer-events-none"
//         >
//           <defs>
//             <mask id="mask-text">
//               <rect width="100%" height="100%" fill="black" />
//               <text
//                 x="50%"
//                 y="60%"
//                 textAnchor="middle"
//                 fontSize="220"
//                 fontWeight="900"
//                 fontFamily="Arial Black, sans-serif"
//                 fill="white"
//               >
//                 {TEXT}
//               </text>
//             </mask>
//           </defs>

//           <rect
//             width="100%"
//             height="100%"
//             fill="black"
//             mask="url(#mask-text)"
//           />
//         </svg>

//         {/* 🟢 NORMAL STATE */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <span className="text-[220px] font-black text-[#8cc07c] transition-opacity duration-300 group-hover:opacity-0">
//             {TEXT}
//           </span>
//         </div>

//         {/* 🧊 OUTLINE */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <span
//             className="text-[220px] font-black text-transparent"
//             style={{ WebkitTextStroke: "2px white" }}
//           >
//             {TEXT}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
