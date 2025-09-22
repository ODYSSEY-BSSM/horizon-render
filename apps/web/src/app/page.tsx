'use client';

import { useState } from 'react';
import { AppLayout } from '../layouts';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'roadmap', label: 'My Roadmap' },
  { id: 'team', label: 'Team Space' },
  { id: 'settings', label: 'School Integration' },
];

const HomePage = () => {
  const [activeItemId, setActiveItemId] = useState<string>('dashboard');
  const [breadcrumbItems, setBreadcrumbItems] = useState([{ label: 'Dashboard' }]);

  const handleMenuItemClick = (itemId: string) => {
    setActiveItemId(itemId);
    const selectedMenu = menuItems.find((item) => item.id === itemId);
    if (selectedMenu) {
      setBreadcrumbItems([{ label: selectedMenu.label }]);
    }
  };

  return (
    <AppLayout
      activeItemId={activeItemId}
      onMenuItemClick={handleMenuItemClick}
      breadcrumbItems={breadcrumbItems}
    >
      <div>Home Page Content</div>
    </AppLayout>
  );
};

export default HomePage;
