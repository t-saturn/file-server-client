'use client';

import { Search, HelpCircle, Settings, Moon, Sun } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from './theme-rpovider';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-4 py-2 gap-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl text-ctext capitalize font-bold font-text">archivos</span>
        </div>
      </div>

      <div className="hidden mx-auto sm:flex flex-1 w-full max-w-3xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ctext w-5 h-5" />
          <Input placeholder="Buscar en Drive" className="pl-10 bg-csurface0 border-0 rounded-full h-10 text-base outline-none" />
        </div>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleTheme} title={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}>
          {theme === 'light' ? <Moon className="w-5 h-5 text-ctext" /> : <Sun className="w-5 h-5 text-ctext" />}
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <HelpCircle className="w-5 h-5 text-ctext" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings className="w-5 h-5 text-ctext" />
        </Button>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback className="bg-cred text-cbase font-semibold">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
