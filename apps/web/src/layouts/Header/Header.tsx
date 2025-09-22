'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Profile from './Profile/Profile';
import SearchBar from './SearchBar/SearchBar';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

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
  padding: 20px 0;
  background-color: ${tokens.colors.white};
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
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
