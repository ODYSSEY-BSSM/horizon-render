'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Icon } from '@horizon/ui';
import { useState } from 'react';
import type React from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onChange?: (query: string) => void;
}

const SearchBar = ({
  placeholder = '찾으시는 로드맵이 있나요?',
  onSearch,
  onChange,
}: SearchBarProps) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleSearch = () => {
    onSearch?.(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <StyledSearchBar isFocused={isFocused} hasValue={!!value}>
      <StyledInput
        type='text'
        placeholder={placeholder}
        value={value}
        hasValue={!!value}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
      />
      <StyledSearchButton isFocused={isFocused} onClick={handleSearch} type='button'>
        <Icon
          name='search'
          variant='SM'
          color={isFocused ? tokens.colors.white : tokens.colors.neutral[400]}
        />
      </StyledSearchButton>
    </StyledSearchBar>
  );
};

export default SearchBar;

const StyledSearchBar = styled.div<{ isFocused: boolean; hasValue: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 6px 6px 18px;
  background-color: ${tokens.colors.white};
  border: 1px solid ${({ isFocused }) =>
    isFocused ? tokens.colors.primary[500] : tokens.colors.neutral[200]};
  border-radius: 20px;
  width: 280px;
  height: 40px;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
`;

const StyledInput = styled.input<{ hasValue: boolean }>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  color: ${({ hasValue }) => (hasValue ? tokens.colors.neutral[800] : tokens.colors.neutral[400])};

  &::placeholder {
    color: ${tokens.colors.neutral[400]};
  }
`;

const StyledSearchButton = styled.button<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 14px;
  background-color: ${({ isFocused }) =>
    isFocused ? tokens.colors.primary[500] : tokens.colors.neutral[200]};
  cursor: pointer;
  transition: background-color 0.2s ease;
`;
