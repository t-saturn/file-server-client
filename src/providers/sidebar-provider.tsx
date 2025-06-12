'use client';

import dynamic from 'next/dynamic';
import { FileProvider } from '@/contexts/file-context';
import { Header } from './header';

const Sidebar = dynamic(() => import('./sidebar').then((mod) => mod.Sidebar), { ssr: false });

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <FileProvider>
      <div className="h-full w-full flex flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-auto pr-2">{children}</div>
        </div>
      </div>
    </FileProvider>
  );
};
