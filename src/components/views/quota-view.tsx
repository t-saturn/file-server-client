'use client';

import { FileList } from '../file/file-list';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
export function QuotaView() {
  return (
    <div className="p-6">
      <div className="flex justify-start items-center mb-6">
        <h1 className="text-2xl font-medium text-ctext">Almacenamiento</h1>
      </div>

      <div className="mb-4 sm:mb-8">
        <div className="flex flex-col items-start sm:items-end sm:flex-row text-3xl sm:text-5xl font-light text-foreground mb-2 sm:mb-4">
          <p>536.2 MB</p>
          <span className="text-xs sm:text-base text-csubtext0 ml-1"> de 20 GB utilizado(s)</span>
        </div>
        <div className="w-full bg-cmantle rounded-full h-1 sm:h-2 mb-2 sm:mb-4">
          <div className="bg-blue-500 h-1 sm:h-2 rounded-full" style={{ width: '2.7%' }}></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
            <span>PDF</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <span>docx</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <span>xslx</span>
          </div>
        </div>
      </div>

      <FilterBar />
      <FileList sortBy="size" />
    </div>
  );
}
