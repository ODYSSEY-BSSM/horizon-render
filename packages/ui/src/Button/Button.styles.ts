import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type { ButtonSize, ButtonVariant, IconPosition, StyledButtonProps } from './types';

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
  const styles: Record<ButtonSize, ReturnType<typeof css>> = {
    small: makeTextStyle(13, 'semibold', 18),
    medium: makeTextStyle(14, 'semibold', 20),
    large: makeTextStyle(16, 'semibold', 24),
  };

  return styles[size];
};

const makeIconStyle = (
  filled: keyof typeof tokens.icons.fill,
  fontSizePx: string,
  fontWeight: keyof typeof tokens.fontWeight,
  grade: keyof typeof tokens.icons.grade,
  opticalSize: keyof typeof tokens.icons.opticalSize,
) =>
  css({
    fontSize: fontSizePx,
    fontVariationSettings: `
      'FILL' ${tokens.icons.fill[filled]},
      'wght' ${tokens.fontWeight[fontWeight]}, 
      'GRAD' ${tokens.icons.grade[grade]}, 
      'opsz' ${tokens.icons.opticalSize[opticalSize]}
    `,
  });

export const getIconStyles = (size: ButtonSize, filled: keyof typeof tokens.icons.fill) => {
  const styles: Record<ButtonSize, ReturnType<typeof css>> = {
    small: makeIconStyle(filled, '16px', 'regular', 0, 20),
    medium: makeIconStyle(filled, '20px', 'regular', 0, 24),
    large: makeIconStyle(filled, '24px', 'medium', 25, 40),
  };

  return styles[size];
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
      color: white;
        
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
        color: white;
      }
        
      &:active {
        background-color: ${tokens.colors.primary[900]};
        color: white;
      }
    `,
    disabled: css`
      cursor: not-allowed;
      background-color: transparent;
      color: ${tokens.colors.neutral[300]};
      border: 1px solid ${tokens.colors.neutral[300]};
    `,
  },
};

export const getButtonStyle = (variant: ButtonVariant, disabled: boolean) => {
  return buttonStyles[variant][disabled ? 'disabled' : 'default'];
};

const shouldForwardProp = (prop: string) =>
  ['size', 'variant', 'iconPosition', 'rounded'].indexOf(prop) === -1;

export const StyledButton = styled('button', { shouldForwardProp })<StyledButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.2s ease-in-out;
    flex-shrink: 0;
    box-sizing: border-box;
    text-decoration: none;
    
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    gap: ${({ size }) => getGapSize(size)};
    padding: ${({ size, iconPosition }) => getPadding(size, iconPosition)};
    border-radius: ${({ rounded }) => (rounded ? '20px' : '8px')};
    
    ${({ variant, disabled }) => getButtonStyle(variant, disabled)}

    &:focus-visible {
      outline: none;
      box-shadow: ${({ variant }) =>
        variant === 'outlined'
          ? `inset 0 0 0 2px ${tokens.colors.primary[500]}, 0 0 0 2px ${tokens.colors.primary[200]}`
          : `0 0 0 2px ${tokens.colors.primary[200]}`};
    }
`;

export const StyledButtonIcon = styled.span<{ size: ButtonSize; filled: boolean }>`
  font-family: ${tokens.fontFamily.icon.join(', ')};
  user-select: none;
  ${({ size, filled }) => getIconStyles(size, filled ? 1 : 0)}
`;

export const StyledButtonText = styled.span<{ size: ButtonSize }>`
  ${({ size }) => getTextStyles(size)}
`;
