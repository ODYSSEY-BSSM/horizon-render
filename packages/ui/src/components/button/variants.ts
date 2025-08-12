import { tokens } from "@horizon/tokens";
import { type VariantProps, cva } from "class-variance-authority";

export const textVariants = {
  SML: "text-13 font-semibold leading-[18px] tracking-normal",
  MED: "text-14 font-semibold leading-[20px] tracking-normal",
  LRG: "text-16 font-semibold leading-[24px] tracking-normal",
} as const;

export const iconVariants = {
  CML: {
    classes: "text-16 font-regular",
    wght: tokens.fontWeight.regular,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[20],
  },
  MED: {
    classes: "text-20 font-regular",
    wght: tokens.fontWeight.regular,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[24],
  },
  LRG: {
    classes: "text-24 font-medium",
    wght: tokens.fontWeight.medium,
    grad: tokens.icons.grade[25],
    opsz: tokens.icons.opticalSize[40],
  },
} as const;

export type TextVariant = keyof typeof textVariants;
export type IconVariant = keyof typeof iconVariants;
