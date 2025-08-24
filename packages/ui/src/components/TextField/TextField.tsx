import { Icon } from '@/components/Icon/Icon';
import { Text } from '@/components/Text/Text';
import { clsx } from 'clsx';
import type React from 'react';
import { forwardRef, useCallback, useId, useMemo, useState } from 'react';
import { type TextFieldVariantProps, containerVariants, textFieldVariants } from './variants';

interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    Omit<TextFieldVariantProps, 'hasIcon' | 'filled'> {
  label?: string;
  icon?: string;
  errorMessage?: string;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      icon,
      error = false,
      errorMessage,
      className,
      containerClassName,
      labelClassName,
      ...props
    },
    ref
  ) => {
    const inputId = useId();
    const [internalValue, setInternalValue] = useState(props.defaultValue || '');

    const hasIcon = useMemo(() => !!icon, [icon]);
    const currentValue = props.value !== undefined ? props.value : internalValue;
    const filled = useMemo(() => !!currentValue, [currentValue]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.value === undefined) {
          setInternalValue(e.target.value);
        }
        props.onChange?.(e);
      },
      [props.value, props.onChange]
    );

    const inputClassName = useMemo(
      () => clsx(textFieldVariants({ error, hasIcon, filled }), className),
      [error, hasIcon, filled, className]
    );

    return (
      <div className={clsx(containerVariants(), containerClassName)}>
        {label && (
          <Text
            as='label'
            variant='O'
            className={clsx('text-neutral-400', labelClassName)}
            htmlFor={inputId}
          >
            {label}
          </Text>
        )}
        <div className='relative w-[400px]'>
          {hasIcon && icon && (
            <div className='absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none'>
              <Icon name={icon} variant='SM' color='rgb(163 163 163)' />
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={inputClassName}
            onChange={handleChange}
            {...props}
          />
        </div>
        {error && errorMessage && (
          <Text variant='C' className='text-warning-200 mt-[3px]' textAlign='center'>
            {errorMessage}
          </Text>
        )}
      </div>
    );
  }
);
