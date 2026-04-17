import PlaneGridWrapper from "./PlaneGridWrapper";
import { personalData } from "@/data/personalData";

const Footer = () => {
  return (
    <div className="pb-2">
    <PlaneGridWrapper>
      <footer className="py-10 text-sm text-neutral-600">
        
        {/* Top Section */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Left: Name + tagline */}
          <div>
            <p className="font-medium text-neutral-900">
              {personalData.name}
            </p>
            <p className="text-neutral-500">
              {personalData?.tagline || "Building thoughtful digital experiences."}
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex flex-wrap gap-4">
            {personalData?.socials && Object.entries(personalData.socials).map(([name, href]) => (
              <a
                key={name}
                href={href as string}
                target="_blank"
                rel="noopener noreferrer"
                className="capitalize hover:text-neutral-900 transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-neutral-200" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </PlaneGridWrapper>
    </div>
  );
};

export default Footer;