import { css } from '@emotion/react';
import { tokens } from '@horizon/tokens';

export const BUTTON_TEXT_CONFIGS = {
  small: { fontSize: 13 as const, fontWeight: 'semibold' as const, lineHeight: 18 as const },
  medium: { fontSize: 14 as const, fontWeight: 'semibold' as const, lineHeight: 20 as const },
  large: { fontSize: 16 as const, fontWeight: 'semibold' as const, lineHeight: 24 as const },
} as const;

export const BUTTON_ICON_CONFIGS = {
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

export const GAP_SIZES = {
  small: '6px',
  medium: '8px',
  large: '10px',
} as const;

export const HORIZONTAL_PADDINGS = {
  small: '16px',
  medium: '20px',
  large: '24px',
} as const;

export const VERTICAL_PADDING = '10px';

export const ICON_PADDINGS = {
  small: '10px',
  medium: '12px',
  large: '14px',
} as const;

export const buttonStyles = {
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

export const BLOCKED_PROPS = new Set([
  'size',
  'variant',
  'iconPosition',
  'rounded',
  'disabled',
  'as',
]);
