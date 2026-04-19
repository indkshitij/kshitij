import { LinkIcon, MapPinIcon, MarsIcon, VenusIcon } from "lucide-react";

import { personalData } from "@/data/personalData";
import { urlToName } from "@/lib/url";
import { CurrentLocalTimeItem } from "./CurrentLocalTimeItem";
import { EmailItem } from "./EmailItem";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "../../../atoms/IntroItem";
import { JobItem } from "./JobItem";
import { PhoneItem } from "./PhoneItem";
import PageWrapper from "@/components/layout/PageWrapper";

export function Overview() {
  return (
    <PageWrapper showBorderY={false}>
      <h2 className="sr-only">Overview</h2>
      <div className="p-5">
        <div className="mb-2.5 ">
          {personalData.jobs?.map((job, index) => {
            return (
              <JobItem
                key={index}
                title={job.title}
                company={job.company}
                website={job.website}
                experienceId={job.experienceId}
              />
            );
          })}
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
                  className="font-mono"
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
                  className="font-mono"
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
                className="font-mono"
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
