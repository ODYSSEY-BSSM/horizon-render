import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import {
  BLOCKED_PROPS,
  BUTTON_ICON_CONFIGS,
  BUTTON_TEXT_CONFIGS,
  GAP_SIZES,
  HORIZONTAL_PADDINGS,
  ICON_PADDINGS,
  VERTICAL_PADDING,
  buttonStyles,
} from './Button.constants';
import type { ButtonSize, ButtonVariant, IconPosition, StyledButtonProps } from './Button.types';

const makeTextStyle = (
  fontSize: keyof typeof tokens.fontSize,
  fontWeight: keyof typeof tokens.fontWeight,
  lineHeight: keyof typeof tokens.lineHeight,
) => css`
  font-size: ${tokens.fontSize[fontSize]};
  font-weight: ${tokens.fontWeight[fontWeight]};
  line-height: ${tokens.lineHeight[lineHeight]};
  letter-spacing: 0;
`;

export const getTextStyles = (size: ButtonSize) => {
  const config = BUTTON_TEXT_CONFIGS[size];
  return makeTextStyle(config.fontSize, config.fontWeight, config.lineHeight);
};

const makeIconStyle = (
  filled: keyof typeof tokens.icons.fill,
  fontSize: string,
  fontWeight: keyof typeof tokens.fontWeight,
  grade: keyof typeof tokens.icons.grade,
  opticalSize: keyof typeof tokens.icons.opticalSize,
) => css`
  font-size: ${fontSize};
  font-variation-settings: 
    'FILL' ${tokens.icons.fill[filled]},
    'wght' ${tokens.fontWeight[fontWeight]}, 
    'GRAD' ${tokens.icons.grade[grade]}, 
    'opsz' ${tokens.icons.opticalSize[opticalSize]};
`;

export const getIconStyles = (size: ButtonSize, filled: keyof typeof tokens.icons.fill) => {
  const config = BUTTON_ICON_CONFIGS[size];
  return makeIconStyle(
    filled,
    config.fontSize,
    config.fontWeight,
    config.grade,
    config.opticalSize,
  );
};

export const getGapSize = (size: ButtonSize) => GAP_SIZES[size];

export const getPadding = (size: ButtonSize, iconPosition: IconPosition) => {
  const iconPadding = ICON_PADDINGS[size];
  const horizontal = HORIZONTAL_PADDINGS[size];

  if (iconPosition === 'only') {
    return VERTICAL_PADDING;
  }
  if (iconPosition === 'left') {
    return `${VERTICAL_PADDING} ${horizontal} ${VERTICAL_PADDING} ${iconPadding}`;
  }
  if (iconPosition === 'right') {
    return `${VERTICAL_PADDING} ${iconPadding} ${VERTICAL_PADDING} ${horizontal}`;
  }

  return `${VERTICAL_PADDING} ${horizontal}`;
};

export const getButtonStyle = (variant: ButtonVariant, disabled: boolean) => {
  return buttonStyles[variant][disabled ? 'disabled' : 'default'];
};

const shouldForwardProp = (prop: string): boolean => {
  return !BLOCKED_PROPS.has(prop);
};

const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;
  box-sizing: border-box;
  text-decoration: none;
`;

const getFocusStyles = (variant: ButtonVariant) => css`
  &:focus-visible {
    outline: none;
    box-shadow: ${
      variant === 'outlined'
        ? `inset 0 0 0 2px ${tokens.colors.primary[500]}, 0 0 0 2px ${tokens.colors.primary[200]}`
        : `0 0 0 2px ${tokens.colors.primary[200]}`
    };
  }
`;

export const StyledButton = styled('button', { shouldForwardProp })<StyledButtonProps>`
  ${baseButtonStyles}
  
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  gap: ${({ size }) => getGapSize(size)};
  padding: ${({ size, iconPosition }) => getPadding(size, iconPosition)};
  border-radius: ${({ rounded }) => (rounded ? '20px' : '8px')};
  
  ${({ variant, disabled }) => getButtonStyle(variant, disabled)}
  ${({ variant }) => getFocusStyles(variant)}
`;

export const StyledButtonIcon = styled.span<{ size: ButtonSize; filled: boolean }>`
  font-family: ${tokens.fontFamily.icon.join(', ')};
  user-select: none;
  ${({ size, filled }) => getIconStyles(size, filled ? 1 : 0)}
`;

export const StyledButtonText = styled.span<{ size: ButtonSize }>`
  ${({ size }) => getTextStyles(size)}
`;
