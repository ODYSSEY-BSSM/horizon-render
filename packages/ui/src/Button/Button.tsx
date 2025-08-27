import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import { cloneElement, isValidElement } from 'react';

export const ICON_CONSTANTS = {
  FILL: {
    FILLED: '1',
    OUTLINED: '0',
  },
} as const;

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'contained' | 'outlined';
type IconPosition = 'none' | 'left' | 'right' | 'only';

interface ButtonStyleProps {
  size: ButtonSize;
  variant: ButtonVariant;
  iconPosition: IconPosition;
  rounded: boolean;
  disabled: boolean;
}

const getTextStyles = (size: ButtonSize) => {
  const styles = {
    small: css`
      font-size: 13px;
      font-weight: ${tokens.fontWeight.semibold};
      line-height: 18px;
      letter-spacing: normal;
    `,
    medium: css`
      font-size: 14px;
      font-weight: ${tokens.fontWeight.semibold};
      line-height: 20px;
      letter-spacing: normal;
    `,
    large: css`
      font-size: 16px;
      font-weight: ${tokens.fontWeight.semibold};
      line-height: 24px;
      letter-spacing: normal;
    `,
  };
  return styles[size];
};

const getIconStyles = (size: ButtonSize) => {
  const styles = {
    small: {
      fontSize: '16px',
      fontWeight: tokens.fontWeight.regular,
      wght: tokens.fontWeight.regular,
      grad: tokens.icons.grade[0],
      opsz: tokens.icons.opticalSize[20],
    },
    medium: {
      fontSize: '20px',
      fontWeight: tokens.fontWeight.regular,
      wght: tokens.fontWeight.regular,
      grad: tokens.icons.grade[0],
      opsz: tokens.icons.opticalSize[24],
    },
    large: {
      fontSize: '24px',
      fontWeight: tokens.fontWeight.medium,
      wght: tokens.fontWeight.medium,
      grad: tokens.icons.grade[25],
      opsz: tokens.icons.opticalSize[40],
    },
  };
  return styles[size];
};

const getGapSize = (size: ButtonSize) => {
  const gaps = {
    small: '6px',
    medium: '8px',
    large: '10px',
  };
  return gaps[size];
};

const getPadding = (size: ButtonSize, iconPosition: IconPosition) => {
  if (iconPosition === 'only') {
    return '10px';
  }

  const horizontal = {
    small: '16px',
    medium: '20px',
    large: '24px',
  };

  const vertical = '10px';

  if (iconPosition === 'left') {
    return `${vertical} ${horizontal[size]} ${vertical} 10px`;
  }
  if (iconPosition === 'right') {
    return `${vertical} 10px ${vertical} ${horizontal[size]}`;
  }

  return `${vertical} ${horizontal[size]}`;
};

const StyledButton = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'SUIT Variable', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  user-select: none;
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  
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
          border: 1.5px solid ${tokens.colors.primary[500]};
          
          &:hover:not(:disabled) {
            background-color: ${tokens.colors.primary[600]};
            color: white;
            border-color: ${tokens.colors.primary[600]};
          }
          
          &:active:not(:disabled) {
            background-color: ${tokens.colors.primary[900]};
            color: white;
            border-color: ${tokens.colors.primary[900]};
          }
        `}
  
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${tokens.colors.primary[200]};
  }
  
  &:disabled {
    pointer-events: none;
    opacity: 0.6;
    background-color: ${({ variant }) =>
      variant === 'contained' ? tokens.colors.neutral[200] : 'transparent'};
    color: ${({ variant }) =>
      variant === 'contained' ? tokens.colors.neutral[400] : tokens.colors.neutral[300]};
    border-color: ${({ variant }) =>
      variant === 'outlined' ? tokens.colors.neutral[300] : 'transparent'};
  }
`;

const StyledIcon = styled.span<{ size: ButtonSize; filled: boolean }>`
  font-family: 'Material Symbols Rounded';
  user-select: none;
  
  ${({ size, filled }) => {
    const iconStyles = getIconStyles(size);
    return css`
      font-size: ${iconStyles.fontSize};
      font-weight: ${iconStyles.fontWeight};
      font-variation-settings: 'FILL' ${filled ? ICON_CONSTANTS.FILL.FILLED : ICON_CONSTANTS.FILL.OUTLINED}, 
        'wght' ${iconStyles.wght}, 
        'GRAD' ${iconStyles.grad}, 
        'opsz' ${iconStyles.opsz};
    `;
  }}
  
  &.loading {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const StyledText = styled.span<{ size: ButtonSize }>`
  ${({ size }) => getTextStyles(size)}
`;

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
  loading?: boolean;
  loadingText?: string;
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
  loading = false,
  loadingText,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  const renderIcon = (position: 'left' | 'right') => {
    if (!iconName || icon === 'none') return null;
    if (icon !== position && icon !== 'only') return null;

    return (
      <StyledIcon size={size} filled={iconFilled} aria-hidden={icon !== 'only'}>
        {iconName}
      </StyledIcon>
    );
  };

  const renderLoadingIcon = () => (
    <StyledIcon size={size} filled={false} className='loading' aria-hidden='true'>
      refresh
    </StyledIcon>
  );

  const renderContent = () => {
    if (loading) {
      return (
        <>
          {renderLoadingIcon()}
          {(loadingText || children) && (
            <StyledText size={size}>{loadingText || children}</StyledText>
          )}
        </>
      );
    }

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
  };

  const content = renderContent();

  const buttonProps = {
    size,
    variant,
    iconPosition: icon,
    rounded,
    disabled: isDisabled,
    'aria-disabled': isDisabled,
    ...(loading && { 'aria-busy': true }),
    ...(icon === 'only' && iconName && !loading && { 'aria-label': iconName }),
    ...(loading && loadingText && { 'aria-label': loadingText }),
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
