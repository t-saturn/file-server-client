'use client';

import { useFiles } from '@/contexts/file-context';
import { FileIcon } from './file-icon';
import { MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FileGrid() {
  const { files } = useFiles();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {files.slice(0, 12).map((file) => (
        <div key={file.id} className="group relative">
          <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <FileIcon type={file.type} className="w-12 h-12 mb-2" />
              <div className="text-sm font-medium text-gray-900 truncate w-full">{file.name}</div>
              <div className="text-xs text-gray-500 mt-1">{file.owner}</div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}
