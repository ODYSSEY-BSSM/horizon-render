export const textVariants = {
  H1: "text-32 font-heavy leading-[44px] tracking-[-0.02em]",
  H2: "text-24 font-extrabold leading-[34px] tracking-[-0.015em]",
  H3: "text-20 font-bold leading-[28px] tracking-[-0.01em]",
  ST: "text-18 font-semibold leading-[26px] tracking-normal",
  B1: "text-16 font-regular leading-[24px] tracking-normal",
  B2: "text-14 font-light leading-[22px] tracking-normal",
  C: "text-12 font-extralight leading-[18px] tracking-[0.01em]",
  O: "text-11 font-medium leading-[16px] tracking-[0.05em]",
} as const;

export type TextVariant = keyof typeof textVariants;
