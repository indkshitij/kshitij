import PageLayout from "@/components/layout/page-layout";
import { Metadata } from "next";
import { Wrench, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me",
};

export default function Page() {
  return (
    <PageLayout>
      <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">

        {/* Icon */}
        <div className="mb-6 flex items-center justify-center rounded-full border border-border p-4 bg-muted/30">
          <Wrench className="size-6 text-muted-foreground" />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Page Under Construction
        </h1>

        {/* Subtitle */}
        <p className="mt-3 max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
          I’m currently working on this section to bring you something useful and well-crafted.
          Please check back soon.
        </p>

        {/* Divider */}
        <div className="my-6 w-16 h-px bg-border" />

        {/* Small note */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="size-4" />
          <span>New content coming soon</span>
        </div>

      </section>
    </PageLayout>
  );
}