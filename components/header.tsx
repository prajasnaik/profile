"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageSwitcher } from "@/components/page-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

export function Header() {
  const pathname = usePathname();

  const getRouteInfo = () => {
    if (pathname.startsWith("/newspaper")) {
      return {
        id: "newspaper",
        name: siteConfig.newspaper.name,
        tagline: siteConfig.newspaper.tagline,
      };
    }
    if (pathname.startsWith("/terminal")) {
      return {
        id: "terminal",
        name: siteConfig.terminal.prompt,
        tagline: `v${siteConfig.terminal.version}`,
      };
    }
    return {
      id: "portfolio",
      name: siteConfig.portfolio.name,
      tagline: siteConfig.portfolio.tagline,
    };
  };

  const routeInfo = getRouteInfo();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "backdrop-blur-xl bg-background/80",
        "border-b border-border/50"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Site Name */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-3">
              {routeInfo.id === "newspaper" ? (
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
                    {routeInfo.tagline}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold tracking-tight font-serif-display">
                    {routeInfo.name}
                  </span>
                </div>
              ) : routeInfo.id === "terminal" ? (
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-primary">$</span>
                  <span className="text-lg sm:text-xl font-semibold tracking-tight">
                    {routeInfo.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {routeInfo.tagline}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight">
                    {routeInfo.name}
                  </span>
                  <span className="text-xs text-muted-foreground hidden sm:block">
                    {routeInfo.tagline}
                  </span>
                </div>
              )}
            </div>
          </Link>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            <PageSwitcher />
            <div className="h-6 w-px bg-border hidden sm:block" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
