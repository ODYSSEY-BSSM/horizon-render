'use client';

import { useState } from 'react';
import { AppLayout } from '../../../layouts';
import type { BreadcrumbItem } from '../../../layouts/AppLayout/types';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'roadmap', label: 'My Roadmap' },
  { id: 'team', label: 'Team Space' },
  { id: 'settings', label: 'School Integration' },
];

const HomeClient = () => {
  const [activeItemId, setActiveItemId] = useState<string>('dashboard');
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([
    { label: 'Dashboard' },
  ]);

  const handleMenuItemClick = (itemId: string) => {
    setActiveItemId(itemId);
    const selectedMenu = menuItems.find((item) => item.id === itemId);
    if (selectedMenu) {
      setBreadcrumbItems([{ label: selectedMenu.label }]);
    }
  };

  return (
    <AppLayout
      menuItems={menuItems}
      activeItemId={activeItemId}
      onMenuItemClick={handleMenuItemClick}
      breadcrumbItems={breadcrumbItems}
    >
      <div>홈 페이지 콘텐츠</div>
    </AppLayout>
  );
};

export default HomeClient;
