import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import PageLayout from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound({ className }: { className?: string }) {
  return (
    <PageLayout>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center text-center min-h-[75vh] overflow-hidden",
          className,
        )}
      >
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        </div>

        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl font-semibold tracking-tight bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-xl sm:text-2xl font-medium tracking-tight">
          Page not found
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
          The page you’re looking for doesn’t exist, was removed, or the link is
          broken.
        </p>

        {/* Actions */}
        <div className="mt-8 flex items-center gap-3">
          <Button asChild className="gap-2" size="lg">
            <Link href="/">
              Go home
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>

          {/* Secondary subtle action */}
          <Button
            asChild
            className="gap-2 text-foreground"
            variant="outline"
            size="lg"
          >
            <Link
              href="/blog"
              className=" text-foreground hover:text-gray-800 transition"
            >
              Browse articles →
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
