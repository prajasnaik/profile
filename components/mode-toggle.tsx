"use client";

import * as React from "react";
import { useMode } from "@/lib/mode-context";
import { motion, AnimatePresence } from "framer-motion";
import { IconNews, IconTerminal2 } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { mode, toggleMode } = useMode();

  return (
    <button
      onClick={toggleMode}
      className={cn(
        "relative inline-flex h-10 w-20 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        "bg-primary"
      )}
    >
      <span className="sr-only">Toggle Mode</span>
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={cn(
          "pointer-events-none flex h-8 w-8 items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform",
          mode === "dev" ? "translate-x-10" : "translate-x-1"
        )}
      >
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <motion.div
            key={mode}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {mode === "newspaper" ? (
              <IconNews className="h-5 w-5 text-primary" />
            ) : (
              <IconTerminal2 className="h-5 w-5 text-primary" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    </button>
  );
}
