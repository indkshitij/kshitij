"use client";

import React, { createContext, useContext, useState } from "react";

// types
interface AppContextType {
  isMac: boolean;
  setIsMac: React.Dispatch<React.SetStateAction<boolean>>;
}


const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // variables

  const [isMac, setIsMac] = useState(() => {
    if (typeof navigator === "undefined") return false;
    return navigator.platform.toUpperCase().includes("MAC");
  });

  // useEffect(() => {
  //   const isMacPlatform = navigator.platform.toUpperCase().includes("MAC");

  //   if (isMacPlatform) {
  //     setIsMac(true);
  //   }
  // }, []);
  return (
    <AppContext.Provider value={{ isMac, setIsMac }}>
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
