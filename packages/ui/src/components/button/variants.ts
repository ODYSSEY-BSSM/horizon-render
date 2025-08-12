import { tokens } from "@horizon/tokens";
import { type VariantProps, cva } from "class-variance-authority";

export const textVariants = {
  SML: "text-13 font-semibold leading-[18px] tracking-normal",
  MED: "text-14 font-semibold leading-[20px] tracking-normal",
  LRG: "text-16 font-semibold leading-[24px] tracking-normal",
} as const;

export const iconVariants = {
  SML: {
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

export const buttonBase = [
  "inline-flex items-center justify-center",
  "font-suit select-none transition-colors",
  "bg-primary-500 text-white",
  "hover:bg-primary-700",
  "focus-visible:outline-none focus-visible:ring-2",
  "active:bg-primary-900",
  "disabled:pointer-events-none disabled:bg-neutral-200",
].join(" ");

export const buttonVariants = cva(buttonBase, {
  variants: {
    size: {
      SML: "h-8 px-4 py-2.5 gap-1.5 shrink-0 rounded-lg",
      MED: "h-10 px-5 py-2.5 gap-2 shrink-0 rounded-lg",
      LRG: "h-12 px-6 py-2.5 gap-2.5 shrink-0 rounded-lg",
    },
    icon: {
      none: "gap-0",
      left: "gap-1.5",
      right: "gap-1.5",
      only: "gap-2.5",
    },
    type: {
      contained: "",
      outlined: "",
    },
  },
  defaultVariants: {
    size: "MED",
  },
});

export const buttonSlotsBySize = {
  SML: {
    text: textVariants.SML,
    icon: iconVariants.SML,
  },
  MED: {
    text: textVariants.MED,
    icon: iconVariants.MED,
  },
  LRG: {
    text: textVariants.LRG,
    icon: iconVariants.LRG,
  },
} as const;
export type ButtonSlotsBySize = typeof buttonSlotsBySize;
