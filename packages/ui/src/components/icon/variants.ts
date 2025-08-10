export const iconVariants = {
  XS: "text-16 font-light icon-grade-0 icon-size-20",
  SM: "text-20 font-regular icon-grade-0 icon-size-24",
  MD: "text-24 font-regular icon-grade-0 icon-size-32",
  LG: "text-32 font-medium icon-grade-0 icon-size-40",
  XL: "text-40 font-semibold icon-grade-0 icon-size-48",
} as const;

export type IconVariant = keyof typeof iconVariants;
