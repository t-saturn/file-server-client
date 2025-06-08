'use client';

import { FileList } from '../file/file-list';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FilterBar() {
  return (
    <div className="flex gap-4 mb-6">
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
export function QuotaView() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-gray-900">Almacenamiento</h1>
        <div className="text-blue-600 text-sm cursor-pointer hover:underline">Copias de seguridad</div>
      </div>

      <div className="mb-8">
        <div className="text-4xl font-light text-gray-900 mb-2">
          536.2 MB <span className="text-base text-gray-500">de 20 GB utilizado(s)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '2.7%' }}></div>
        </div>
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>PDF</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>docx</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>xslx</span>
          </div>
        </div>
      </div>

      <FilterBar />
      <FileList sortBy="size" />
    </div>
  );
}
