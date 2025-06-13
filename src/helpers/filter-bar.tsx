'use client';

import { IconSelectButton } from '@/components/custom/IconSelectButton';
import type { IconNode } from 'lucide-react';

type OptionGroup = {
  key: string;
  label: string;
  icon: IconNode;
  options: { key: string; label: string; icon?: IconNode }[];
};

interface FilterBarProps {
  options: OptionGroup[];
  onSelect: (selection: { key: string; option_selected: string }) => void;
}

export const FilterBar = ({ options, onSelect }: FilterBarProps) => {
  return (
    <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 justify-center">
      {options.map((group) => (
        <IconSelectButton key={group.key} config={group} onSelect={onSelect} />
      ))}
    </div>
  );
};