'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Plus, Home, Clock, Users, HardDrive, Share2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname(); // ejemplo: '/home/id_doc'
  const activeSection = pathname.split('/')[1]; // 'home'

  const menuItems = [
    { id: 'home', label: 'Página principal', icon: Home, href: '/home' },
    { id: 'recent', label: 'Recientes', icon: Clock, href: '/recent' },
    { id: 'activity', label: 'Actividad', icon: Users, href: '/activity' },
  ];

  const storageItems = [
    { id: 'my-drive', label: 'Mi unidad', icon: HardDrive, href: '/my-drive' },
    { id: 'shared', label: 'Compartidos', icon: Share2, href: '/shared' },
    { id: 'trash', label: 'Papelera', icon: Trash2, href: '/trash' },
    { id: 'quota', label: 'Almacenamiento', icon: HardDrive, href: '/quota' },
  ];

  return (
    <div className="w-64 flex flex-col">
      <div className="p-4">
        <Button className="w-full justify-start gap-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full h-12">
          <Plus className="w-5 h-5" />
          Nuevo
        </Button>
      </div>

      <nav className="flex-1 px-2">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link key={item.id} href={item.href}>
              <Button
                variant="ghost"
                className={cn('w-full justify-start gap-3 h-10 px-3 rounded-full', activeSection === item.id && 'bg-blue-100 text-blue-700 hover:bg-blue-100')}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="mt-6 space-y-1">
          {storageItems.map((item) => (
            <Link key={item.id} href={item.href}>
              <Button
                variant="ghost"
                className={cn('w-full justify-start gap-3 h-10 px-3 rounded-full', activeSection === item.id && 'bg-blue-100 text-blue-700 hover:bg-blue-100')}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          <div className="mb-2">536.2 MB de 20 GB en uso</div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div className="bg-blue-500 h-1 rounded-full" style={{ width: '2.7%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
