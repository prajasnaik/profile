"use client";

import { useMode } from "@/lib/mode-context";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const { mode } = useMode();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "backdrop-blur-xl bg-background/80",
        "border-b border-border/50"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Site Name */}
          <motion.div
            key={mode}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3"
          >
            {mode === "newspaper" ? (
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
                  Est. 2024
                </span>
                <span className="text-xl sm:text-2xl font-bold tracking-tight font-serif">
                  The Daily Developer
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 font-mono">
                <span className="text-primary">❯</span>
                <span className="text-lg sm:text-xl font-semibold tracking-tight">
                  prajas.dev
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-2 h-5 bg-primary inline-block"
                />
              </div>
            )}
          </motion.div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            <ModeToggle />
            <div className="h-6 w-px bg-border hidden sm:block" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
