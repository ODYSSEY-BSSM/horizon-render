import ButtonIcon from '@/Button/ButtonIcon';
import ButtonText from '@/Button/ButtonText';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import { getGapSize, getPadding, getTextStyles } from './styles';

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

const shouldForwardProp = (prop: string) =>
  ['size', 'variant', 'iconPosition', 'rounded', '$isDisabledLink'].indexOf(prop) === -1;

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

  const content = (() => {
    if (iconPosition === 'only') {
      return <ButtonIcon size={size} iconName={iconName} filled={iconFilled} />;
    }

    return (
      <>
        {iconPosition === 'left' && (
          <ButtonIcon size={size} iconName={iconName} filled={iconFilled} aria-hidden={true} />
        )}
        {children && <ButtonText size={size}>{children}</ButtonText>}
        {iconPosition === 'right' && (
          <ButtonIcon size={size} iconName={iconName} filled={iconFilled} aria-hidden={true} />
        )}
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
