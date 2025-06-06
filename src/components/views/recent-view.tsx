'use client';

import { useState } from 'react';
import { ViewToggle } from '@/providers/view-toogle';
import { FilterBar } from '@/helpers/filter-bar';
import { FileList } from '../file/file-list';

export function RecentView() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-gray-900">Recientes</h1>
        <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      </div>

      <FilterBar />
      <FileList showTimeGroups />
    </div>
  );
}
