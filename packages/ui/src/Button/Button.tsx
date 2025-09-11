import type React from 'react';
import { StyledButton, StyledButtonIcon, StyledButtonText } from './Button.styles';
import type { ButtonProps } from './Button.types';

const Button = <T extends React.ElementType = 'button'>({
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
      return (
        <StyledButtonIcon size={size} filled={iconFilled}>
          {iconName}
        </StyledButtonIcon>
      );
    }

    return (
      <>
        {iconPosition === 'left' && (
          <StyledButtonIcon size={size} filled={iconFilled} aria-hidden={true}>
            {iconName}
          </StyledButtonIcon>
        )}
        {children && <StyledButtonText size={size}>{children}</StyledButtonText>}
        {iconPosition === 'right' && (
          <StyledButtonIcon size={size} filled={iconFilled} aria-hidden={true}>
            {iconName}
          </StyledButtonIcon>
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

export default Button;
