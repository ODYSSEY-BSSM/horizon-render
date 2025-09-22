'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type { MenuItem } from '../types';
import ListMenu from './ListMenu/ListMenu';
import LogoArea from './LogoArea/LogoArea';

interface SidebarProps {
  menuItems?: MenuItem[];
  activeItemId?: string;
  onMenuItemClick?: (itemId: string) => void;
}

const StyledSidebar = styled.aside`
  width: 240px;
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${tokens.colors.white};
  border-right: 1px solid ${tokens.colors.neutral[200]};
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  gap: 20px;
  overflow-y: auto;
  box-sizing: border-box;
`;

const defaultMenuItems: MenuItem[] = [
  { id: 'dashboard', label: '대시보드', icon: 'home' },
  { id: 'roadmap', label: '개인 로드맵', icon: 'Home_storage' },
  { id: 'team', label: '팀 스페이스', icon: 'group' },
  { id: 'settings', label: '학교 연동', icon: 'school', hasCheck: true },
];

const Sidebar = ({ menuItems = defaultMenuItems, activeItemId, onMenuItemClick }: SidebarProps) => {
  return (
    <StyledSidebar>
      <LogoArea />
      <ListMenu items={menuItems} activeItemId={activeItemId} onItemClick={onMenuItemClick} />
    </StyledSidebar>
  );
};

export default Sidebar;
