import type React from 'react';
import type { ButtonProps } from './Button.types';

export const useButton = <T extends React.ElementType = 'button'>(
  props: ButtonProps & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps>,
) => {
  const {
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
    ...restProps
  } = props;

  const element = as || 'button';
  const isNativeButton = element === 'button';
  const isLink = element === 'a' || 'href' in restProps;

  const styledProps = {
    size,
    variant,
    iconPosition,
    rounded,
    disabled,
  };

  const ariaProps = {
    'aria-disabled': disabled,
    'aria-label': iconPosition === 'only' ? ariaLabel || iconName : undefined,
  };

  const semantics = isNativeButton
    ? { type }
    : isLink
      ? {} // 링크는 본연의 시맨틱 유지
      : { role: 'button', tabIndex: disabled ? -1 : 0 };

  const finalRestProps = {
    ...semantics,
    ...restProps,
  };

  if (disabled && isLink) {
    (finalRestProps as Partial<React.AnchorHTMLAttributes<HTMLAnchorElement>>).href = undefined;
  }

  return {
    element: disabled && isLink ? 'span' : element,
    styledProps,
    ariaProps,
    restProps: finalRestProps,
    children,
    iconName,
    iconFilled,
  };
};
