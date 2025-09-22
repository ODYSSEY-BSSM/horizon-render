'use client';

import styled from '@emotion/styled';
import ListItem from './ListItem/ListItem';

interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  hasCheck?: boolean;
}

interface ListMenuProps {
  items: MenuItem[];
  activeItemId?: string;
  onItemClick?: (itemId: string) => void;
}

const StyledMenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ListMenu = ({ items, activeItemId, onItemClick }: ListMenuProps) => {
  return (
    <StyledMenuList>
      {items.map((item) => (
        <ListItem
          key={item.id}
          label={item.label}
          icon={item.icon}
          hasCheck={item.hasCheck}
          isActive={item.id === activeItemId}
          onClick={() => onItemClick?.(item.id)}
        />
      ))}
    </StyledMenuList>
  );
};

export default ListMenu;
