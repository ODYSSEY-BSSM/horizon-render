import { tokens } from '@horizon/tokens';
import { useId, useState } from 'react';
import type React from 'react';
import type { TextFieldProps } from './TextField.types';

export const useTextField = (props: TextFieldProps) => {
  const {
    id: propId,
    value: propValue,
    type,
    error = false,
    leftIcon,
    rightIcon,
    onChange,
    onFocus,
    onBlur,
    label,
    helperText,
    width,
    containerClassName,
    labelClassName,
    helperClassName,
    ...restProps
  } = props;

  const id = useId();
  const generatedId = propId || `textfield-${id}`;
  const helperId = `helper-${generatedId}`;

  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isControlled = propValue !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState('');
  const value = isControlled ? propValue : uncontrolledValue;
  const isFilled = !!value;

  const hasToggle = type === 'password';
  const hasLeft = !!leftIcon;
  const hasRight = !!rightIcon;
  const resolvedType = hasToggle ? (showPassword ? 'text' : 'password') : type;
  const leftIconResolved = error ? 'warning' : leftIcon;

  const borderColor = error
    ? tokens.colors.error[200]
    : isFocused
      ? tokens.colors.primary[500]
      : tokens.colors.neutral[300];

  const affixColor = error
    ? tokens.colors.error[200]
    : isFilled
      ? tokens.colors.black
      : tokens.colors.neutral[400];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setUncontrolledValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return {
    id: generatedId,
    helperId,
    value,
    isFilled,
    showPassword,
    hasToggle,
    hasLeft,
    hasRight,
    resolvedType,
    leftIconResolved,
    borderColor,
    affixColor,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    togglePassword,
    restProps,
    label,
    helperText,
    error,
    rightIcon,
    width,
    containerClassName,
    labelClassName,
    helperClassName,
  };
};
