"use client";

import Image from "next/image";
import { useAppContext } from "@/context/app-context";

interface NameLogoProps {
  width?: number;
  height?: number;
  priority?: boolean;
  alt?: string;
  onClick?: () => void;
}

const NameLogo = ({
  width = 100,
  height = 40,
  priority = false,
  alt = "Logo",
  onClick,
}: NameLogoProps) => {
  const { theme } = useAppContext();

  const logoSrc =
    theme === "dark"
      ? "/web-essential/name-logo-white.png"
      : "/web-essential/name-logo-black.png";

  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center"
    >
      <Image
        src={logoSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        style={{ width: "auto", height: "auto" }} 
      />
    </div>
  );
};

export default NameLogo;