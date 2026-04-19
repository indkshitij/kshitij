import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import Hotkeys from "@/lib/Hotkeys";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { GeistPixelSquare, GeistPixelGrid, GeistPixelCircle, GeistPixelTriangle, GeistPixelLine } from 'geist/font/pixel';


export const metadata: Metadata = {
  title: "Kshitij | Developer Portfolio",
  description:
    "Portfolio of Kshitij Singh showcasing projects, skills, and experience in software development and modern technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <SpeedInsights />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <TooltipProvider>
              <AppProvider>
                <Toaster position="top-center" />
                <Hotkeys />
                {children}
              </AppProvider>
            </TooltipProvider>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
