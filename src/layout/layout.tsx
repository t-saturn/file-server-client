'use client';

import React from 'react';

import Navbar from './navbar';
import AppSidebar from './sidebar';

import { useSessionMonitor } from '@/hooks/useSessionMonitor';
import { useUserData } from '@/utils/user-data';

interface LayoutProps {
  session: any;
  children: React.ReactNode;
}

export default function Layout({ children, session }: LayoutProps) {
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const { isReady, ...userData } = useUserData();

  // Usar el hook para monitorear la sesión
  useSessionMonitor({
    session,
    isReady,
    browserId: userData.browserId || undefined,
    browser: userData.browser || undefined,
    browserVersion: userData.browserVersion || undefined,
    city: userData.city || undefined,
    country: userData.country || undefined,
    deviceModel: userData.deviceModel || undefined,
    deviceType: userData.deviceType || undefined,
    ipAddress: userData.ipAddress || undefined,
    language: userData.language || undefined,
    latitude: userData.latitude || undefined,
    longitude: userData.longitude || undefined,
    os: userData.os || undefined,
    osVersion: userData.osVersion || undefined,
  });

  return (
    <div className="flex h-screen bg-background p-4 w-full gap-4">
      <AppSidebar session={session} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
      <SidebarInset className="flex-1 rounded-lg border border-border bg-card shadow-sm overflow-y-auto">
        <Navbar />
        <div className="p-4">{children}</div>
      </SidebarInset>
    </div>
  );
}
