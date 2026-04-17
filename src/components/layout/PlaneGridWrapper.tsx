import React from "react";

type PlaneGridWrapperProps = {
  children: React.ReactNode;
  outerClassName?: string;
  innerClassName?: string;
  contentClassName?: string;
  maxWidth?: string;
  contentWidth?: string;
  padding?: string;
  showOuterBorder?: boolean;
  showInnerBorder?: boolean;
  extraBorder?: boolean;
  extraBorderStyle?: "solid" | "dotted";
  minHeight?: string;
  maxHeight?: string;
};

const PlaneGridWrapper = ({
  children,
  outerClassName = "",
  innerClassName = "",
  contentClassName = "",
  maxWidth = "max-w-screen-xl md:max-w-3xl ",
  contentWidth = "max-w-3xl ",
  padding = "px-4 sm:px-6",
  showOuterBorder = true,
  showInnerBorder = true,
  extraBorder = false,
  extraBorderStyle = "solid",
  minHeight = "",
  maxHeight = "",
}: PlaneGridWrapperProps) => {
  const outerClasses = `
    w-full
    ${showOuterBorder ? "border-y border-line" : ""}
    ${extraBorder ? `${extraBorderStyle === "dotted" ? "border-dotted" : "border-solid"} border-2 border-line` : ""}
    ${minHeight}
    ${maxHeight}
    ${outerClassName}
  `;

  const innerClasses = `
    mx-auto w-full
    ${maxWidth}
    ${padding}
    ${showInnerBorder ? "border-x border-line" : ""}
    ${innerClassName}
  `;

  const contentClasses = `
    mx-auto w-full
    ${contentWidth}
    ${contentClassName}
  `;

  return (
    <div className={outerClasses.trim()}>
      <div className={innerClasses.trim()}>
        <div className={contentClasses.trim()}>{children}</div>
      </div>
    </div>
  );
};

export default PlaneGridWrapper;
