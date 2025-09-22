'use client';

import styled from '@emotion/styled';
import { Text } from '@horizon/ui';
import { useState } from 'react';
import { Sidebar } from '../layouts';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fcfdff;
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

  const currentContent = menuContent[activeMenu as keyof typeof menuContent];

  return (
    <Container>
      <Sidebar activeItemId={activeMenu} onMenuItemClick={handleMenuClick} />
      <Content>
        <Text variant='H1'>{currentContent.title}</Text>
        <Text variant='B1'>{currentContent.description}</Text>
      </Content>
    </Container>
  );
};

export default HomePage;
