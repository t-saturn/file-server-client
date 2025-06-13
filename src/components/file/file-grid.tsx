'use client';

import { useFiles } from '@/contexts/file-context';
import { FileIcon } from './file-icon';
import { MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FileGrid() {
  const { files } = useFiles();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
      {files.slice(0, 12).map((file) => (
        <div key={file.id} className="group relative">
          <div className="bg-card border rounded-md p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <FileIcon type={file.type} className="w-10 h-10 sm:w-12 sm:h-12 mb-1 sm:mb-2" />
              <div className="text-xs sm:text-sm font-medium text-foreground truncate w-full">{file.name}</div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1 right-1 sm:top-2 sm:right-2 opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 sm:w-8 sm:h-8"
          >
            <MoreVertical className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}