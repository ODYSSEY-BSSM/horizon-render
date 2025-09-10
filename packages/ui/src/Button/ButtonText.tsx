import styled from '@emotion/styled';
import type React from 'react';
import { getTextStyles } from './styles';
import type { ButtonSize, ButtonTextProps } from './types';

const ButtonText = ({ size, children }: ButtonTextProps) => {
  return <StyledText size={size}>{children}</StyledText>;
};

export default ButtonText;

const StyledText = styled.span<{ size: ButtonSize }>`
    ${({ size }) => getTextStyles(size)}
`;
