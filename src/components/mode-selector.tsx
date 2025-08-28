'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';
import { ViewMode } from '@/app/page';

interface ModeSelectorProps {
  onModeSelect: (mode: ViewMode) => void;
}

export function ModeSelector({ onModeSelect }: ModeSelectorProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Theme toggle in top right */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose your preferred viewing experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:bg-accent transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="text-center">Professional</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Clean, corporate-style interface with sidebar navigation
              </p>
              <Button
                onClick={() => onModeSelect('professional')}
                variant="outline"
              >
                Enter Professional Mode
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:bg-accent transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="text-center">Tech-Friendly</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Interactive terminal interface for developers
              </p>
              <Button onClick={() => onModeSelect('tech')} variant="outline">
                Enter Terminal Mode
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:bg-accent transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="text-center">Fun</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Creative and playful interface (Coming Soon)
              </p>
              <Button
                onClick={() => onModeSelect('fun')}
                variant="outline"
                disabled
              >
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
