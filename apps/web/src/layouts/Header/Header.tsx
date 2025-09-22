'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type { BreadcrumbItem } from '../../types';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Profile from './Profile/Profile';
import SearchBar from './SearchBar/SearchBar';

interface HeaderProps {
  breadcrumbItems?: BreadcrumbItem[];
  onSearch?: (query: string) => void;
  onProfileClick?: () => void;
}

const Header = ({
  breadcrumbItems = [{ label: 'Dashboard' }],
  onSearch,
  onProfileClick,
}: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledLeftSection>
        <Breadcrumb items={breadcrumbItems} />
      </StyledLeftSection>

      <StyledRightSection>
        <SearchBar onSearch={onSearch} />
        <Profile onClick={onProfileClick} />
      </StyledRightSection>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  background-color: ${tokens.colors.white};
  width: 100%;
  box-sizing: border-box;
`;

const StyledLeftSection = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const StyledRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  flex-shrink: 0;
`;
