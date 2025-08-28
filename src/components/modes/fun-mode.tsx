'use client';

import { ViewMode } from '@/app/page';

interface FunModeProps {
  onModeChange: (mode: ViewMode | null) => void;
}

export function FunMode({ onModeChange }: FunModeProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
          <p className="text-muted-foreground">
            This creative and playful interface is currently under development.
          </p>
        </div>
      </div>
    </div>
  );
}
