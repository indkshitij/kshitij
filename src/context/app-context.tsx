"use client";

import React, { createContext, useContext, useState,useEffect } from "react";

// types
interface AppContextType {
isMac:boolean;
setIsMac:React.Dispatch<React.SetStateAction<boolean>>;
}

// create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// provider
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // variables
  
const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().includes("MAC"));
  }, []);
  return (
    <AppContext.Provider value={{isMac, setIsMac  }}>
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