import { tokens } from '@horizon/tokens';

export const iconVariants = {
  XS: {
    classes: 'text-16 font-light',
    wght: tokens.fontWeight.light,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[20],
  },
  SM: {
    classes: 'text-20 font-regular',
    wght: tokens.fontWeight.regular,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[24],
  },
  MD: {
    classes: 'text-24 font-regular',
    wght: tokens.fontWeight.regular,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[24],
  },
  LG: {
    classes: 'text-32 font-medium',
    wght: tokens.fontWeight.medium,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[40],
  },
  XL: {
    classes: 'text-40 font-semibold',
    wght: tokens.fontWeight.semibold,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[48],
  },
} as const;

export type IconVariant = keyof typeof iconVariants;
