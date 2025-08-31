import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'contained' | 'outlined';
export type IconPosition = 'none' | 'left' | 'right' | 'only';

export interface ButtonProps<T extends React.ElementType = 'button'> {
  as?: T;
  size?: ButtonSize;
  iconPosition?: IconPosition;
  variant?: ButtonVariant;
  rounded?: boolean;
  children?: React.ReactNode;
  iconName?: string;
  iconFilled?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  onClick?: (e: React.SyntheticEvent<HTMLElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
}

const createTextStyle = (
  fontSize: keyof typeof tokens.fontSize,
  lineHeight: keyof typeof tokens.lineHeight
) => css`
  font-size: ${tokens.fontSize[fontSize]};
  font-weight: ${tokens.fontWeight.semibold};
  line-height: ${tokens.lineHeight[lineHeight]};
  letter-spacing: ${tokens.letterSpacing[0]};
`;

const TEXT_STYLES = {
  small: createTextStyle(13, 18),
  medium: createTextStyle(14, 20),
  large: createTextStyle(16, 24),
} as const;

const getTextStyles = (size: ButtonSize) => TEXT_STYLES[size];

const ICON_CONFIGS = {
  small: { fontSize: 16, fontWeight: 'regular' as const, grad: 0, opsz: 20 },
  medium: { fontSize: 20, fontWeight: 'regular' as const, grad: 0, opsz: 24 },
  large: { fontSize: 24, fontWeight: 'medium' as const, grad: 25, opsz: 40 },
} as const;

const getIconStyles = (size: ButtonSize) => {
  const config = ICON_CONFIGS[size];
  return {
    fontSize: `${config.fontSize}px`,
    fontWeight: tokens.fontWeight[config.fontWeight],
    wght: tokens.fontWeight[config.fontWeight],
    grad: tokens.icons.grade[config.grad as keyof typeof tokens.icons.grade],
    opsz: tokens.icons.opticalSize[config.opsz as keyof typeof tokens.icons.opticalSize],
  };
};

const GAP_SIZES = {
  small: '6px',
  medium: '8px',
  large: '10px',
} as const;

const getGapSize = (size: ButtonSize) => GAP_SIZES[size];

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

const getPadding = (size: ButtonSize, iconPosition: IconPosition) => {
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

const shouldForwardProp = (prop: string) =>
  ['size', 'variant', 'iconPosition', 'rounded', 'disabled', '$isDisabledLink'].indexOf(prop) ===
  -1;

export const Button = <T extends React.ElementType = 'button'>({
  as,
  size = 'medium',
  iconPosition = 'none',
  variant = 'contained',
  rounded = false,
  children,
  iconName = 'check',
  iconFilled = false,
  disabled = false,
  type = 'button',
  'aria-label': ariaLabel,
  onClick,
  onKeyDown,
  ...restProps
}: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const element = as || 'button';
  const isNativeButton = element === 'button';
  const isLink = element === 'a' || 'href' in restProps;

  const renderIcon = () => {
    if (!iconName || iconPosition === 'none') return null;

    return (
      <StyledIcon size={size} filled={iconFilled} aria-hidden={iconPosition !== 'only'}>
        {iconName}
      </StyledIcon>
    );
  };

  const content = (() => {
    if (iconPosition === 'only') {
      return renderIcon();
    }

    return (
      <>
        {iconPosition === 'left' && renderIcon()}
        {children && <StyledText size={size}>{children}</StyledText>}
        {iconPosition === 'right' && renderIcon()}
      </>
    );
  })();

  const finalProps = {
    size,
    variant,
    iconPosition,
    rounded,
    disabled,
    'aria-disabled': disabled,
    'aria-label': iconPosition === 'only' ? ariaLabel || iconName : undefined,
    ...(isNativeButton ? { type } : { role: 'button', tabIndex: disabled ? -1 : 0 }),
    ...restProps,
    ...(!isNativeButton && {
      onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
        if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
          e.preventDefault();
          onClick?.(e);
        }
        onKeyDown?.(e);
      },
    }),
  };

