'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Plus, Home, Clock, Users, HardDrive, Share2, Trash2, PanelLeft, PanelRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DividerItem, NavigationItem } from '@/types/sidebar';

type SidebarItem = NavigationItem | DividerItem;

export function Sidebar() {
  const pathname = usePathname();
  const activeSection = pathname.split('/')[1];
  const [isExpanded, setIsExpanded] = useState(typeof window !== 'undefined' && window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => setIsExpanded(window.innerWidth >= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items: SidebarItem[] = [
    { id: 'home', label: 'Página principal', icon: Home, href: '/home' },
    { id: 'recent', label: 'Recientes', icon: Clock, href: '/recent' },
    { id: 'activity', label: 'Actividad', icon: Users, href: '/activity' },
    { divider: true },
    { id: 'my-drive', label: 'Mi unidad', icon: HardDrive, href: '/my-drive' },
    { id: 'shared', label: 'Compartidos', icon: Share2, href: '/shared' },
    { id: 'trash', label: 'Papelera', icon: Trash2, href: '/trash' },
    { id: 'quota', label: 'Almacenamiento', icon: HardDrive, href: '/quota' },
  ];

  const buttonStyles = cn('w-full h-10 px-3 rounded-full hover:bg-csky/10', isExpanded ? 'justify-start gap-3' : 'justify-center');

  const toggleButtonStyles = cn('flex p-2 rounded-full h-8 w-8 bg-ccrust hover:bg-crust text-ctext hover:text-cblue sidebar-trigger', isExpanded && 'order-last');

  const newButtonStyles = cn('flex-1 h-12 rounded-full bg-csky/10 hover:bg-csky/20 text-ctext', isExpanded ? 'justify-start gap-3' : 'justify-center');

  return (
    <div className={cn('flex flex-col h-full transition-all duration-300', isExpanded ? 'w-64' : 'w-16')}>
      <div className={cn('p-4 flex gap-2', isExpanded ? 'flex-row items-center' : 'flex-col')}>
        <Button className={toggleButtonStyles} onClick={() => setIsExpanded(!isExpanded)} aria-label={isExpanded ? 'Contraer barra lateral' : 'Expandir barra lateral'}>
          {isExpanded ? <PanelLeft className="w-4 h-4" /> : <PanelRight className="w-4 h-4" />}
        </Button>
        <Button className={newButtonStyles} aria-label="Crear nuevo elemento">
          <Plus className="w-5 h-5" />
          {isExpanded && <span>Nuevo</span>}
        </Button>
      </div>

      <nav className="flex-1 px-2">
        <div className="flex flex-col gap-1">
          {items.map((item, index) =>
            item.divider ? (
              isExpanded && <div key={index} className="my-3 border-t border-csky/10" />
            ) : (
              <Link key={item.id} href={item.href}>
                <Button variant="ghost" className={cn(buttonStyles, activeSection === item.id && 'bg-csky/20 text-cblue hover:bg-csky/30')} aria-label={item.label}>
                  <item.icon className="w-5 h-5" />
                  {isExpanded && <span>{item.label}</span>}
                </Button>
              </Link>
            ),
          )}
        </div>
      </nav>

      {isExpanded && (
        <div className="p-4 border-t border-csky/10 flex flex-col gap-2">
          <div className="text-sm text-csubtext0 flex justify-between items-center">
            <span className="sm:hidden">536.2 MB / 20 GB</span>
            <span className="hidden sm:block">536.2 MB de 20 GB en uso</span>
          </div>
          <div className="w-full bg-ring rounded-full h-1 overflow-hidden">
            <div className="bg-gradient-to-r from-cblue to-csky h-full rounded-full transition-all duration-500" style={{ width: '2.7%' }} />
          </div>
          <div className="text-xs text-csubtext0/80">Espacio disponible: 19.5 GB</div>
        </div>
      )}
    </div>
  );
}
