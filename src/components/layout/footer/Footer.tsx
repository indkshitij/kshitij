"use client";

import PageWrapper from "@/components/layout/page-wrapper";
import { personalData } from "@/data/personal-data";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import FooterInteractiveLogo from "./FooterInteractiveLogo";
import CrackText from "./FooterInteractiveLogo";
import CrackTextFinal from "./CrackTextFinal";
import AppleSmoothText from "./AppleSmoothText";
import CrackTextVoronoi from "./CrackTextVoronoi";

const Footer = () => {
  return (
    <>
      <div className="border-y border-line mb-5">
        <PageWrapper>
          <footer className=" py-10 text-sm text-neutral-600 ">
            {/* Top Section */}
            <div className=" px-5 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-neutral-900">
                  {personalData.name}
                </p>
                <p className="text-neutral-500">
                  {personalData?.tagline ||
                    "Building thoughtful digital experiences."}
                </p>
              </div>

              {/* Right: Social Links */}
              <div className="flex flex-wrap gap-4">
                {personalData?.socials &&
                  personalData.socials.slice(0, 4).map((s, idx) => (
                    <a
                      key={idx}
                      href={s.href as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="capitalize hover:text-neutral-900 transition-colors"
                    >
                      {s.title}
                    </a>
                  ))}
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-line" />

            {/* Bottom Section */}
            <div className="px-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-neutral-500">
              <p>
                © {new Date().getFullYear()} {personalData.name}. All rights
                reserved.
              </p>

              <p>Built with Next.js & Tailwind CSS</p>
            </div>
          </footer>
        </PageWrapper>
      </div>
      {/* <div className="relative h-50  overflow-hidden">
        <TextHoverEffect
          className="absolute -bottom-50  h-120"
          text="Kshitij"
        />
      </div> */}
      {/* <div className="relative h-68 overflow-hidden border-4 border-red-500">
        <div className="z-50 leading-none flex gap-0 sm:gap-4 select-none text-[100px] sm:text-[250px] font-black absolute -bottom-10 sm:-bottom-32 right-1 sm:right-2 translate-y-[-50%] border-2 border-blue-500">
          {"KSHITIJ".split("").map((char, i) => (
            <span
              key={i}
              className="text-foreground/20 transition-all duration-200 hover:text-foreground inline-block leading-none"
              style={{
                WebkitTextStroke: "4px transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;

                el.style.setProperty(
                  "-webkit-text-stroke",
                  "4px var(--foreground)",
                );

                el.style.textShadow =
                  "0 0 12px var(--foreground), 0 0 24px var(--foreground)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;

                el.style.setProperty("-webkit-text-stroke", "4px transparent");

                el.style.textShadow = "none";
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div> */}
      {/* <FooterInteractiveLogo/>
      <CrackText/>
      <CrackTextFinal/>
      <AppleSmoothText/> */}
      {/* <CrackTextVoronoi /> */}
    </>
  );
};

export default Footer;
