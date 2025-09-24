import type React from 'react';
import { useButton } from './Button.hooks';
import { StyledButton, StyledButtonIcon, StyledButtonText } from './Button.styles';
import type { ButtonProps } from './Button.types';

const Button = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
) => {
  const { styledProps, ariaProps, restProps, children, iconName, iconFilled } = useButton<T>(props);
  const { size, iconPosition } = styledProps;

  const content = (
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

  if (iconPosition === 'only') {
    return (
      <StyledButton {...styledProps} {...ariaProps} {...restProps}>
        <StyledButtonIcon size={size} filled={iconFilled}>
          {iconName}
        </StyledButtonIcon>
      </StyledButton>
    );
  }

  return (
    <StyledButton {...styledProps} {...ariaProps} {...restProps}>
      {content}
    </StyledButton>
  );
};

export default Button;
