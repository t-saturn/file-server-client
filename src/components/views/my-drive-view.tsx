'use client';

import { FilterBar } from '@/helpers/filter-bar';
import { ViewToggle } from '@/providers/view-toogle';
import { useState } from 'react';
import { FileGrid } from '../file/file-grid';
import { FileList } from '../file/file-list';

export function MyDriveView() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-gray-900">Mi unidad</h1>
        <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      </div>

      <FilterBar />
      {viewMode === 'grid' ? <FileGrid /> : <FileList />}
    </div>
  );
}
