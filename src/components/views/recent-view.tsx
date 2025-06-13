'use client';

import { useState } from 'react';
import { ViewToggle } from '@/providers/view-toogle';
import { FileList } from '../file/file-list';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FileGrid } from '../file/file-grid';

export function FilterBar() {
  return (
    <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 justify-start py-4">
      <Button variant="outline" className="gap-2">
        Tipo
        <ChevronDown className="w-4 h-4" />
      </Button>
      <Button variant="outline" className="gap-2">
        Personas
        <ChevronDown className="w-4 h-4" />
      </Button>
      <Button variant="outline" className="gap-2">
        Modificado
        <ChevronDown className="w-4 h-4" />
      </Button>
      <Button variant="outline" className="gap-2">
        Ubicación
        <ChevronDown className="w-4 h-4" />
      </Button>
    </div>
  );
}

export function RecentView() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-ctext">Recientes</h1>
        <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      </div>

      <FilterBar />

      {viewMode === 'grid' ? <FileGrid /> : <FileList showTimeGroups />}

    </div>
  );
}
