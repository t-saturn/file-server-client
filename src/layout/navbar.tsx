/* eslint-disable @next/next/no-img-element */

import { Fullscreen } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/providers/sidebar-provider';
import { ModeToggle } from '@/providers/mode-toggle';

function Navbar() {
  const profile = {
    avatar: undefined,
    name: 'Anna Adame',
    role: 'Admin',
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement)
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('Error al intentar poner en fullscreen:', err);
      });
    else
      document.exitFullscreen().catch((err) => {
        console.error('Error al intentar salir de fullscreen:', err);
      });
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card/40 p-6 rounded-t-lg backdrop-blur-sm">
      <SidebarTrigger className="hover:cursor-pointer" />

      <div className="ml-auto flex items-center gap-4 text-muted-foreground">
        <ModeToggle />
        <Button variant="ghost" size="icon" className="hover:cursor-pointer" onClick={handleToggleFullscreen}>
          <Fullscreen className="h-5 w-5" />
          <span className="sr-only">Fullscreen</span>
        </Button>
        <div className="flex items-center gap-2">
          <img
            src={profile.avatar ? profile.avatar : 'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png'}
            alt="legion-commander"
            className="rounded-full w-10 h-10 object-cover"
          />
          <div className="hidden text-sm md:block">
            <div className="font-medium text-primary">{profile.name}</div>
            <div className="text-xs text-muted-foreground">{profile.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
