"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalLine {
  id: number;
  type: "prompt" | "command" | "output" | "error" | "success";
  content: string;
}

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "",
    "  about       - Learn more about me",
    "  skills      - View my technical skills",
    "  projects    - See my featured projects",
    "  contact     - Get in touch",
    "  social      - Social media links",
    "  clear       - Clear the terminal",
    "",
    "Tip: Click on a command to execute it",
  ],
  about: [
    "┌─────────────────────────────────────────────────┐",
    "│  PRAJAS NAIK                                    │",
    "│  Full-Stack Developer                           │",
    "├─────────────────────────────────────────────────┤",
    "│                                                 │",
    "│  I'm a passionate developer who loves building  │",
    "│  elegant solutions to complex problems.         │",
    "│                                                 │",
    "│  Currently focused on:                          │",
    "│  → React & Next.js applications                 │",
    "│  → System design & architecture                 │",
    "│  → Developer experience & tooling               │",
    "│                                                 │",
    "└─────────────────────────────────────────────────┘",
  ],
  skills: [
    "// Technical Proficiencies",
    "",
    "Languages    → TypeScript, JavaScript, Python, Go",
    "Frontend     → React, Next.js, Tailwind CSS",
    "Backend      → Node.js, Express, PostgreSQL",
    "DevOps       → Docker, AWS, CI/CD",
    "Tools        → Git, VS Code, Figma",
    "",
    '> Run "projects" to see these skills in action',
  ],
  projects: [
    "Featured Projects:",
    "",
    "◆ Project Alpha",
    "  A full-stack SaaS application with 10k+ users",
    "  Stack: Next.js, PostgreSQL, Stripe",
    "",
    "◆ Open Source CLI Tool",
    "  Developer productivity tool with 500+ stars",
    "  Stack: Go, Cobra",
    "",
    "◆ Real-time Dashboard",
    "  Analytics platform with live data visualization",
    "  Stack: React, WebSockets, D3.js",
    "",
    "> View more on GitHub: github.com/prajas",
  ],
  contact: [
    "Let's connect!",
    "",
    "Email    → hello@prajas.dev",
    "GitHub   → github.com/prajas",
    "LinkedIn → linkedin.com/in/prajas",
    "Twitter  → @prajas_dev",
    "",
    "> Always open to interesting opportunities!",
  ],
  social: [
    "Social Links:",
    "",
    "🔗 GitHub    github.com/prajas",
    "🔗 LinkedIn  linkedin.com/in/prajas",
    "🔗 Twitter   @prajas_dev",
    "🔗 Blog      blog.prajas.dev",
  ],
};

export function TerminalLayout() {
  const [history, setHistory] = React.useState<TerminalLine[]>([
    { id: 0, type: "output", content: "Welcome to prajas.dev terminal v1.0.0" },
    { id: 1, type: "output", content: 'Type "help" for available commands.' },
    { id: 2, type: "output", content: "" },
  ]);
  const [currentInput, setCurrentInput] = React.useState("");
  const [lineCounter, setLineCounter] = React.useState(3);
  const terminalRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let newLines: TerminalLine[] = [
      { id: lineCounter, type: "prompt", content: "prajas@portfolio" },
      { id: lineCounter + 1, type: "command", content: trimmedCmd || " " },
    ];

    if (trimmedCmd === "clear") {
      setHistory([]);
      setLineCounter((prev) => prev + 2);
      setCurrentInput("");
      return;
    }

    if (trimmedCmd === "") {
      setHistory((prev) => [...prev, ...newLines]);
      setLineCounter((prev) => prev + 2);
      setCurrentInput("");
      return;
    }

    const output = COMMANDS[trimmedCmd];
    if (output) {
      newLines = [
        ...newLines,
        ...output.map((line, i) => ({
          id: lineCounter + 2 + i,
          type: "output" as const,
          content: line,
        })),
        { id: lineCounter + 2 + output.length, type: "output", content: "" },
      ];
    } else {
      newLines = [
        ...newLines,
        {
          id: lineCounter + 2,
          type: "error" as const,
          content: `Command not found: ${trimmedCmd}`,
        },
        {
          id: lineCounter + 3,
          type: "output",
          content: 'Type "help" for available commands.',
        },
        { id: lineCounter + 4, type: "output", content: "" },
      ];
    }

    setHistory((prev) => [...prev, ...newLines]);
    setLineCounter((prev) => prev + newLines.length);
    setCurrentInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(currentInput);
    }
  };

  const handleCommandClick = (cmd: string) => {
    executeCommand(cmd);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const quickCommands = ["help", "about", "skills", "projects", "contact"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      {/* Terminal Window */}
      <div className="rounded-xl overflow-hidden border border-border shadow-2xl bg-card">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <span>prajas@portfolio</span>
            <span className="text-primary">~</span>
          </div>
          <div className="w-16" /> {/* Spacer for balance */}
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          onClick={focusInput}
          className="h-100 sm:h-125 overflow-y-auto p-4 sm:p-6 font-mono text-sm cursor-text bg-terminal-bg"
        >
          <AnimatePresence mode="popLayout">
            {history.map((line) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  "leading-relaxed",
                  line.type === "prompt" && "text-primary inline",
                  line.type === "command" && "text-foreground inline ml-1",
                  line.type === "output" &&
                    "text-muted-foreground whitespace-pre",
                  line.type === "error" && "text-destructive",
                  line.type === "success" && "text-green-500"
                )}
              >
                {line.type === "prompt" ? (
                  <>
                    <span className="text-primary">{line.content}</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-chart-3">~</span>
                    <span className="text-foreground">$ </span>
                  </>
                ) : line.type === "command" ? (
                  <span>
                    {line.content}
                    <br />
                  </span>
                ) : (
                  <>
                    {line.content}
                    <br />
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Current Input Line */}
          <div className="flex items-center">
            <span className="text-primary">prajas@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-chart-3">~</span>
            <span className="text-foreground">$ </span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-foreground caret-primary ml-1"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-2 h-4 bg-primary"
            />
          </div>
        </div>

        {/* Quick Commands */}
        <div className="px-4 py-3 bg-muted/30 border-t border-border">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-muted-foreground mr-2 self-center">
              Quick:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommandClick(cmd)}
                className={cn(
                  "px-3 py-1.5 text-xs font-mono rounded-md",
                  "bg-secondary/50 hover:bg-secondary text-secondary-foreground",
                  "border border-border/50 hover:border-primary/50",
                  "transition-all duration-200 hover:scale-105"
                )}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info Section Below Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-muted-foreground font-mono">
          <span className="text-primary">Tip:</span> Try typing commands or
          click the quick buttons above
        </p>
      </motion.div>
    </motion.div>
  );
}
