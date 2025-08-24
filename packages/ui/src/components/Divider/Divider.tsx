import { DIVIDER_CONSTANTS } from '@/constants';
import { clsx } from 'clsx';
import type React from 'react';

interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  orientation?: 'horizontal' | 'vertical';
  spacing?: keyof typeof DIVIDER_CONSTANTS.SPACING | number;
  className?: string;
  children?: React.ReactNode;
}

const getSpacingValue = (spacing: keyof typeof DIVIDER_CONSTANTS.SPACING | number | undefined) => {
  if (!spacing) return undefined;

  return typeof spacing === 'string' ? DIVIDER_CONSTANTS.SPACING[spacing] : `${spacing}px`;
};

const getSpacingStyle = (
  spacing: keyof typeof DIVIDER_CONSTANTS.SPACING | number | undefined,
  orientation: string
) => {
  if (!spacing) return {};

  const spacingValue = getSpacingValue(spacing);
  if (!spacingValue) return {};

  return orientation === 'horizontal'
    ? { marginTop: spacingValue, marginBottom: spacingValue }
    : { marginLeft: spacingValue, marginRight: spacingValue };
};

export const Divider = ({
  orientation = 'horizontal',
  spacing,
  className,
  children,
  ...props
}: DividerProps) => {
  const spacingStyle = getSpacingStyle(spacing, orientation);

  if (children) {
    return (
      <div
        className={clsx(
          'flex items-center',
          orientation === 'vertical' ? 'flex-col h-full' : 'w-full',
          className
        )}
        style={spacingStyle}
        {...props}
      >
        <div
          className={clsx(
            'border-horizon-neutral-300',
            orientation === 'horizontal' ? 'flex-1 border-t' : 'flex-1 border-l'
          )}
        />
        <div className={clsx(orientation === 'horizontal' ? 'px-4' : 'py-4 px-0')}>{children}</div>
        <div
          className={clsx(
            'border-horizon-neutral-300',
            orientation === 'horizontal' ? 'flex-1 border-t' : 'flex-1 border-l'
          )}
        />
      </div>
    );
  }

  if (orientation === 'vertical') {
    return (
      <div
        className={clsx('h-full border-l border-horizon-neutral-300', className)}
        style={spacingStyle}
        role='separator'
        aria-orientation='vertical'
        tabIndex={-1}
        {...props}
      />
    );
  }

  return (
    <hr
      className={clsx('border-t border-horizon-neutral-300 w-full', className)}
      style={spacingStyle}
      {...props}
    />
  );
};
