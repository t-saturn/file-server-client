'use client';

import { createContext, useContext, type ReactNode } from 'react';

export interface FileItem {
  id: string;
  name: string;
  type: string;
  size: string;
  owner: string;
  ownerColor: string;
  location: string;
  modifiedDate: string;
  shared?: boolean;
}

interface FileContextType {
  files: FileItem[];
}

const FileContext = createContext<FileContextType | undefined>(undefined);

const mockFiles: FileItem[] = [
  {
    id: '1',
    name: 'md-19.docx',
    type: 'document',
    size: '482 KB',
    owner: 'yo',
    ownerColor: 'bg-red-500',
    location: 'Mi unidad',
    modifiedDate: '4 jun',
  },
  {
    id: '2',
    name: 'Laboratorio N° 09.docx',
    type: 'document',
    size: '4.9 MB',
    owner: 'yo',
    ownerColor: 'bg-red-500',
    location: 'Mi unidad',
    modifiedDate: '3 jun',
  },
  {
    id: '3',
    name: 'ds-l8.docx',
    type: 'document',
    size: '556 KB',
    owner: 'oscar.meneses@unsch.edu.pe',
    ownerColor: 'bg-purple-500',
    location: 'Compartidos conmigo',
    modifiedDate: '3 jun',
    shared: true,
  },
  {
    id: '4',
    name: 'Informe de asistencia a iqd-taou-mvz (2025-05-31 08:20)',
    type: 'document',
    size: '1 KB',
    owner: 'yo',
    ownerColor: 'bg-red-500',
    location: '2025-05-31 08:20 iqd-t...',
    modifiedDate: '31 may',
  },
  {
    id: '5',
    name: 'IS01-S RAMOS LOPEZ - Laboratorio 08',
    type: 'document',
    size: '1 KB',
    owner: 'yo',
    ownerColor: 'bg-red-500',
    location: 'Compartidos conmigo',
    modifiedDate: '30 may',
    shared: true,
  },
  {
    id: '6',
    name: 'se-mallas.docx',
    type: 'document',
    size: '589 KB',
    owner: 'christian.lezama@unsch.edu.pe',
    ownerColor: 'bg-pink-500',
    location: 'Compartidos conmigo',
    modifiedDate: '30 may',
    shared: true,
  },
  {
    id: '7',
    name: '18.- ELECTRODINÁMICA.pdf',
    type: 'pdf',
    size: '15.9 MB',
    owner: 'aingresar.iqb@gmail.com',
    ownerColor: 'bg-orange-500',
    location: 'QUZCANO-PHISIC S',
    modifiedDate: '14 may',
  },
  {
    id: '8',
    name: 'Libro-curso.pdf',
    type: 'pdf',
    size: '10.1 MB',
    owner: 'felipe.tapia.co@gmail.com',
    ownerColor: 'bg-gray-500',
    location: 'Matemáticas y física',
    modifiedDate: '9 may',
  },
  {
    id: '9',
    name: 'Resultados_1erExamen20250209_175547.pdf',
    type: 'pdf',
    size: '1.8 MB',
    owner: 'cepre@unsch.edu.pe',
    ownerColor: 'bg-teal-500',
    location: 'Compartidos conmigo',
    modifiedDate: '29 may',
    shared: true,
  },
  {
    id: '10',
    name: 'md-l8_merged.pdf',
    type: 'pdf',
    size: '13.4 MB',
    owner: 'javier.portillo@unsch.edu.pe',
    ownerColor: 'bg-blue-500',
    location: 'Compartidos conmigo',
    modifiedDate: '4 jun',
    shared: true,
  },
  {
    id: '11',
    name: 'Vid 20211027 192919-1.mp4',
    type: 'video',
    size: '64.1 MB',
    owner: 'yo',
    ownerColor: 'bg-red-500',
    location: 'Mi unidad',
    modifiedDate: '27 oct 2021',
  },
  {
    id: '12',
    name: '20240809_113657.m4a.mp3',
    type: 'audio',
    size: '17.9 MB',
    owner: 'yo',
    ownerColor: 'bg-red-500',
    location: 'Mi unidad',
    modifiedDate: '9 ago 2024',
  },
  {
    id: '13',
    name: 'LABORATORIO 2 ING SISTEMAS.pptx',
    type: 'document',
    size: '14.5 MB',
    owner: 'yo',
    ownerColor: 'bg-red-500',
    location: 'Mi unidad',
    modifiedDate: '15 sep 2024',
  },
  {
    id: '14',
    name: '2025',
    type: 'folder',
    size: '',
    owner: 'yo',
    ownerColor: 'bg-red-500',
    location: 'Mi unidad',
    modifiedDate: '4 jun',
  },
  {
    id: '15',
    name: 'Matemáticas y física',
    type: 'folder',
    size: '',
    owner: 'yo',
    ownerColor: 'bg-red-500',
    location: 'Compartidos conmigo',
    modifiedDate: '3 jun',
    shared: true,
  },
];

export function FileProvider({ children }: { children: ReactNode }) {
  return <FileContext.Provider value={{ files: mockFiles }}>{children}</FileContext.Provider>;
}

export function useFiles() {
  const context = useContext(FileContext);
  if (context === undefined) {
    throw new Error('useFiles must be used within a FileProvider');
  }
  return context;
}
