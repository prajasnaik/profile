"use client";

import { useState } from "react";
import { ModeSelector } from "@/components/mode-selector";
import { MainNavigation } from "@/components/main-navigation";
import { ProfessionalMode } from "@/components/modes/professional-mode";
import { TechMode } from "@/components/modes/tech-mode";
import { FunMode } from "@/components/modes/fun-mode";

export type ViewMode = "professional" | "tech" | "fun";

export default function Home() {
  const [currentMode, setCurrentMode] = useState<ViewMode | null>(null);
  const [activeSection, setActiveSection] = useState<string>("background");
  const [preRunCommand, setPreRunCommand] = useState<string>("");

  if (!currentMode) {
    return <ModeSelector onModeSelect={setCurrentMode} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation
        currentMode={currentMode}
        onModeChange={setCurrentMode}
        onSectionChange={setActiveSection}
        activeSection={activeSection}
        preRunCommand={preRunCommand}
        onPreRunCommandChange={setPreRunCommand}
      >
        {currentMode === "professional" && (
          <ProfessionalMode
            onModeChange={setCurrentMode}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        )}
        {currentMode === "tech" && (
          <TechMode
            onModeChange={setCurrentMode}
            preRunCommand={preRunCommand}
          />
        )}
        {currentMode === "fun" && <FunMode />}
      </MainNavigation>
    </div>
  );
}
