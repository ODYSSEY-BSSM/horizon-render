export const textVariants = {
  'H1': 'text-32 font-heavy lineHeight-44 letterSpacing--2',
  'H2': 'text-24 font-extrabold lineHeight-34 letterSpacing--1.5',
  'H3': 'text-20 font-bold lineHeight-28 letterSpacing--1',
  'ST': 'text-18 font-semibold lineHeight-26 letterSpacing-0',
  'B1': 'text-16 font-regular lineHeight-24 letterSpacing-0',
  'B2': 'text-14 font-light lineHeight-22 letterSpacing-0',
  'C': 'text-12 font-extralight lineHeight-18 letterSpacing-1',
  'O': 'text-11 font-medium lineHeight-16 letterSpacing-5',
} as const;

export type TextVariant = keyof typeof textVariants;