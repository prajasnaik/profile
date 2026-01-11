import { Header } from "@/components/header";
import { NewspaperContent } from "@/components/newspaper";
import { siteConfig, personalInfo } from "@/lib/data";

export default function NewspaperPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <NewspaperContent />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {siteConfig.newspaper.name}
            </p>
            <p className="text-xs">All the news that's fit to code</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
