"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const ThemeContext = createContext({ blue: false, toggle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [blue, setBlue] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.theme = blue ? "blue" : "green";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", "#faf9f5");
  }, [blue]);
  return (
    <ThemeContext.Provider
      value={{ blue, toggle: () => setBlue((value) => !value) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useColorTheme = () => useContext(ThemeContext);
