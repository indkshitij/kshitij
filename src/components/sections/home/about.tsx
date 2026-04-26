"use client";

import { Prose } from "@/components/ui/typography";
import { personalData } from "@/data/personal-data";
import { Markdown } from "@/components/ui/markdown";
import SectionHeading from "@/components/atoms/section-heading";
import PageWrapper from "@/components/layout/page-wrapper";
import { PanelContent } from "@/components/ui/panel";

export default function About() {
  return (
    <>
      <PageWrapper showBorderY>
        <SectionHeading title="About" />
      </PageWrapper>
      <PageWrapper>
        <PanelContent>
          <Prose>
            <Markdown>{personalData.about}</Markdown>
          </Prose>
        </PanelContent>
      </PageWrapper>
    </>
  );
}
