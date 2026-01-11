"use client";

import * as React from "react";

type Mode = "newspaper" | "dev";

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
}

const ModeContext = React.createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = React.useState<Mode>("newspaper");
  const [mounted, setMounted] = React.useState(false);

  // Load mode from localStorage on mount
  React.useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem("site-mode") as Mode | null;
    if (savedMode && (savedMode === "newspaper" || savedMode === "dev")) {
      setModeState(savedMode);
    }
  }, []);

  // Apply mode class to document and persist to localStorage
  React.useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.classList.remove("mode-newspaper", "mode-dev");
    root.classList.add(`mode-${mode}`);
    localStorage.setItem("site-mode", mode);
  }, [mode, mounted]);

  const setMode = React.useCallback((newMode: Mode) => {
    setModeState(newMode);
  }, []);

  const toggleMode = React.useCallback(() => {
    setModeState((prev) => (prev === "dev" ? "newspaper" : "dev"));
  }, []);

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = React.useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
