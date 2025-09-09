import type { ButtonSize } from '@/Button/Button';
import { getIconStyles } from '@/Button/styles';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

interface ButtonIconProps {
  size: ButtonSize;
  iconName?: string;
  filled: boolean;
  'aria-hidden'?: boolean;
}

const ButtonIcon = ({ size, iconName = 'check', filled, ...restProps }: ButtonIconProps) => {
  return (
    <StyledIcon size={size} filled={filled} {...restProps}>
      {iconName}
    </StyledIcon>
  );
};

export default ButtonIcon;

const StyledIcon = styled.span<{ size: ButtonSize; filled: boolean }>`
    font-family: ${tokens.fontFamily.icon.join(', ')};
    user-select: none;

    ${({ size, filled }) => getIconStyles(size, filled ? 1 : 0)}
`;
