'use client';

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
