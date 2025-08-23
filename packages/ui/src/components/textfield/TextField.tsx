import { clsx } from 'clsx';
import type React from 'react';
import { forwardRef, useEffect, useId, useState } from 'react';
import { Icon } from '../icon';
import { Text } from '../text';
import { type TextFieldVariant, containerVariants, textFieldVariants } from './variants';

interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: TextFieldVariant;
  label?: string;
  icon?: string;
  error?: boolean;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      variant,
      label,
      icon,
      error = false,
      className,
      containerClassName,
      labelClassName,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [currentValue, setCurrentValue] = useState(value ?? defaultValue ?? '');
    const inputId = useId();

    useEffect(() => {
      if (value !== undefined) {
        setCurrentValue(value);
      }
    }, [value]);

    const hasValue = String(currentValue).length > 0;

    const getVariant = (): TextFieldVariant => {
      if (error) return 'error';
      if (variant) return variant;
      if (isFocused) return 'holding';
      if (hasValue) return 'filled';
      return 'default';
    };

    const inputVariant = getVariant();
    const inputClasses = textFieldVariants[inputVariant];
    const containerClasses = containerVariants.base;

    return (
      <div className={clsx(containerClasses, containerClassName)}>
        {label && (
          <Text
            as='label'
            variant='O'
            htmlFor={inputId}
            className={clsx('text-neutral-400', labelClassName)}
          >
            {label}
          </Text>
        )}
        <div className='relative'>
          {icon && (
            <div className='absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center'>
              <Icon name={icon} variant='SM' color='rgb(163 163 163)' />
            </div>
          )}
          <input
            id={label ? inputId : undefined}
            ref={ref}
            value={value}
            defaultValue={defaultValue}
            className={clsx(inputClasses, icon && 'pl-11', className)}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            onChange={(e) => {
              setCurrentValue(e.target.value);
              props.onChange?.(e);
            }}
            {...props}
          />
        </div>
      </div>
    );
  }
);

TextField.displayName = 'TextField';
