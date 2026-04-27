"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";

// types
interface AppContextType {
  isMac: boolean;
  setIsMac: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();

  const [isMac, setIsMac] = useState(false);
  const [mounted, setMounted] = useState(false);

  // detect platform (client only)
  useEffect(() => {
    const isMacPlatform =
      typeof navigator !== "undefined" &&
      navigator.platform.toUpperCase().includes("MAC");

    setIsMac(isMacPlatform);
    setMounted(true);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isMac,
        setIsMac,
        theme: mounted ? resolvedTheme : undefined, 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
};