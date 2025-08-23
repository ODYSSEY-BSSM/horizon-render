export const textFieldVariants = {
  default:
    'flex h-10 w-full items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-14 font-light leading-[22px] font-suit text-black placeholder:text-neutral-400 focus:border-2 focus:border-primary-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  holding:
    'flex h-10 w-full items-center gap-2 rounded-lg border-2 border-primary-500 bg-white px-3 py-2.5 text-14 font-light leading-[22px] font-suit text-black placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  filled:
    'flex h-10 w-full items-center gap-2 rounded-lg border border-primary-500 bg-white px-3 py-2.5 text-14 font-light leading-[22px] font-suit text-black placeholder:text-neutral-400 focus:border-2 focus:border-primary-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  error:
    'flex h-10 w-full items-center gap-2 rounded-lg border border-warning-200 bg-white px-3 py-2.5 text-14 font-light leading-[22px] font-suit text-black placeholder:text-neutral-400 focus:border-2 focus:border-warning-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
} as const;

export const containerVariants = {
  base: 'flex flex-col gap-1',
} as const;

export type TextFieldVariant = keyof typeof textFieldVariants;
