import { Header } from "@/components/header";
import { TerminalContent } from "@/components/terminal";
import { siteConfig } from "@/lib/data";

export default function TerminalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <TerminalContent />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="font-mono">
              <span className="text-primary">$</span> echo "©{" "}
              {new Date().getFullYear()} {siteConfig.terminal.prompt}"
            </p>
            <p className="text-xs font-mono">v{siteConfig.terminal.version}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
