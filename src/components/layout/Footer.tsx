import PageWrapper from "./PageWrapper";
import { personalData } from "@/data/personalData";

const Footer = () => {
  return (
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
  );
};

export default Footer;
