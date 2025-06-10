'use client';

import { ChevronDown, Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import type { IconNode } from 'lucide-react';

type SubOption = {
  key: string;
  label: string;
  icon?: IconNode;
};

interface IconSelectGroup {
  key: string;
  label: string;
  icon: IconNode;
  options: SubOption[];
}

interface IconSelectButtonProps {
  config: IconSelectGroup;
  onSelect: (result: { key: string; option_selected: string }) => void;
}

export const IconSelectButton = ({ config, onSelect }: IconSelectButtonProps) => {
  if (config.options.length === 0) {
    return (
      <Button variant="custom_rounded" className="gap-2">
        <Icon iconNode={config.icon} />
        {config.label}
        <ChevronDown className="w-4 h-4" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="custom_rounded" className="gap-2">
          <Icon iconNode={config.icon} className="w-4 h-4" />
          {config.label}
          <ChevronDown className="w-4 h-4 ml-auto" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        {config.options.map((option) => (
          <DropdownMenuItem key={option.key} onClick={() => onSelect({ key: config.key, option_selected: option.key })} className="gap-2 cursor-pointer">
            {option.icon && <Icon iconNode={option.icon} className="w-4 h-4" />}
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
