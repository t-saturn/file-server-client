'use client';

import { Search, HelpCircle, Settings, Grid3X3 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="text-xl text-gray-700 font-normal">Drive</span>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input placeholder="Buscar en Drive" className="pl-10 bg-gray-100 border-0 rounded-full h-12 text-base" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <HelpCircle className="w-5 h-5 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings className="w-5 h-5 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Grid3X3 className="w-5 h-5 text-gray-600" />
        </Button>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback className="bg-red-500 text-white">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
