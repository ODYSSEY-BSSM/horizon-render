'use client';

import styled from '@emotion/styled';
import type { MenuItem } from '../../types';
import ListItem from './ListItem/ListItem';

interface ListMenuProps {
  items: MenuItem[];
  activeItemId?: string;
  onItemClick?: (itemId: string) => void;
}

const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListMenu = ({ items, activeItemId, onItemClick }: ListMenuProps) => {
  return (
    <StyledMenuList aria-label='사이드바 메뉴'>
      {items.map((item) => (
        <li key={item.id}>
          <ListItem
            label={item.label}
            icon={item.icon}
            hasCheck={item.hasCheck}
            isActive={item.id === activeItemId}
            onClick={() => onItemClick?.(item.id)}
          />
        </li>
      ))}
    </StyledMenuList>
  );
};

export default ListMenu;
