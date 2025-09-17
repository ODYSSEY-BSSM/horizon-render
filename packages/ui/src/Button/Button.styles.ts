import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type { ButtonSize, ButtonVariant, IconPosition, StyledButtonProps } from './Button.types';

// Button text configurations
const BUTTON_TEXT_CONFIGS = {
  small: { fontSize: 13 as const, fontWeight: 'semibold' as const, lineHeight: 18 as const },
  medium: { fontSize: 14 as const, fontWeight: 'semibold' as const, lineHeight: 20 as const },
  large: { fontSize: 16 as const, fontWeight: 'semibold' as const, lineHeight: 24 as const },
} as const;

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

const BUTTON_ICON_CONFIGS = {
  small: {
    fontSize: '16px',
    fontWeight: 'regular' as const,
    grade: 0 as const,
    opticalSize: 20 as const,
  },
  medium: {
    fontSize: '20px',
    fontWeight: 'regular' as const,
    grade: 0 as const,
    opticalSize: 24 as const,
  },
  large: {
    fontSize: '24px',
    fontWeight: 'medium' as const,
    grade: 25 as const,
    opticalSize: 40 as const,
  },
} as const;

const makeIconStyle = (
  filled: keyof typeof tokens.icons.fill,
  fontSizePx: string,
  fontWeight: keyof typeof tokens.fontWeight,
  grade: keyof typeof tokens.icons.grade,
  opticalSize: keyof typeof tokens.icons.opticalSize,
) => css`
  font-size: ${fontSizePx};
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

const GAP_SIZES = {
  small: '6px',
  medium: '8px',
  large: '10px',
} as const;

export const getGapSize = (size: ButtonSize) => GAP_SIZES[size];

const HORIZONTAL_PADDINGS = {
  small: '16px',
  medium: '20px',
  large: '24px',
} as const;

const VERTICAL_PADDING = '10px';

const ICON_PADDINGS = {
  small: '10px',
  medium: '12px',
  large: '14px',
} as const;

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

const buttonStyles = {
  contained: {
    default: css`
      background-color: ${tokens.colors.primary[500]};
      color: ${tokens.colors.white};
        
      &:hover {
        background-color: ${tokens.colors.primary[700]};
      }
        
      &:active {
        background-color: ${tokens.colors.primary[900]};
      }
    `,
    disabled: css`
      cursor: not-allowed;
      background-color: ${tokens.colors.neutral[300]};
    `,
  },
  outlined: {
    default: css`
      background-color: transparent;
      border: 1px solid ${tokens.colors.primary[500]};
      color: ${tokens.colors.primary[500]};
        
      &:hover {
        background-color: ${tokens.colors.primary[600]};
        color: ${tokens.colors.white};
      }
        
      &:active {
        background-color: ${tokens.colors.primary[900]};
        color: ${tokens.colors.white};
      }
    `,
    disabled: css`
      cursor: not-allowed;
      background-color: transparent;
      color: ${tokens.colors.neutral[300]};
      border: 1px solid ${tokens.colors.neutral[300]};
    `,
  },
} as const;

export const getButtonStyle = (variant: ButtonVariant, disabled: boolean) => {
  return buttonStyles[variant][disabled ? 'disabled' : 'default'];
};

const BLOCKED_PROPS = new Set(['size', 'variant', 'iconPosition', 'rounded', 'disabled', 'as']);

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
