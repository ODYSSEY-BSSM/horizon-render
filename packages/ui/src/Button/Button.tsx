import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import { cloneElement, isValidElement, useMemo } from 'react';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'contained' | 'outlined';
type IconPosition = 'none' | 'left' | 'right' | 'only';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  size?: ButtonSize;
  icon?: IconPosition;
  variant?: ButtonVariant;
  rounded?: boolean;
  children?: React.ReactNode;
  iconName?: string;
  iconFilled?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  asChild?: boolean;
}

const createTextStyle = (fontSize: number, lineHeight: number) => css`
  font-size: ${tokens.fontSize[fontSize as keyof typeof tokens.fontSize]};
  font-weight: ${tokens.fontWeight.semibold};
  line-height: ${tokens.lineHeight[lineHeight as keyof typeof tokens.lineHeight]};
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

  if (iconPosition === 'only') {
    return VERTICAL_PADDING;
  }

  const horizontal = HORIZONTAL_PADDINGS[size];

  if (iconPosition === 'left') {
    return `${VERTICAL_PADDING} ${horizontal} ${VERTICAL_PADDING} ${iconPadding}`;
  }
  if (iconPosition === 'right') {
    return `${VERTICAL_PADDING} ${iconPadding} ${VERTICAL_PADDING} ${horizontal}`;
  }

  return `${VERTICAL_PADDING} ${horizontal}`;
};

interface StyledButtonProps {
  size: ButtonSize;
  variant: ButtonVariant;
  iconPosition: IconPosition;
  rounded: boolean;
  disabled: boolean;
}

export const Button = ({
  size = 'medium',
  icon = 'none',
  variant = 'contained',
  rounded = false,
  children,
  iconName = 'check',
  iconFilled = false,
  disabled = false,
  type = 'button',
  asChild = false,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled;

  const renderIcon = useMemo(
    () => (position: 'left' | 'right') => {
      if (!iconName || icon === 'none') return null;
      if (icon !== position && icon !== 'only') return null;

      return (
        <StyledIcon size={size} filled={iconFilled} aria-hidden={icon !== 'only'}>
          {iconName}
        </StyledIcon>
      );
    },
    [iconName, icon, size, iconFilled]
  );

  const content = useMemo(() => {
    if (icon === 'only') {
      return renderIcon('left');
    }

    return (
      <>
        {renderIcon('left')}
        {children && <StyledText size={size}>{children}</StyledText>}
        {renderIcon('right')}
      </>
    );
  }, [icon, children, size, renderIcon]);

  const buttonProps = {
    size,
    variant,
    iconPosition: icon,
    rounded,
    disabled: isDisabled,
    'aria-disabled': isDisabled,
    ...(icon === 'only' && iconName && { 'aria-label': iconName }),
    ...props,
  };

  if (asChild) {
    if (!children || !isValidElement(children)) {
      console.warn(
        'Button component: asChild=true requires a single valid React element as children'
      );
      return null;
    }

    const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;

    return cloneElement(child, {
      ...buttonProps,
      children: content,
    });
  }

  return (
    <StyledButton {...buttonProps} type={type}>
      {content}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${tokens.fontFamily.suit.join(', ')};
  user-select: none;
  transition: all 0.2s ease-in-out;
  border: 0 solid transparent;
  cursor: pointer;
  flex-shrink: 0;
  box-sizing: border-box;
  
  gap: ${({ size }) => getGapSize(size)};
  padding: ${({ size, iconPosition }) => getPadding(size, iconPosition)};
  border-radius: ${({ rounded }) => (rounded ? '50px' : '8px')};
  
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
          }
        `
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
  
  &:disabled {
    pointer-events: none;
    opacity: 0.6;
    background-color: ${({ variant }) =>
      variant === 'contained' ? tokens.colors.neutral[200] : 'transparent'};
    color: ${({ variant }) =>
      variant === 'contained' ? tokens.colors.neutral[400] : tokens.colors.neutral[300]};
    box-shadow: ${({ variant }) =>
      variant === 'outlined' ? `inset 0 0 0 2px ${tokens.colors.neutral[300]}` : 'none'};
  }
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

const StyledText = styled.span<{ size: ButtonSize }>`
  ${({ size }) => getTextStyles(size)}
`;
