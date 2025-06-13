'use client';

import { FileItem, useFiles } from '@/contexts/file-context';
import { FileIcon } from './file-icon';
import { MoreVertical, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface FileListProps {
  showTimeGroups?: boolean;
  sortBy?: 'name' | 'date' | 'size';
}

export function FileList({ showTimeGroups = false, sortBy = 'date' }: FileListProps) {
  const { files } = useFiles();

  const groupedFiles: Record<string, FileItem[]> = showTimeGroups
    ? {
      Ayer: files.slice(0, 3),
      'Antes esta semana': files.slice(3, 8),
      'La semana pasada': files.slice(8, 13),
      'El mes pasado': files.slice(13),
    }
    : { Todos: files };

  const formatFileSize = (size: string) => size;
  const formatDate = (date: string) => date;

  return (
    <div className="space-y-4 sm:space-y-6">
      {Object.entries(groupedFiles).map(([group, groupFiles]) => (
        <div key={group}>
          {showTimeGroups && <h3 className="text-sm font-medium text-gray-600 mb-2 sm:mb-3">{group}</h3>}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-2 lg:p-3 border-b border-gray-100 text-xs lg:text-sm font-medium text-gray-600">
              <div className="col-span-5">Nombre</div>
              <div className="col-span-2">Propietario</div>
              <div className="col-span-2">Tamaño</div>
              <div className="col-span-2">Ubicación</div>
              <div className="col-span-1"></div>
            </div>
            {groupFiles.map((file) => (
              <div
                key={file.id}
                className="grid grid-cols-2 lg:grid-cols-12 gap-2 p-2 lg:p-3 hover:bg-gray-50 border-b border-gray-50 last:border-b-0"
              >
                <div className="col-span-1 lg:col-span-5 flex items-center gap-2">
                  <FileIcon type={file.type} className="w-full max-w-5" />
                  <span className="text-xs sm:text-sm text-gray-900 truncate">{file.name}</span>
                  {file.shared && <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}
                </div>
                <div className="hidden lg:flex lg:col-span-2 items-center">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-5 h-5 sm:w-6 sm:h-6">
                      <AvatarFallback className={`text-xs text-white ${file.ownerColor}`}>
                        {file.owner.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs sm:text-sm text-gray-600 truncate">{file.owner}</span>
                  </div>
                </div>
                <div className="hidden lg:flex lg:col-span-2 items-center">
                  <span className="text-xs sm:text-sm text-gray-600">{formatFileSize(file.size)}</span>
                </div>
                <div className="hidden lg:flex lg:col-span-2 items-center">
                  <span className="text-xs sm:text-sm text-gray-600 truncate">{file.location}</span>
                </div>
                <div className="col-span-1 flex items-center justify-end">
                  <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                    <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}