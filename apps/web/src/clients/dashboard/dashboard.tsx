'use client';

import { GreetingMessage, InfoCard, RoadmapList } from '@/components/dashboard';
import { AppLayout } from '@/layouts';
import type { BreadcrumbItem } from '@/layouts/AppLayout/types';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { useState } from 'react';

const menuItems = [
  { id: 'dashboard', label: '대시보드', icon: 'home' },
  { id: 'roadmap', label: '개인 로드맵', icon: 'home_storage' },
  { id: 'team', label: '팀 스페이스', icon: 'group' },
  { id: 'settings', label: '학교 연동', icon: 'school', hasCheck: true },
];

const Dashboard = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

  const handleMenuItemClick = (itemId: string) => {
    setActiveMenuItem(itemId);
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: '홈', path: '/' },
    { label: '대시보드', path: '/dashboard' },
  ];

  return (
    <AppLayout
      menuItems={menuItems}
      activeItemId={activeMenuItem}
      onMenuItemClick={handleMenuItemClick}
      breadcrumbItems={breadcrumbItems}
    >
      <StyledContent>
        <GreetingMessage />
        <StyledInfoCards>
          <InfoCard category='my roadmaps' count='0' subCount='0' />
          <InfoCard category='team roadmaps' count='0' subCount='0' />
          <InfoCard category='connected school' hasItem='false' />
        </StyledInfoCards>
        <RoadmapList property='empty' />
      </StyledContent>
    </AppLayout>
  );
};

export default Dashboard;

const StyledContent = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyledInfoCards = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;
