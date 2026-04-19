import { LinkIcon, MapPinIcon, MarsIcon, VenusIcon } from "lucide-react";

import { personalData } from "@/data/personalData";
import { urlToName } from "@/lib/url";
import { CurrentLocalTimeItem } from "@/components/sections/Home/Overview/CurrentLocalTimeItem";
import { EmailItem } from "@/components/sections/Home/Overview/EmailItem";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "@/components/atoms/IntroItem";
import { JobItem } from "./JobItem";
import { PhoneItem } from "./PhoneItem";
import PageWrapper from "@/components/layout/PageWrapper";

export function Overview() {
  const latest = personalData.experience
    ?.flatMap((company) =>
      company.positions.map((position) => ({
        company,
        position,
      })),
    )
    .sort((a, b) => {
      // prioritize current role
      if (a.position.current) return -1;
      if (b.position.current) return 1;

      // fallback: compare dates
      return (
        new Date(b.position.startDate).getTime() -
        new Date(a.position.startDate).getTime()
      );
    })[0];
  return (
    <PageWrapper showBorderY={false}>
      <h2 className="sr-only">Overview</h2>
      <div className="px-2 sm:px-5 py-2.5 sm:py-5">
        <div className="mb-2.5 ">
          {latest && (
            <JobItem
              key={latest.position.id}
              title={latest.position.role}
              company={latest.company.companyName}
              website={latest.company.companyWebsite}
              experienceId={latest.company.id}
            />
          )}
        </div>
        <div className="space-y-2.5 ">
          <div className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
            <IntroItem>
              <IntroItemIcon>
                <MapPinIcon />
              </IntroItemIcon>
              <IntroItemContent>
                <IntroItemLink
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalData?.contact?.location)}`}
                  aria-label={`Location: ${personalData?.contact?.location}`}
                  className="font-mono text-xs sm:text-sm"
                >
                  {personalData?.contact?.location}
                </IntroItemLink>
              </IntroItemContent>
            </IntroItem>

            <CurrentLocalTimeItem timeZone={personalData?.timeZone} />

            <PhoneItem phoneNumber={personalData?.contact?.phone} />

            <EmailItem email={personalData?.contact?.email} />

            <IntroItem>
              <IntroItemIcon>
                <LinkIcon />
              </IntroItemIcon>
              <IntroItemContent>
                <IntroItemLink
                  href={personalData?.website}
                  aria-label={`Personal website: ${urlToName(personalData?.website || "")}`}
                  className="font-mono text-xs sm:text-sm"
                >
                  {urlToName(personalData?.website || "")}
                </IntroItemLink>
              </IntroItemContent>
            </IntroItem>

            <IntroItem>
              <IntroItemIcon>
                {getGenderIcon(personalData.gender)}
              </IntroItemIcon>
              <IntroItemContent
                className="font-mono text-xs sm:text-sm"
                aria-label={`Pronouns: ${personalData.pronouns}`}
              >
                {personalData.pronouns}
              </IntroItemContent>
            </IntroItem>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

function getGenderIcon(gender: (typeof personalData)["gender"]) {
  switch (gender) {
    case "male":
      return <MarsIcon />;
    case "female":
      return <VenusIcon />;
  }
}
