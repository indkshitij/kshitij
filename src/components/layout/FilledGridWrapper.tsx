import React from "react";

type FilledGridWrapperProps = {
  height?: string;
  showTopBorder?: boolean;
  showBottomBorder?: boolean;
  showSideBorder?: boolean;
  pattern?: boolean;
  className?: string;
};

const FilledGridWrapper = ({
  height = "h-10",
  showTopBorder = true,
  showBottomBorder = true,
  showSideBorder = true,
  pattern = true,
  className = "",
}: FilledGridWrapperProps) => {
  const bg = pattern
    ? `
    bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.06)_0,rgba(0,0,0,0.06)_1px,transparent_1px,transparent_8px)]
    dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_8px)]
  `
    : "";

  return (
    <div
      className={`
          flex w-full
          ${height}
          ${showTopBorder ? "border-t border-line" : ""}
          ${showBottomBorder ? "border-b border-line" : ""}
          ${className}
        `}
    >
      {/* Left Fill */}
      <div className={`flex-1 ${bg}`} />

      {/* Center Content Area */}
      <div
        className={`
            w-full
            max-w-[95%] sm:max-w-2xl md:max-w-2xl lg:max-w-3xl
            ${showSideBorder ? "border-x border-line" : ""}
            ${bg}
          `}
      />

      {/* Right Fill */}
      <div className={`flex-1 ${bg}`} />
    </div>
  );
};

export default FilledGridWrapper;
