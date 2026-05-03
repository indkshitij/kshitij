import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/app-context";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import Hotkeys from "@/lib/hotkeys";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
  GeistPixelSquare,
  GeistPixelGrid,
  GeistPixelCircle,
  GeistPixelTriangle,
  GeistPixelLine,
} from "geist/font/pixel";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Kshitij Singh",
    template: "%s | Kshitij Singh",
  },
  description: "Portfolio, blogs, and projects by Kshitij Singh",

  openGraph: {
    title: "Kshitij Singh",
    description: "Portfolio and blogs",
    siteName: "Kshitij Singh",
  },

  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${GeistSans.variable}
        ${GeistMono.variable}
        ${GeistPixelSquare.variable}
        ${GeistPixelGrid.variable}
        ${GeistPixelCircle.variable}
        ${GeistPixelTriangle.variable}
        ${GeistPixelLine.variable}
      `}
      suppressHydrationWarning={true}
    >
      <body
        suppressHydrationWarning={true}
        className="min-h-full flex flex-col antialiased"
      >
        {/* Theme provider controls dark/light mode across app */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Enables query-state syncing in Next.js app router */}
          <NuqsAdapter>
            {/* Tooltip system */}
            <TooltipProvider>
              {/* Global app state provider */}
              <AppProvider>
                {/* Toast notifications (top-center position) */}
                <Toaster position="top-center" />

                {/* Global keyboard shortcuts handler */}
                <Hotkeys />
                {/* Main app content */}
                {children}
                {/* 
                  Vercel Analytics:
                  - Tracks page views, visitors, referrers
                  - Lightweight, automatic
                */}
                <Analytics />

                {/* 
                  Vercel Speed Insights:
                  - Tracks performance (LCP, CLS, etc.)
                  - Helps optimize real-world loading speed
                */}
                <SpeedInsights />
              </AppProvider>
            </TooltipProvider>
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
