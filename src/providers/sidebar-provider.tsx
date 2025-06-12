'use client';

import dynamic from 'next/dynamic';
import { FileProvider } from '@/contexts/file-context';
import { Header } from './header';

const Sidebar = dynamic(() => import('./sidebar').then((mod) => mod.Sidebar), { ssr: false });

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <FileProvider>
      <div className="h-screen flex flex-col bg-ccrust pr-2">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-auto">{children}</div>
        </div>
      </div>
    </FileProvider>
  );
};
