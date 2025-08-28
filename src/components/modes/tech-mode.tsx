'use client';

import { useEffect, useRef, useState } from 'react';
import { ViewMode } from '@/app/page';
import { resumeData } from '@/lib/resume-data';
import type { SkillCategory, Project } from '@/lib/types';

interface TechModeProps {
  onModeChange: (mode: ViewMode | null) => void;
  preRunCommand?: string;
}

export function TechMode({ onModeChange, preRunCommand }: TechModeProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to the terminal interface!',
    'Type "help" to see available commands.',
    '',
  ]);
  const preRunApplied = useRef(false);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const commands = {
    help: () => [
      'Available commands:',
      '  about       - Show background information',
      '  skills      - List technical skills',
      '  projects    - Show project portfolio',
      '  resume      - Download resume PDF',
      '  clear       - Clear terminal',
      '  professional- Switch to professional mode',
      '  fun         - Switch to fun mode',
      '  help        - Show this help message',
    ],
    about: () => [
      `Name: ${resumeData.personalInfo.name}`,
      `Email: ${resumeData.personalInfo.email}`,
      `Location: ${resumeData.personalInfo.location}`,
      '',
      resumeData.background.introduction,
    ],
    skills: () => {
      const output = ['Technical Skills:'];
      resumeData.skills.forEach((category: SkillCategory) => {
        output.push(`\n${category.category}:`);
        category.items.forEach((skill: string) => {
          output.push(`  - ${skill}`);
        });
      });
      return output;
    },
    projects: () => {
      const output = ['Projects:'];
      resumeData.projects.forEach((project: Project) => {
        output.push(`\n${project.title} (${project.period})`);
        output.push(`  ${project.description}`);
        output.push(`  Technologies: ${project.technologies.join(', ')}`);
        if (project.link) {
          output.push(`  Link: ${project.link}`);
        }
      });
      return output;
    },
    resume: () => {
      downloadResume();
      return [
        'Downloading resume.pdf...',
        'Resume download initiated successfully!',
        'Check your downloads folder for the PDF file.',
      ];
    },
    professional: () => {
      onModeChange('professional');
      return [
        'Switching to professional mode...',
        'Loading professional interface.',
      ];
    },
    fun: () => {
      onModeChange('fun');
      return ['Switching to fun mode...', 'Loading fun interface... 🎉'];
    },
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const newHistory = [...history, `$ ${cmd}`];

    if (trimmedCmd in commands) {
      const output = commands[trimmedCmd as keyof typeof commands]();
      newHistory.push(...output, '');
    } else if (trimmedCmd === '') {
      newHistory.push('');
    } else {
      newHistory.push(
        `Command not found: ${trimmedCmd}`,
        'Type "help" for available commands.',
        ''
      );
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  // Run pre-configured command when terminal opens
  useEffect(() => {
    if (preRunCommand && !preRunApplied.current) {
      preRunApplied.current = true;
      handleCommand(preRunCommand);
    }
  }, [preRunCommand]);

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
              className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono"
              placeholder=""
              autoFocus
            />
          </div>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          <p>
            This is a simulated terminal interface. Try typing "help" to get
            started.
          </p>
        </div>
      </div>
    </div>
  );
}
