'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Icon, Text } from '@horizon/ui';

interface ListItemProps {
  label: string;
  icon?: string;
  isActive?: boolean;
  hasCheck?: boolean;
  onClick?: () => void;
}

const StyledMenuItem = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  width: 100%;
  height: 44px;
  background-color: ${({ isActive }) =>
    isActive ? tokens.colors.primary[100] : tokens.colors.white};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 8px;
  margin: 2px 0;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? tokens.colors.primary[100] : tokens.colors.neutral[100]};
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const StyledCheckIcon = styled.div`
  color: ${tokens.colors.success[200]};
  font-size: 20px;
  font-family: 'Material Symbols Rounded', sans-serif;
  font-variation-settings: 'FILL' 0, 'GRAD' 0, 'opsz' 24;
  line-height: 1;
`;

const ListItem = ({ label, icon, isActive = false, hasCheck = false, onClick }: ListItemProps) => {
  return (
    <StyledMenuItem isActive={isActive} onClick={onClick}>
      {icon && (
        <StyledIconWrapper>
          <Icon
            name={icon}
            variant='SM'
            color={isActive ? tokens.colors.primary[500] : tokens.colors.neutral[500]}
            filled={isActive}
          />
        </StyledIconWrapper>
      )}
      <StyledContentWrapper>
        <Text
          variant='B2'
          color={isActive ? tokens.colors.primary[500] : tokens.colors.neutral[500]}
        >
          {label}
        </Text>
        {hasCheck && (
          <StyledCheckIcon aria-hidden='true'>
            <Icon name='check' variant='SM' color={tokens.colors.success[200]} decorative />
          </StyledCheckIcon>
        )}
      </StyledContentWrapper>
    </StyledMenuItem>
  );
};

export default ListItem;
