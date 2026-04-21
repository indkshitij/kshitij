import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  LightbulbIcon,
} from "lucide-react";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "../../../atoms/intro-item";

type JobItemProps = {
  title: string;
  company: string;
  website?: string;
  experienceId?: string;
};

export function JobItem({
  title,
  company,
  website,
  experienceId,
}: JobItemProps) {
  const isInternal = !!experienceId;

  return (
    <IntroItem>
      <IntroItemIcon>{getJobIcon(title)}</IntroItemIcon>

      <IntroItemContent className="text-xs sm:text-sm font-mono">
        {title} @
        <IntroItemLink
          className="ml-0.5 font-medium font-mono"
          href={isInternal ? `#experience-${experienceId}` : website}
          target={isInternal ? "_self" : "_blank"}
          rel={isInternal ? undefined : "noopener noreferrer"}
        >
          {company}
        </IntroItemLink>
      </IntroItemContent>
    </IntroItem>
  );
}

function getJobIcon(title: string) {
  if (/(developer|engineer)/i.test(title)) {
    return <CodeXmlIcon />;
  }

  if (/(founder|co-founder)/i.test(title)) {
    return <LightbulbIcon />;
  }

  return <BriefcaseBusinessIcon />;
}
