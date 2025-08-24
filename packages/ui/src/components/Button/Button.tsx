import { ICON_CONSTANTS } from '@/constants';
import { clsx } from 'clsx';
import type React from 'react';
import { cloneElement, isValidElement } from 'react';
import { buttonSlotsBySize, buttonVariants } from './variants';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  size?: 'small' | 'medium' | 'large';
  icon?: 'none' | 'left' | 'right' | 'only';
  variant?: 'contained' | 'outlined';
  rounded?: boolean;
  children?: React.ReactNode;
  iconName?: string;
  iconFilled?: boolean;
  className?: string;
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
  className,
  disabled = false,
  type = 'button',
  asChild = false,
  loading = false,
  loadingText,
  ...props
}: ButtonProps) => {
  const buttonClasses = buttonVariants({
    size,
    icon,
    type: variant,
    rounded,
  });

  const slots = buttonSlotsBySize[size];

  const isDisabled = disabled || loading;

  const buttonProps = {
    className: clsx(buttonClasses, className),
    disabled: isDisabled,
    'aria-disabled': isDisabled,
    ...(loading && { 'aria-busy': true }),
    ...(icon === 'only' && iconName && !loading && { 'aria-label': iconName }),
    ...(loading && loadingText && { 'aria-label': loadingText }),
    ...props,
  };

  const finalProps = asChild ? buttonProps : { ...buttonProps, type };

  const renderIcon = (position: 'left' | 'right') => {
    if (!iconName || icon === 'none') return null;
    if (icon !== position && icon !== 'only') return null;

    return (
      <span
        className={clsx('material-symbols-rounded select-none', slots.icon.classes)}
        style={{
          fontVariationSettings: `'FILL' ${iconFilled ? ICON_CONSTANTS.FILL.FILLED : ICON_CONSTANTS.FILL.OUTLINED}, 'wght' ${slots.icon.wght}, 'GRAD' ${slots.icon.grad}, 'opsz' ${slots.icon.opsz}`,
        }}
        aria-hidden={icon !== 'only'}
      >
        {iconName}
      </span>
    );
  };

  const renderLoadingIcon = () => (
    <span
      className={clsx('material-symbols-rounded select-none animate-spin', slots.icon.classes)}
      style={{
        fontVariationSettings: `'FILL' ${ICON_CONSTANTS.FILL.OUTLINED}, 'wght' ${slots.icon.wght}, 'GRAD' ${slots.icon.grad}, 'opsz' ${slots.icon.opsz}`,
      }}
      aria-hidden='true'
    >
      refresh
    </span>
  );

  const renderContent = () => {
    if (loading) {
      return (
        <>
          {renderLoadingIcon()}
          {(loadingText || children) && (
            <span className={slots.text}>{loadingText || children}</span>
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
        {children && <span className={slots.text}>{children}</span>}
        {renderIcon('right')}
      </>
    );
  };

  const content = renderContent();

  if (asChild) {
    if (!children || !isValidElement(children)) {
      console.warn(
        'Button component: asChild=true requires a single valid React element as children'
      );
      return null;
    }

    const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;

    return cloneElement(child, {
      ...finalProps,
      className: clsx(child.props.className, finalProps.className),
      children: content,
    });
  }

  return <button {...finalProps}>{content}</button>;
};
