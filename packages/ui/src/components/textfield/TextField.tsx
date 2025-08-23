import { clsx } from 'clsx';
import type React from 'react';
import { forwardRef, useEffect, useId, useState } from 'react';
import { type TextFieldVariant, containerVariants, textFieldVariants } from './variants';

interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: TextFieldVariant;
  label?: string;
  icon?: React.ReactNode;
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
          <label
            htmlFor={inputId}
            className={clsx(
              'text-11 font-medium leading-[18px] tracking-[0.55px] text-neutral-400 font-suit',
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        <div className='relative'>
          {icon && (
            <div className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 flex items-center justify-center w-5 h-5'>
              {icon}
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
