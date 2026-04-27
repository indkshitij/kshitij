import Image from "next/image";
import { personalData } from "@/data/personal-data";
import { AvatarElectricEffect } from "@/components/ui/avatar-electric-effect";
import { VerifiedIcon } from "@/components/ui/verified-icon";
import { PronounceMyName } from "@/components/atoms/pronounce-my-name";
import { TextFlip } from "@/components/ui/text-flip";
import PageWrapper from "@/components/layout/page-wrapper";

const NameTile = () => {
  return (
    <>
      <PageWrapper showBorderY={true}>
        <>
          <div className="flex">
            <div className="shrink-0 border-r border-line">
              <div className="mx-0.5 my-0.75 w-fit">
                <AvatarElectricEffect>
                  <Image
                    className="size-30 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
                    alt="Avatar"
                    src={personalData.avatar!}
                    priority
                    width={300}
                    height={300}
                  />
                </AvatarElectricEffect>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex grow items-end pb-1 pl-4 ">
                <div
                  className="font-mono line-clamp-1 text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800 "
                  aria-hidden
                >
                  {"text-3xl "}
                  <span className="inline dark:hidden font-mono">
                    text-zinc-950
                  </span>
                  <span className="hidden dark:inline font-mono">
                    text-zinc-50
                  </span>

                  {" font-medium"}
                </div>
              </div>

              <div className="border-t border-line">
                <div className="flex items-center gap-2 pl-4">
                  <h1 className="-translate-y-px text-2xl sm:text-4xl tracking-tight font-semibold ">
                    {personalData.name}
                  </h1>

                  <VerifiedIcon
                    className="size-4.5 text-info select-none"
                    aria-label="Verified"
                  />

                  {personalData.namePronunciationUrl && (
                    <PronounceMyName
                      className="cursor-pointer"
                      namePronunciationUrl={personalData.namePronunciationUrl}
                    />
                  )}
                </div>

                <div className="h-12.5 border-t border-line py-1 pl-4 sm:h-9">
                  <TextFlip
                    className="font-mono text-sm text-balance text-muted-foreground"
                    variants={{
                      initial: { y: -10, opacity: 0 },
                      animate: { y: -1, opacity: 1 },
                      exit: { y: 10, opacity: 0 },
                    }}
                    interval={1.5}
                  >
                    {personalData.flipSentences}
                  </TextFlip>
                </div>
              </div>
            </div>
          </div>
        </>
      </PageWrapper>
    </>
  );
};

export default NameTile;
