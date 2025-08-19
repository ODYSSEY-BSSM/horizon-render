import { tokens } from '@horizon/tokens';
import { type VariantProps, cva } from 'class-variance-authority';

export const textVariants = {
  small: 'text-13 font-semibold leading-[18px] tracking-normal',
  medium: 'text-14 font-semibold leading-[20px] tracking-normal',
  large: 'text-16 font-semibold leading-[24px] tracking-normal',
} as const;

export const iconVariants = {
  small: {
    classes: 'text-16 font-regular',
    wght: tokens.fontWeight.regular,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[20],
  },
  medium: {
    classes: 'text-20 font-regular',
    wght: tokens.fontWeight.regular,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[24],
  },
  large: {
    classes: 'text-24 font-medium',
    wght: tokens.fontWeight.medium,
    grad: tokens.icons.grade[25],
    opsz: tokens.icons.opticalSize[40],
  },
} as const;

export type TextVariant = keyof typeof textVariants;
export type IconVariant = keyof typeof iconVariants;

export const buttonBase = [
  'inline-flex items-center justify-center',
  'font-suit select-none transition-colors',
  'focus-visible:outline-none focus-visible:ring-2',
  'disabled:pointer-events-none',
].join(' ');

export const buttonVariants = cva(buttonBase, {
  variants: {
    size: {
      small: 'h-8 px-4 py-2.5 gap-1.5 shrink-0',
      medium: 'h-10 px-5 py-2.5 gap-2 shrink-0',
      large: 'h-12 px-6 py-2.5 gap-2.5 shrink-0',
    },
    icon: {
      none: 'gap-0',
      left: '',
      right: '',
      only: 'gap-0',
    },
    type: {
      contained: [
        'bg-primary-500 text-white',
        'hover:bg-primary-700',
        'active:bg-primary-900',
        'disabled:bg-neutral-200',
      ].join(' '),
      outlined: [
        'bg-transparent border border-[1.5px] border-primary-500 text-primary-500',
        'hover:bg-primary-600 hover:text-white hover:border-none',
        'active:bg-primary-900 active:text-white active:border-none',
        'disabled:border-neutral-300 disabled:text-neutral-300',
      ].join(' '),
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded-lg',
    },
  },
  defaultVariants: {
    size: 'medium',
    icon: 'none',
    type: 'contained',
    rounded: false,
  },
});

export const buttonSlotsBySize = {
  small: {
    text: textVariants.small,
    icon: iconVariants.small,
  },
  medium: {
    text: textVariants.medium,
    icon: iconVariants.medium,
  },
  large: {
    text: textVariants.large,
    icon: iconVariants.large,
  },
} as const;

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type ButtonSlotsBySize = typeof buttonSlotsBySize;