  if (disabled && isLink) {
    return (
      <StyledButton as='span' {...finalProps} aria-disabled='true' $isDisabledLink>
        {content}
      </StyledButton>
    );
  }

  return (
    <StyledButton as={element} {...finalProps}>
      {content}
    </StyledButton>
  );
};

interface StyledButtonProps {
  size: ButtonSize;
  variant: ButtonVariant;
  iconPosition: IconPosition;
  rounded: boolean;
  disabled: boolean;
  $isDisabledLink?: boolean;
}

const StyledButton = styled('button', { shouldForwardProp })<StyledButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${tokens.fontFamily.suit.join(', ')};
    user-select: none;
    transition: all 0.2s ease-in-out;
    border: 0 solid transparent;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    flex-shrink: 0;
    box-sizing: border-box;
    text-decoration: none;

    gap: ${({ size }) => getGapSize(size)};
    padding: ${({ size, iconPosition }) => getPadding(size, iconPosition)};
    border-radius: ${({ rounded }) => (rounded ? '20px' : '8px')};

    ${({ size }) => getTextStyles(size)}

    ${({ variant }) =>
      variant === 'contained'
        ? css`
          background-color: ${tokens.colors.primary[500]};
          color: white;

          &:hover:not(:disabled) {
            background-color: ${tokens.colors.primary[700]};
          }

          &:active:not(:disabled) {
            background-color: ${tokens.colors.primary[900]};
          }`
        : css`
          background-color: transparent;
          color: ${tokens.colors.primary[500]};
          box-shadow: inset 0 0 0 2px ${tokens.colors.primary[500]};

          &:hover:not(:disabled) {
            background-color: ${tokens.colors.primary[600]};
            color: white;
            box-shadow: inset 0 0 0 2px ${tokens.colors.primary[600]};
          }

          &:active:not(:disabled) {
            background-color: ${tokens.colors.primary[900]};
            color: white;
            box-shadow: inset 0 0 0 2px ${tokens.colors.primary[900]};
          }
        `}

    &:focus-visible {
        outline: none;
        box-shadow: ${({ variant }) =>
          variant === 'outlined'
            ? `inset 0 0 0 2px ${tokens.colors.primary[500]}, 0 0 0 2px ${tokens.colors.primary[200]}`
            : `0 0 0 2px ${tokens.colors.primary[200]}`};
    }

    ${({ disabled, variant }) =>
      disabled &&
      css`
                pointer-events: none;
                background-color: ${variant === 'outlined' ? 'transparent' : tokens.colors.neutral[300]};
                color: ${variant === 'outlined' ? tokens.colors.neutral[300] : 'white'};
                box-shadow: ${variant === 'outlined' ? `inset 0 0 0 2px ${tokens.colors.neutral[300]}` : 'none'};
            `}
    
    ${({ $isDisabledLink }) =>
      $isDisabledLink &&
      css`
                pointer-events: none;
                opacity: 0.5;
            `}
`;

const StyledText = styled.span<{ size: ButtonSize }>`
    ${({ size }) => getTextStyles(size)}
`;

const StyledIcon = styled.span<{ size: ButtonSize; filled: boolean }>`
    font-family: ${tokens.fontFamily.icon.join(', ')};
    user-select: none;

    ${({ size, filled }) => {
      const iconStyles = getIconStyles(size);
      return css`
            font-size: ${iconStyles.fontSize};
            font-weight: ${iconStyles.fontWeight};
            font-variation-settings:
                    'FILL' ${filled ? tokens.icons.fill[1] : tokens.icons.fill[0]},
                    'wght' ${iconStyles.wght},
                    'GRAD' ${iconStyles.grad},
                    'opsz' ${iconStyles.opsz};
        `;
    }}
`;
