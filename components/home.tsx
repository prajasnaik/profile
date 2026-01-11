"use client";

import { useMode } from "@/lib/mode-context";
import { Header } from "@/components/header";
import { NewspaperLayout } from "@/components/newspaper-layout";
import { TerminalLayout } from "@/components/terminal-layout";
import { motion, AnimatePresence } from "framer-motion";

export function Home() {
  const { mode } = useMode();

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* Main Content Area */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            {mode === "newspaper" ? (
              <motion.div
                key="newspaper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <NewspaperLayout />
              </motion.div>
            ) : (
              <motion.div
                key="terminal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <TerminalLayout />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 Prajas Naik. All rights reserved.</p>
            <p className="font-mono text-xs">
              Built with <span className="text-primary">Next.js</span>
              {" + "}
              <span className="text-primary">shadcn/ui</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
