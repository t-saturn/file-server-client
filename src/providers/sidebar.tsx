'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Plus, Home, Clock, Users, HardDrive, Share2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DividerItem, NavigationItem } from '@/types/sidebar';

// Define SidebarItem type for navigation items and dividers
type SidebarItem = NavigationItem | DividerItem;

export function Sidebar() {
  const pathname = usePathname();
  const activeSection = pathname.split('/')[1];
  const [isExpanded, setIsExpanded] = useState(true);

  // Navigation items configuration
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

  // Common button styles for navigation items
  const buttonStyles = cn(
    'w-full justify-start gap-3 h-10 px-3 rounded-full hover:bg-csky/10 dark:hover:bg-csky/10 cursor-pointer',
    'transition-[background-color,color] duration-300 ease-out',
    !isExpanded && 'justify-center'
  );

  // Common styles for the toggle button
  const toggleButtonStyles = cn(
    'hidden md:flex p-2 rounded-full h-8 w-8 transition-[background-color,color] duration-300 ease-out',
    'bg-white/80 hover:bg-csky/10 border border-csky/10',
    'shadow-sm hover:shadow-md backdrop-blur-sm',
    'text-ctext hover:text-cblue'
  );

  // Common styles for the "Nuevo" button
  const newButtonStyles = cn(
    'flex-1 justify-start gap-3 bg-white border border-csky/20 text-ctext hover:bg-csky/10 rounded-full h-12',
    'transition-[background-color,color] duration-300 ease-out',
    !isExpanded && 'justify-center'
  );

  return (
    <TooltipProvider>
      <div className={cn('flex flex-col h-full transition-all duration-300', isExpanded ? 'w-64' : 'w-16')}>
        {/* Header with toggle and new buttons */}
        <div className={cn('p-4 flex gap-2', isExpanded ? 'flex-row items-center' : 'flex-col')}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className={cn(toggleButtonStyles, isExpanded && 'order-last')}
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={isExpanded ? 'Contraer barra lateral' : 'Expandir barra lateral'}
              >
                {isExpanded ? (
                  <ChevronLeft className="w-4 h-4 transition-colors duration-300" />
                ) : (
                  <ChevronRight className="w-4 h-4 transition-colors duration-300" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{isExpanded ? 'Contraer barra lateral' : 'Expandir barra lateral'}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className={cn(newButtonStyles, isExpanded && 'order-first')} aria-label="Crear nuevo elemento">
                <Plus className="w-5 h-5" />
                {isExpanded && <span>Nuevo</span>}
              </Button>
            </TooltipTrigger>
            {!isExpanded && <TooltipContent>Nuevo</TooltipContent>}
          </Tooltip>
        </div>

        {/* Navigation menu */}
        <nav className="flex-1 px-2">
          <div className="flex flex-col gap-1">
            {items.map((item, index) =>
              item.divider ? (
                <div key={index} className={cn('my-3 border-t border-csky/10', !isExpanded && 'hidden')} />
              ) : (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className={cn(buttonStyles, activeSection === item.id && 'bg-csky/20 text-cblue hover:bg-csky/30')}
                        aria-label={item.label}
                      >
                        <item.icon className="w-5 h-5 transition-colors duration-300" />
                        {isExpanded && <span>{item.label}</span>}
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  {!isExpanded && <TooltipContent side="right">{item.label}</TooltipContent>}
                </Tooltip>
              )
            )}
          </div>
        </nav>

        {/* Storage information footer */}
        <div className={cn('p-4 border-t border-csky/10 flex flex-col gap-2 transition-all duration-300', !isExpanded && 'hidden')}>
          <div className="text-sm text-csubtext0 flex justify-between items-center">
            <span className="sm:hidden">536.2 MB / 20 GB</span>
            <span className="hidden sm:block">536.2 MB de 20 GB en uso</span>
          </div>
          <div className="w-full bg-ring rounded-full h-1 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cblue to-csky h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: '2.7%' }}
            />
          </div>
          <div className="text-xs text-csubtext0/80">Espacio disponible: 19.5 GB</div>
        </div>
      </div>
    </TooltipProvider>
  );
}