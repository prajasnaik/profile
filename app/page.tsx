import { Header } from "@/components/header";
import {
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from "@/components/portfolio";
import { personalInfo, siteConfig } from "@/lib/data";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Hero / Intro - Above the fold with Skills & Experience */}
          <section className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              {personalInfo.tagline}
            </p>
          </section>

          {/* Skills - Above fold */}
          <SkillsSection />

          {/* Divider */}
          <div className="h-px bg-border my-4" />

          {/* Experience - Above fold */}
          <ExperienceSection />

          {/* Divider */}
          <div className="h-px bg-border my-4" />

          {/* Projects */}
          <ProjectsSection />

          {/* Divider */}
          <div className="h-px bg-border my-4" />

          {/* Contact */}
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <p className="text-xs">Built with Next.js + shadcn/ui</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
