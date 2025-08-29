"use client";

import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { ViewMode } from "@/app/page";
import resumeData from "@/data/resume.json";
import type {
  SkillCategory,
  Project,
  ExperienceEntry,
  EducationEntry,
  ResumeData,
} from "@/lib/types";

interface TechModeProps {
  onModeChange: (mode: ViewMode | null) => void;
  preRunCommand?: string;
}

export function TechMode({ onModeChange, preRunCommand }: TechModeProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to the terminal interface!",
    'Type "help" to see available commands.',
    "",
  ]);
  const lastPreRun = useRef<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  // Strongly type the JSON import once for all usages
  const data: ResumeData = resumeData as ResumeData;

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const commands = useMemo(
    () => ({
      help: () => [
        "Available commands:",
        "  about       - Show background information",
        "  skills      - List technical skills",
        "  projects    - Show project portfolio",
        "  experience  - Show work experience",
        "  education   - Show education",
        "  awards      - Show awards & achievements",
        "  resume      - Download resume PDF",
        "  clear       - Clear terminal",
        "  professional- Switch to professional mode",
        "  fun         - Switch to fun mode",
        "  help        - Show this help message",
      ],
      about: () => [
        `Name: ${data.personalInfo.name}`,
        `Email: ${data.personalInfo.email}`,
        `Location: ${data.personalInfo.location}`,
        "",
        data.background.introduction,
      ],
      skills: () => {
        const output = ["Technical Skills:"];
        data.skills.forEach((category: SkillCategory) => {
          output.push(`\n${category.category}:`);
          category.items.forEach((skill: string) => {
            output.push(`  - ${skill}`);
          });
        });
        return output;
      },
      projects: () => {
        const output = ["Projects:"];
        data.projects.forEach((project: Project) => {
          output.push(`\n${project.title} (${project.period})`);
          output.push(`  ${project.description}`);
          output.push(`  Technologies: ${project.technologies.join(", ")}`);
          if (project.link) {
            output.push(`  Link: ${project.link}`);
          }
        });
        return output;
      },
      experience: () => {
        const list = data.experience as ExperienceEntry[] | undefined;
        if (!list?.length) return ["No experience found."];
        const out = ["Experience:"];
        list.forEach((exp) => {
          out.push(`\n${exp.title} — ${exp.company} (${exp.period})`);
          exp.details.forEach((d) => out.push(`  - ${d}`));
        });
        return out;
      },
      education: () => {
        const list = data.education as EducationEntry[] | undefined;
        if (!list?.length) return ["No education found."];
        const out = ["Education:"];
        list.forEach((edu) => {
          out.push(`\n${edu.institution}`);
          out.push(`  ${edu.degree} (${edu.period})`);
          edu.details?.forEach((d) => out.push(`  - ${d}`));
        });
        return out;
      },
      awards: () => {
        const list = data.awards as string[] | undefined;
        if (!list?.length) return ["No awards found."];
        return ["Awards:", ...list.map((a) => `  - ${a}`)];
      },
      resume: () => {
        downloadResume();
        return [
          "Downloading resume.pdf...",
          "Resume download initiated successfully!",
          "Check your downloads folder for the PDF file.",
        ];
      },
      professional: () => {
        onModeChange("professional");
        return [
          "Switching to professional mode...",
          "Loading professional interface.",
        ];
      },
      fun: () => {
        onModeChange("fun");
        return ["Switching to fun mode...", "Loading fun interface... 🎉"];
      },
    }),
    [
      onModeChange,
      data.awards,
      data.background.introduction,
      data.education,
      data.experience,
      data.personalInfo.email,
      data.personalInfo.location,
      data.personalInfo.name,
      data.projects,
      data.skills,
    ]
  );

  const handleCommand = useCallback(
    (cmd: string) => {
      const trimmedCmd = cmd.trim().toLowerCase();

      if (trimmedCmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      const newHistory = [...history, `$ ${cmd}`];

      if (trimmedCmd in commands) {
        const output = commands[trimmedCmd as keyof typeof commands]();
        newHistory.push(...output, "");
      } else if (trimmedCmd === "") {
        newHistory.push("");
      } else {
        newHistory.push(
          `Command not found: ${trimmedCmd}`,
          'Type \"help\" for available commands.',
          ""
        );
      }

      setHistory(newHistory);
      setInput("");
    },
    [history, commands]
  );

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  // Run pre-configured command when set or changed
  useEffect(() => {
    const cmd = (preRunCommand || "").trim();
    if (cmd && lastPreRun.current !== cmd) {
      lastPreRun.current = cmd;
      handleCommand(cmd);
    }
  }, [preRunCommand, handleCommand]);

  // Focus handling: focus on mount and when receiving a global event
  useEffect(() => {
    // initial focus
    inputRef.current?.focus();
    const onFocusRequest = () => {
      inputRef.current?.focus();
    };
    const onRunCmd = (e: Event) => {
      // support CustomEvent with string detail
      const ce = e as CustomEvent<string>;
      const cmd = (ce.detail || "").trim();
      if (cmd) {
        handleCommand(cmd);
      }
      inputRef.current?.focus();
    };
    window.addEventListener("focus-terminal", onFocusRequest as EventListener);
    window.addEventListener("run-terminal-command", onRunCmd as EventListener);
    return () => {
      window.removeEventListener(
        "focus-terminal",
        onFocusRequest as EventListener
      );
      window.removeEventListener(
        "run-terminal-command",
        onRunCmd as EventListener
      );
    };
  }, [handleCommand]);

  return (
    <div className="min-h-screen bg-background font-mono">
      {/* Terminal */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-black border border-gray-700 rounded-lg p-4 min-h-[600px] max-h-[600px] overflow-y-auto">
          {/* Terminal Output */}
          <div className="space-y-1 mb-4">
            {history.map((line, index) => (
              <div key={index} className="text-sm text-green-400 font-mono">
                {line}
              </div>
            ))}
          </div>

          {/* Input Line */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-400 font-mono">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              ref={inputRef}
              className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono"
              placeholder=""
              autoFocus
            />
          </div>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          <p>
            This is a simulated terminal interface. Try typing &quot;help&quot;
            to get started.
          </p>
        </div>
      </div>
    </div>
  );
}
