import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import type React from 'react';
import { Icon } from '../icon';
import { buttonSlotsBySize, buttonVariants } from './variants';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  size?: 'small' | 'medium' | 'large';
  icon?: 'none' | 'left' | 'right' | 'only';
  variant?: 'contained' | 'outlined';
  rounded?: boolean;
  children?: React.ReactNode;
  iconName?: string;
  className?: string;
  disabled?: boolean;
  buttonType?: 'button' | 'submit' | 'reset';
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  icon = 'none',
  variant = 'contained',
  rounded = false,
  children,
  iconName = 'check',
  className,
  disabled = false,
  buttonType = 'button',
  asChild = false,
  ...props
}) => {
  const buttonClasses = buttonVariants({
    size,
    icon,
    type: variant,
    rounded,
  });

  const slots = buttonSlotsBySize[size];
  const Component = asChild ? Slot : 'button';

  const renderIcon = (position: 'left' | 'right') => {
    if (!iconName || icon === 'none') return null;
    if (icon !== position && icon !== 'only') return null;

    return (
      <Icon
        name={iconName}
        className={slots.icon.classes}
        style={{
          fontVariationSettings: `'FILL' 0, 'wght' ${slots.icon.wght}, 'GRAD' ${slots.icon.grad}, 'opsz' ${slots.icon.opsz}`,
        }}
      />
    );
  };

  const renderContent = () => {
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

  return (
    <Component
      type={asChild ? undefined : buttonType}
      className={clsx(buttonClasses, className)}
      disabled={disabled}
      {...props}
    >
      {renderContent()}
    </Component>
  );
};
