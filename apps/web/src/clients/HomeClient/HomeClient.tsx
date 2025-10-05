'use client';

import { AppLayout } from '@/layouts';
import type { BreadcrumbItem } from '@/layouts/AppLayout/types';
import { useState } from 'react';

const menuItems = [
  { id: 'dashboard', label: '대시보드', icon: 'home' },
  { id: 'roadmap', label: '개인 로드맵', icon: 'home_storage' },
  { id: 'team', label: '팀 스페이스', icon: 'group' },
  { id: 'settings', label: '학교 연동', icon: 'school', hasCheck: true },
];

const HomeClient = () => {
  const [activeItemId, setActiveItemId] = useState<string>('dashboard');
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([{ label: '대시보드' }]);

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
