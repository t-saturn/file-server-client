'use client';

import { RecentView } from './views/recent-view';

import { MyDriveView } from './views/my-drive-view';
import { HomeView } from './views/home-viewer';
import { QuotaView } from './views/quota-view';

interface MainContentProps {
  currentView: string;
}

export function MainContent({ currentView }: MainContentProps) {
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'recent':
        return <RecentView />;
      case 'quota':
        return <QuotaView />;
      case 'my-drive':
        return <MyDriveView />;
      default:
        return <HomeView />;
    }
  };

  return <div className="flex-1 overflow-auto">{renderView()}</div>;
}
