"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IconUser, IconNews, IconTerminal2 } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const pages = [
  { id: "portfolio", href: "/", icon: IconUser, label: "Portfolio" },
  { id: "newspaper", href: "/newspaper", icon: IconNews, label: "Newspaper" },
  { id: "terminal", href: "/terminal", icon: IconTerminal2, label: "Terminal" },
] as const;

export function PageSwitcher() {
  const pathname = usePathname();

  const getActiveId = () => {
    if (pathname === "/") return "portfolio";
    if (pathname.startsWith("/newspaper")) return "newspaper";
    if (pathname.startsWith("/terminal")) return "terminal";
    return "portfolio";
  };

  const activeId = getActiveId();

  return (
    <nav
      className="flex items-center gap-1 p-1 rounded-full bg-muted/50 border border-border"
      role="navigation"
      aria-label="Page navigation"
    >
      {pages.map(({ id, href, icon: Icon, label }) => {
        const isActive = activeId === id;
        return (
          <Link
            key={id}
            href={href}
            className={cn(
              "relative flex items-center justify-center w-8 h-8 rounded-full transition-colors",
              "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
              isActive ? "text-foreground" : "text-muted-foreground"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {isActive && (
              <motion.div
                layoutId="page-switcher-pill"
                className="absolute inset-0 bg-background rounded-full shadow-sm border border-border/50"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Icon className="h-4 w-4 relative z-10" />
            <span className="sr-only">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
