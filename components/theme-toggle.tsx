"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { IconSun, IconMoon, IconDeviceLaptop } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const themes = [
  { value: "light", icon: IconSun, label: "Light" },
  { value: "system", icon: IconDeviceLaptop, label: "System" },
  { value: "dark", icon: IconMoon, label: "Dark" },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 rounded-full bg-muted/50 border border-border">
        {themes.map(({ value, icon: Icon }) => (
          <div
            key={value}
            className="relative flex items-center justify-center w-8 h-8 rounded-full"
          >
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-1 p-1 rounded-full bg-muted/50 border border-border"
      role="radiogroup"
      aria-label="Theme selection"
    >
      {themes.map(({ value, icon: Icon, label }) => {
        const isActive = theme === value;
        return (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={cn(
              "relative flex items-center justify-center w-8 h-8 rounded-full transition-colors",
              "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
              isActive ? "text-foreground" : "text-muted-foreground"
            )}
            role="radio"
            aria-checked={isActive}
            aria-label={label}
          >
            {isActive && (
              <motion.div
                layoutId="theme-toggle-pill"
                className="absolute inset-0 bg-background rounded-full shadow-sm border border-border/50"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Icon className="h-4 w-4 relative z-10" />
          </button>
        );
      })}
    </div>
  );
}
