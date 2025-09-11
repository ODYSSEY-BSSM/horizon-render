import type { IconPosition } from './Button.types';

export interface UseButtonAriaParams {
  iconPosition: IconPosition;
  ariaLabel?: string;
  iconName: string;
  isNativeButton: boolean;
}

export const useButtonAria = ({ iconPosition, ariaLabel, iconName }: UseButtonAriaParams) => {
  const computedAriaLabel = iconPosition === 'only' ? ariaLabel || iconName : undefined;

  return {
    ariaLabel: computedAriaLabel,
  } as const;
};
