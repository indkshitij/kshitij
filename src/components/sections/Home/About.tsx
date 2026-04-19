"use client";

import { Prose } from "@/components/ui/typography";
import { personalData } from "@/data/personalData";
import { Markdown } from "@/components/ui/markdown";
import SectionHeading from "@/components/atoms/SectionHeading";
import PageWrapper from "@/components/layout/PageWrapper";

export default function About() {
  return (
    <>
      <PageWrapper showBorderY>
        <SectionHeading title="About" />
      </PageWrapper>
      <PageWrapper>
        {/* Content */}
        <Prose className="max-w-none text-base sm:text-md font-medium py-5 px-7 leading-relaxed text-muted-foreground [&_ul]:space-y-4 [&_li]:marker:text-muted-foreground/60">
          <Markdown >{personalData.about}</Markdown>
        </Prose>
      </PageWrapper>
    </>
  );
}
