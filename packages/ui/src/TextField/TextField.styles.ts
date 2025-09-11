import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';

export interface StyledInputWrapperProps {
  width?: string | number;
}

export interface StyledInputProps {
  hasError: boolean;
  filled: boolean;
  hasLeft: boolean;
  hasRight: boolean;
  hasToggle: boolean;
}

const blockedProps = new Set(['hasError', 'filled', 'hasLeft', 'hasRight', 'hasToggle']);
export const shouldForwardProp = (prop: string): boolean => {
  return !blockedProps.has(prop);
};

export const StyledAffixLeft = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const StyledAffixRight = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const StyledAffixRightButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background-color: ${tokens.colors.neutral[100]};
  }

  &:focus {
    outline: none;
    background-color: ${tokens.colors.neutral[200]};
  }
`;

export const StyledHelper = styled.output`
  text-align: left;
`;

export const StyledTextField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : (width ?? '100%'))};
`;

export const StyledInput = styled('input', { shouldForwardProp })<StyledInputProps>`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  border-radius: ${tokens.rounding.object};
  border: ${tokens.stroke.weight} solid transparent;
  box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.neutral[300]};
  background-color: white;
  padding: 10px 12px;
  font-size: ${tokens.fontSize[16]};
  font-weight: ${tokens.fontWeight.regular};
  line-height: ${tokens.lineHeight[24]};
  font-family: ${tokens.fontFamily.suit.join(', ')};
  color: black;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${tokens.colors.neutral[400]};
    font-size: ${tokens.fontSize[16]};
    font-weight: ${tokens.fontWeight.regular};
    line-height: ${tokens.lineHeight[24]};
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 calc(${tokens.stroke.weight} * 2) ${tokens.colors.primary[500]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ hasLeft }) =>
    hasLeft && {
      paddingLeft: 36,
    }}

  ${({ hasRight }) =>
    hasRight && {
      paddingRight: 36,
    }}

  ${({ hasError }) =>
    hasError &&
    css`
      box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.warning[200]};
    `}

  ${({ filled, hasError }) =>
    !hasError &&
    filled &&
    css`
      box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.primary[500]};

      &:focus {
        box-shadow: inset 0 0 0 calc(${tokens.stroke.weight} * 2) ${tokens.colors.primary[500]};
      }
    `}
`;
