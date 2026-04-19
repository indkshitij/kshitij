"use client";

import NameTile from "./NameTile";
import HeroCard from "./HeroCard";
import FilledGridWrapper from "@/components/layout/FilledGridWrapper";
import { Overview } from "./Overview/Overview";
import { SocialLinks } from "./SocialLinks";
import About from "./About";

export default function HeroSection() {
  return (
    <>
      <HeroCard />
      <NameTile />
      <FilledGridWrapper showTopBorder={false} height="h-10" />
      <Overview />
      <SocialLinks />
      <FilledGridWrapper showTopBorder={false} showBottomBorder={false} height="h-10" />
      <About />
    </>
  );
}
