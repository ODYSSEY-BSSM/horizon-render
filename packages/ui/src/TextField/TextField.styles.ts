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

const BLOCKED_PROPS = new Set(['hasError', 'filled', 'hasLeft', 'hasRight', 'hasToggle']);

export const shouldForwardProp = (prop: string): boolean => {
  return !BLOCKED_PROPS.has(prop);
};

const baseAffixStyles = `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const baseButtonStyles = `
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
`;

export const StyledAffixLeft = styled.div`
  ${baseAffixStyles}
  left: 12px;
  pointer-events: none;
`;

export const StyledAffixRight = styled.div`
  ${baseAffixStyles}
  right: 12px;
  pointer-events: none;
`;

export const StyledAffixRightButton = styled.button`
  ${baseAffixStyles}
  ${baseButtonStyles}
  right: 12px;

  &:hover {
    background-color: ${tokens.colors.neutral[100]};
  }

  &:focus {
    outline: none;
    background-color: ${tokens.colors.neutral[200]};
  }
`;

const baseInputStyles = `
  display: flex;
  height: 48px;
  width: 100%;
  align-items: center;
  border-radius: ${tokens.rounding.object};
  border: ${tokens.stroke.weight} solid transparent;
  background-color: ${tokens.colors.white};
  padding: 12px;
  font-size: ${tokens.fontSize[16]};
  font-weight: ${tokens.fontWeight.regular};
  line-height: ${tokens.lineHeight[24]};
  font-family: ${tokens.fontFamily.suit.join(', ')};
  color: ${tokens.colors.black};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
`;

const getInputPadding = (hasLeft: boolean, hasRight: boolean) => {
  if (hasLeft && hasRight) return 'padding-left: 36px; padding-right: 36px;';
  if (hasLeft) return 'padding-left: 36px;';
  if (hasRight) return 'padding-right: 36px;';
  return '';
};

const getInputBoxShadow = (hasError: boolean, filled: boolean) => {
  if (hasError) {
    return `box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.error[200]};`;
  }
  if (filled) {
    return `box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.primary[500]};`;
  }
  return `box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.neutral[300]};`;
};

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
  ${baseInputStyles}

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

  ${({ hasLeft, hasRight }) => getInputPadding(hasLeft, hasRight)}
  ${({ hasError, filled }) => getInputBoxShadow(hasError, filled)}

  ${({ filled, hasError }) =>
    !hasError &&
    filled &&
    css`
      &:focus {
        box-shadow: inset 0 0 0 calc(${tokens.stroke.weight} * 2) ${tokens.colors.primary[500]};
      }
    `}
`;
