'use client';

import { Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export const ViewToggle = ({ viewMode, onViewModeChange }: ViewToggleProps) => {
  return (
    <div className="flex border border-card rounded-lg overflow-hidden">
      <Button variant={viewMode === 'list' ? 'default' : 'ghost'} size="sm" className="rounded-none border-0" onClick={() => onViewModeChange('list')}>
        <List className="w-4 h-4" />
      </Button>
      <Button variant={viewMode === 'grid' ? 'default' : 'ghost'} size="sm" className="rounded-none border-0" onClick={() => onViewModeChange('grid')}>
        <Grid3X3 className="w-4 h-4" />
      </Button>
    </div>
  );
};
