'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type { ReactNode } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import type { BreadcrumbItem, MenuItem } from './types';

interface AppLayoutProps {
  children: ReactNode;
  centered?: boolean;
  showSidebar?: boolean;
  showHeader?: boolean;
  menuItems?: MenuItem[];
  activeItemId?: string;
  onMenuItemClick?: (itemId: string) => void;
  breadcrumbItems?: BreadcrumbItem[];
  onSearch?: (query: string) => void;
  onProfileClick?: () => void;
}

const AppLayout = ({
  children,
  centered = false,
  showSidebar = true,
  showHeader = true,
  menuItems,
  activeItemId,
  onMenuItemClick,
  breadcrumbItems,
  onSearch,
  onProfileClick,
}: AppLayoutProps) => {
  if (centered) {
    return <StyledCenteredLayout>{children}</StyledCenteredLayout>;
  }

  if (!showSidebar && !showHeader) {
    return <StyledFullLayout>{children}</StyledFullLayout>;
  }

  return (
    <StyledAppLayout>
      {showSidebar && (
        <Sidebar
          menuItems={menuItems}
          activeItemId={activeItemId}
          onMenuItemClick={onMenuItemClick}
        />
      )}
      <StyledMainContent>
        {showHeader && (
          <Header
            breadcrumbItems={breadcrumbItems}
            onSearch={onSearch}
            onProfileClick={onProfileClick}
          />
        )}
        <StyledContent>{children}</StyledContent>
      </StyledMainContent>
    </StyledAppLayout>
  );
};

export default AppLayout;

const StyledAppLayout = styled.div`
  display: flex;
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  background-color: ${tokens.colors.background};
`;

const StyledMainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${tokens.colors.white};
`;

const StyledContent = styled.div`
  flex: 1;
  padding: 20px 60px;
  width: 100%;
  box-sizing: border-box;
`;

const StyledCenteredLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${tokens.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFullLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${tokens.colors.background};
`;
