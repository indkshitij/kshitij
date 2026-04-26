"use client";

import NameTile from "@/components/sections/home/name-tile";
import HeroCard from "@/components/sections/home/hero-card";
import FilledGridWrapper from "@/components/layout/filled-grid-wrapper";
import { Overview } from "@/components/sections/home/overview/overview";
import { SocialLinks } from "@/components/sections/home/social-links";
import About from "@/components/sections/home/about";

export default function HeroSection() {
  return (
    <>
      <HeroCard />
      <NameTile />
      <FilledGridWrapper showTopBorder={false} height="h-10" />
      <Overview />
      <SocialLinks />
      <FilledGridWrapper
        showTopBorder={false}
        showBottomBorder={false}
        height="h-10"
      />
      <About />
    </>
  );
}
