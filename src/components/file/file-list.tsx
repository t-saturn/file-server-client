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
  const groupedFiles = showTimeGroups
    ? { Ayer: files.slice(0, 3), 'Antes esta semana': files.slice(3, 8), 'La semana pasada': files.slice(8, 13), 'El mes pasado': files.slice(13) }
    : { Todos: files };
  const formatFileSize = (size: string) => size;
  const formatDate = (date: string) => date;

  return (
    <div className="space-y-4 sm:space-y-6">
      {Object.entries(groupedFiles).map(([group, groupFiles]) => (
        <div key={group}>
          {showTimeGroups && <h3 className="text-sm font-medium mb-2 sm:mb-3">{group}</h3>}
          <div className="bg-cbase rounded-lg border border-border overflow-hidden">
            <div className="grid lg:grid-cols-12 xl:gap-2 p-3 border-b border-border text-xs lg:text-sm font-medium text-foreground">
              <div className="col-span-4">Nombre</div>
              <div className="hidden xl:grid xl:col-span-3">Propietario</div>
              <div className="hidden xl:grid xl:col-span-2">Tamaño</div>
              <div className="hidden xl:grid xl:col-span-2">Ubicación</div>
              <div className="col-span-1"></div>
            </div>
            {groupFiles.map((file: FileItem) => (
              <div key={file.id} className="grid grid-cols-2 lg:grid-cols-12 gap-2 p-2 lg:p-3 hover:bg-muted border-b border-border last:border-b-0">
                <div className="col-span-1 lg:col-span-4 flex items-center gap-2">
                  <FileIcon type={file.type} className="w-full max-w-5" />
                  <span className="text-xs sm:text-sm text-foreground truncate">{file.name}</span>
                  {file.shared && <Users className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />}
                </div>
                <div className="hidden lg:flex lg:col-span-3 items-center">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-5 h-5 sm:w-6 sm:h-6">
                      <AvatarFallback className={`text-xs text-foreground ${file.ownerColor}`}>{file.owner.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs sm:text-sm text-muted-foreground truncate">{file.owner}</span>
                  </div>
                </div>
                <div className="hidden lg:flex lg:col-span-2 items-center">
                  <span className="text-xs sm:text-sm text-muted-foreground">{formatFileSize(file.size)}</span>
                </div>
                <div className="hidden lg:flex lg:col-span-2 items-center">
                  <span className="text-xs sm:text-sm text-muted-foreground truncate">{file.location}</span>
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