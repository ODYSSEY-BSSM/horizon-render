export const textVariants = {
  'H1': 'text-32 font-heavy leading-[44px] tracking-[-2%]',
  'H2': 'text-24 font-extrabold leading-[34px] tracking-[-1.5%]',
  'H3': 'text-20 font-bold leading-[28px] tracking-[-1%]',
  'ST': 'text-18 font-semibold leading-[26px] tracking-[0%]',
  'B1': 'text-16 font-regular leading-[24px] tracking-[0%]',
  'B2': 'text-14 font-light leading-[22px] tracking-[0%]',
  'C': 'text-12 font-extralight leading-[18px] tracking-[1%]',
  'O': 'text-11 font-medium leading-[16px] tracking-[5%]',
} as const;

export type TextVariant = keyof typeof textVariants;