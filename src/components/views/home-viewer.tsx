'use client';

import { useState } from 'react';
import { ViewToggle } from '@/providers/view-toogle';
import { FilterBar } from '@/helpers/filter-bar';
import { FileGrid } from '../file/file-grid';
import { FileList } from '../file/file-list';

export function HomeView() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl text-gray-700 mb-4">Te damos la bienvenida a Drive</h1>
      </div>

      <FilterBar />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-900">Archivos sugeridos</h2>
        <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      </div>

      {viewMode === 'grid' ? <FileGrid /> : <FileList />}
    </div>
  );
}
