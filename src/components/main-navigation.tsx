'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { ViewMode } from '@/app/page';
import {
  User,
  Code,
  Briefcase,
  FileText,
  Terminal,
  Palette,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface MainNavigationProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  onSectionChange?: (section: string) => void;
  activeSection?: string;
  preRunCommand?: string;
  onPreRunCommandChange?: (cmd: string) => void;
  children?: ReactNode;
}

export function MainNavigation({
  currentMode,
  onModeChange,
  onSectionChange,
  activeSection,
  preRunCommand,
  onPreRunCommandChange,
  children,
}: MainNavigationProps) {
  const handleSectionClick = (section: string) => {
    if (currentMode !== 'professional') onModeChange('professional');
    onSectionChange?.(section);
  };

  const SectionButton = ({
    id,
    label,
    icon: Icon,
  }: {
    id: string;
    label: string;
    icon: any;
  }) => (
    <SidebarMenuItem>
      <SidebarMenuButton
        onClick={() => handleSectionClick(id)}
        isActive={currentMode === 'professional' && activeSection === id}
      >
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <SidebarProvider>
      <Sidebar className="border-r">
        <SidebarHeader className="h-14 flex items-center">
          <div className="text-sm font-semibold px-2">Portfolio</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Professional</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SectionButton id="background" label="Background" icon={User} />
                <SectionButton id="skills" label="Skills" icon={Code} />
                <SectionButton
                  id="projects"
                  label="Projects"
                  icon={Briefcase}
                />
                <SectionButton id="resume" label="Resume" icon={FileText} />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarSeparator />
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-40 bg-background border-b">
          <div className="h-14 px-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Button
                variant={currentMode === 'professional' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => onModeChange('professional')}
                className={cn('h-8')}
                title="Professional"
              >
                <User className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Professional</span>
              </Button>
            </div>

            <div className="flex items-center gap-2 min-w-[200px] w-full max-w-xl">
              <Input
                value={preRunCommand ?? ''}
                onChange={(e) => onPreRunCommandChange?.(e.target.value)}
                placeholder="Pre-run command for Terminal (e.g., help)"
                className="h-8"
              />
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant={currentMode === 'tech' ? 'secondary' : 'ghost'}
                size="icon"
                className="h-8 w-8"
                onClick={() => onModeChange('tech')}
                title="Open Terminal"
              >
                <Terminal className="h-4 w-4" />
              </Button>
              <Button
                variant={currentMode === 'fun' ? 'secondary' : 'ghost'}
                size="icon"
                className="h-8 w-8"
                onClick={() => onModeChange('fun')}
                title="Fun Mode"
              >
                <Palette className="h-4 w-4" />
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
