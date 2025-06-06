import { useState } from 'react';
import { ViewToggle } from '@/providers/view-toogle';
import { FilterBar } from '@/helpers/filter-bar';
import { FileGrid } from '../file/file-grid';
import { FileList } from '../file/file-list';
import { coconut, copyFilePath, home } from '@lucide/lab';
import type { IconNode } from 'lucide-react';

type OptionGroup = {
  key: string;
  label: string;
  icon: IconNode;
  options: { key: string; label: string; icon?: IconNode }[];
};

export function HomeView() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [selected, setSelected] = useState<{ key: string; option_selected: string } | undefined>(undefined);

  console.log(selected);

  const optionGroups: OptionGroup[] = [
    {
      key: 'type',
      label: 'Tipo',
      icon: home,
      options: [
        { key: 'pdf', label: 'PDF', icon: coconut },
        { key: 'document', label: 'Documentos', icon: copyFilePath },
        { key: 'spreadsheet', label: 'Hoja de cálculo', icon: home },
        { key: 'image', label: 'Imágenes y fotos', icon: coconut },
      ],
    },
    { key: 'people', label: 'Personas', icon: coconut, options: [] },
    { key: 'modify', label: 'Modificado', icon: coconut, options: [] },
    { key: 'location', label: 'Ubicación', icon: coconut, options: [] },
  ];

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl text-gray-700 mb-4">t-saturn, bienvenido de nuevo!</h1>
      </div>

      <FilterBar options={optionGroups} onSelect={setSelected} />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-900">Archivos sugeridos</h2>
        <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      </div>

      {viewMode === 'grid' ? <FileGrid /> : <FileList />}
    </div>
  );
}
