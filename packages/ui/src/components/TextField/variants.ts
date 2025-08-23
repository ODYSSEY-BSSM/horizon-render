import { cva } from 'class-variance-authority';

export const containerVariants = cva(['flex', 'flex-col', 'gap-1']);

export const textFieldVariants = cva(
  [
    'flex',
    'h-10',
    'w-full',
    'items-center',
    'gap-2',
    'rounded-lg',
    'border',
    'bg-white',
    'px-3',
    'py-2.5',
    'text-14',
    'font-light',
    'leading-[22px]',
    'font-suit',
    'text-black',
    'placeholder:text-neutral-400',
    'transition-colors',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ],
  {
    variants: {
      error: {
        true: ['border-warning-200', 'focus:border-2', 'focus:border-warning-200'],
        false: ['border-neutral-300', 'focus:border-2', 'focus:border-primary-500'],
      },
      hasIcon: {
        true: ['pl-11'],
        false: [],
      },
      filled: {
        true: ['border-primary-500'],
        false: [],
      },
    },
    compoundVariants: [
      {
        error: true,
        filled: true,
        class: ['border-warning-200'],
      },
    ],
    defaultVariants: {
      error: false,
      hasIcon: false,
      filled: false,
    },
  }
);

export type TextFieldVariantProps = NonNullable<Parameters<typeof textFieldVariants>[0]>;
