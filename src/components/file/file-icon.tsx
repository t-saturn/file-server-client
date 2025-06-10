'use client';

import { FileText, ImageIcon, Video, Music, Archive, File, Folder } from 'lucide-react';

interface FileIconProps {
  type: string;
  className?: string;
}

export function FileIcon({ type, className = 'w-5 h-5' }: FileIconProps) {
  const getIcon = () => {
    switch (type) {
      case 'folder':
        return <Folder className={`${className} text-blue-500`} />;
      case 'document':
        return <FileText className={`${className} text-blue-600`} />;
      case 'pdf':
        return <FileText className={`${className} text-red-600`} />;
      case 'image':
        return <ImageIcon className={`${className} text-green-600`} />;
      case 'video':
        return <Video className={`${className} text-purple-600`} />;
      case 'audio':
        return <Music className={`${className} text-orange-600`} />;
      case 'archive':
        return <Archive className={`${className} text-yellow-600`} />;
      default:
        return <File className={`${className} text-gray-600`} />;
    }
  };

  return getIcon();
}
