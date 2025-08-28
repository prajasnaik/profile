'use client';

import { useEffect, useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
import { useIsMobile } from '@/hooks/use-mobile';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

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
  // Local state for command dialog
  const [isCmdDialogOpen, setIsCmdDialogOpen] = useState(false);
  const [pendingCmd, setPendingCmd] = useState(preRunCommand ?? '');
  const isMobile = useIsMobile();

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

  // Global hotkey: Ctrl+Alt+T to open command dialog or focus terminal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isT = e.key.toLowerCase() === 't';
      if (e.ctrlKey && e.altKey && isT) {
        e.preventDefault();
        if (currentMode === 'tech') {
          // Focus existing terminal input
          window.dispatchEvent(new CustomEvent('focus-terminal'));
        } else {
          setPendingCmd('');
          setIsCmdDialogOpen(true);
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [currentMode]);

  // Run command: sets parent preRunCommand, switch to tech, and focus terminal
  const handleRunCmd = () => {
    const cmd = (pendingCmd || '').trim();
    if (cmd.length === 0) {
      setIsCmdDialogOpen(false);
      onModeChange('tech');
      // Focus soon after mount/switch
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('focus-terminal'));
      }, 0);
      return;
    }
    onPreRunCommandChange?.(cmd);
    setIsCmdDialogOpen(false);
    onModeChange('tech');
    setTimeout(() => {
      // Signal TechMode to auto-run the latest preRunCommand and focus
      window.dispatchEvent(new CustomEvent('focus-terminal'));
    }, 0);
  };

  return (
    <SidebarProvider>
      <Sidebar className="border-r">
        <SidebarHeader className="h-14 flex items-center pt-5">
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
                onClick={() => {
                  setIsCmdDialogOpen(false);
                  onModeChange('professional');
                }}
                className={cn('h-8')}
                title="Professional"
              >
                <User className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Professional</span>
              </Button>
              <Button
                variant={currentMode === 'tech' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => {
                  setIsCmdDialogOpen(false);
                  onModeChange('tech');
                }}
                className={cn('h-8')}
                title="Open Terminal"
              >
                <Terminal className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Terminal</span>
              </Button>
              <Button
                variant={currentMode === 'fun' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => {
                  setIsCmdDialogOpen(false);
                  onModeChange('fun');
                }}
                className={cn('h-8')}
                title="Fun Mode"
              >
                <Palette className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Fun</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              {/* Desktop-only hint */}
              {!isMobile && (
                <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="hidden md:inline">Tip:</span>
                  <span className="hidden md:inline">Press</span>
                  <kbd className="px-1.5 py-0.5 rounded border bg-muted text-foreground font-mono text-[10px]">
                    Ctrl
                  </kbd>
                  +
                  <kbd className="px-1.5 py-0.5 rounded border bg-muted text-foreground font-mono text-[10px]">
                    Alt
                  </kbd>
                  +
                  <kbd className="px-1.5 py-0.5 rounded border bg-muted text-foreground font-mono text-[10px]">
                    T
                  </kbd>
                  <span className="hidden md:inline">
                    to run a quick command
                  </span>
                  <Badge variant="outline" className="ml-1">
                    Terminal
                  </Badge>
                </div>
              )}
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="p-4">{children}</div>
      </SidebarInset>

      {/* Command Runner Dialog */}
      <AlertDialog open={isCmdDialogOpen} onOpenChange={setIsCmdDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Run a terminal command</AlertDialogTitle>
            <AlertDialogDescription>
              Type a command to execute in the Terminal mode. Press Enter to run
              and switch.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="py-2">
            <Input
              autoFocus
              value={pendingCmd}
              onChange={(e) => setPendingCmd(e.target.value)}
              placeholder="e.g., help or projects"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleRunCmd();
                }
              }}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleRunCmd}>Run</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SidebarProvider>
  );
}
