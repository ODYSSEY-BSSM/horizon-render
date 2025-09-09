import type { ButtonSize } from '@/Button/Button';
import { getTextStyles } from '@/Button/styles';
import styled from '@emotion/styled';
import type React from 'react';

interface ButtonTextProps {
  size: ButtonSize;
  children: React.ReactNode;
}

const ButtonText = ({ size, children }: ButtonTextProps) => {
  return <StyledText size={size}>{children}</StyledText>;
};

export default ButtonText;

const StyledText = styled.span<{ size: ButtonSize }>`
    ${({ size }) => getTextStyles(size)}
`;
