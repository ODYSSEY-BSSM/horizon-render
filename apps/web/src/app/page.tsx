'use client';

import styled from '@emotion/styled';
import { Text } from '@horizon/ui';
import { useState } from 'react';
import { Header, Sidebar } from '../layouts';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const StyledMainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fcfdff;
`;

const StyledContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const menuContent = {
  dashboard: {
    title: 'Dashboard',
    description: '대시보드 페이지입니다!',
  },
  roadmap: {
    title: 'My Roadmaps',
    description: '개인 로드맵 페이지입니다!',
  },
  team: {
    title: 'Team Space',
    description: '팀 스페이스 페이지입니다!',
  },
  settings: {
    title: 'School Connect',
    description: '학교 연동 페이지입니다!',
  },
};

const HomePage = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const handleMenuClick = (itemId: string) => {
    setActiveMenu(itemId);
  };

  const handleSearch = (_query: string) => {
    // TODO: Implement search functionality
  };

  const handleProfileClick = () => {
    // TODO: Implement profile menu functionality
  };

  const currentContent = menuContent[activeMenu as keyof typeof menuContent];

  const breadcrumbItems = [{ label: 'Home', path: '/' }, { label: currentContent.title }];

  return (
    <Container>
      <Sidebar activeItemId={activeMenu} onMenuItemClick={handleMenuClick} />
      <StyledMainContent>
        <Header
          breadcrumbItems={breadcrumbItems}
          onSearch={handleSearch}
          onProfileClick={handleProfileClick}
        />
        <StyledContent>
          <Text variant='H1'>{currentContent.title}</Text>
          <Text variant='B1'>{currentContent.description}</Text>
        </StyledContent>
      </StyledMainContent>
    </Container>
  );
};

export default HomePage;
