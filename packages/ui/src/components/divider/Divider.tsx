import { clsx } from 'clsx';
import type React from 'react';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  spacing?: number;
  className?: string;
  children?: React.ReactNode;

  'aria-label'?: string;
  'aria-orientation'?: 'horizontal' | 'vertical';
  role?: string;
}

const getSpacingStyle = (spacing: number | undefined, orientation: string) => {
  if (!spacing) return {};

  return orientation === 'horizontal'
    ? { marginTop: `${spacing}px`, marginBottom: `${spacing}px` }
    : { marginLeft: `${spacing}px`, marginRight: `${spacing}px` };
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
        aria-orientation={orientation}
        {...props}
      >
        <div
          className={clsx(
            'border-horizon-neutral-300',
            orientation === 'horizontal' ? 'flex-1 border-t' : 'flex-1 border-l'
          )}
        />
        <div className={clsx('px-4', orientation === 'vertical' && 'py-4 px-0')}>{children}</div>
        <div
          className={clsx(
            'border-horizon-neutral-300',
            orientation === 'horizontal' ? 'flex-1 border-t' : 'flex-1 border-l'
          )}
        />
      </div>
    );
  }

  return (
    <hr
      className={clsx(
        'border-t border-horizon-neutral-300',
        orientation === 'horizontal' ? 'w-full' : 'h-full border-l border-t-0',
        className
      )}
      style={spacingStyle}
      aria-orientation={orientation}
      {...props}
    />
  );
};
