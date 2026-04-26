
import { ChevronDownIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useSound } from "@/hooks/use-sound";
import {SOUNDS} from "@/lib/sounds";
export function CollapsibleList<T>({
  items,
  max = 3,

  keyExtractor,
  renderItem,
}: {
  items: T[];
  max?: number;

  keyExtractor?: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;

}) {
  const playClick = useSound(SOUNDS?.laptopClick);
  return (
    <Collapsible className="group/collapsible">
      {items.slice(0, max).map((item, index) => (
        <div
          key={typeof keyExtractor === "function" ? keyExtractor(item) : index}
          className="border-b border-line"
        >
          {renderItem(item)}
        </div>
      ))}

      <CollapsibleContent>
        {items.slice(max).map((item, index) => (
          <div
            key={
              typeof keyExtractor === "function"
                ? keyExtractor(item)
                : max + index
            }
            className="border-b border-line"
          >
            {renderItem(item)}
          </div>
        ))}
      </CollapsibleContent>

      {items.length > max && (
        <div className="flex py-2 items-center justify-center ">
          <CollapsibleTrigger asChild>
            <Button className="gap-2 border-none pr-2.5 pl-3 cursor-pointer" size="sm" onClick={() => playClick()}>
              <span className="hidden group-data-closed/collapsible:block">
                Show More
              </span>

              <span className="hidden group-data-open/collapsible:block">
                Show Less
              </span>

              <ChevronDownIcon className="group-data-open/collapsible:rotate-180" />
            </Button>
          </CollapsibleTrigger>
        </div>
      )}
    </Collapsible>
  );
}
