"use client";

import React, { createContext, useContext, useState } from "react";

// types
interface AppContextType {
  a: number;
  b: number;
  c: number;
  d: number;
  add: (x: number, y: number) => number;
  subtract: (x: number, y: number) => number;
  minus: (x: number) => number;
}

// create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// provider
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // variables
  const [a] = useState<number>(10);
  const [b] = useState<number>(5);
  const [c] = useState<number>(20);
  const [d] = useState<number>(2);

  // functions
  const add = (x: number, y: number) => x + y;

  const subtract = (x: number, y: number) => x - y;

  const minus = (x: number) => -x;

  return (
    <AppContext.Provider value={{ a, b, c, d, add, subtract, minus }}>
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