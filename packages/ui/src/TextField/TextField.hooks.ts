import { tokens } from '@horizon/tokens';
import { useCallback, useId, useState } from 'react';
import type React from 'react';
import type { TextFieldProps } from './TextField.types';

export interface UseTextFieldState {
  id: string;
  helperId: string;
  value: string;
  isFocused: boolean;
  isFilled: boolean;
  isPassword: boolean;
  showPassword: boolean;
  hasToggle: boolean;
  hasLeft: boolean;
  hasRight: boolean;
  resolvedType?: React.HTMLInputTypeAttribute;
  leftIconResolved?: string;
  borderColor: string;
  affixColor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  togglePassword: () => void;
}

export const useTextFieldState = ({
  id,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  error = false,
  leftIcon,
  rightIcon,
  ...restProps
}: TextFieldProps): UseTextFieldState => {
  const generatedId = useId();
  const resolvedId = id ?? generatedId;
  const helperId = `${resolvedId}-help`;

  const [internalValue, setInternalValue] = useState(String(defaultValue ?? ''));
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const currentValue = value !== undefined ? String(value) : internalValue;
  const isFilled = !!currentValue.trim();
  const isPassword = (restProps.type ?? 'text') === 'password';
  const hasToggle = isPassword;
  const hasLeft = isPassword || !!leftIcon;
  const hasRight = hasToggle || !!rightIcon;
  const resolvedType = hasToggle ? (showPassword ? 'text' : 'password') : restProps.type;
  const leftIconResolved = hasLeft ? (leftIcon ?? 'lock') : undefined;

  const borderColor = isFocused
    ? tokens.colors.primary[500]
    : error
      ? tokens.colors.warning[200]
      : isFilled
        ? tokens.colors.primary[500]
        : tokens.colors.neutral[300];

  const affixColor = isFilled ? 'black' : tokens.colors.neutral[400];

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    },
    [value, onChange],
  );

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    },
    [onBlur],
  );

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return {
    id: resolvedId,
    helperId,
    value: currentValue,
    isFocused,
    isFilled,
    isPassword,
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
  };
};
