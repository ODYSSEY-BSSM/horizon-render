import type {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
  IconPosition,
  StyledButtonProps,
} from '@/Button/types';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import ButtonIcon from './ButtonIcon';
import ButtonText from './ButtonText';
import { getButtonStyle, getGapSize, getPadding } from './styles';

const shouldForwardProp = (prop: string) =>
  ['size', 'variant', 'iconPosition', 'rounded'].indexOf(prop) === -1;

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
  };

  if (disabled && isLink) {
    return (
      <StyledButton as='span' {...finalProps}>
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

const StyledButton = styled('button', { shouldForwardProp })<StyledButtonProps>`
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
