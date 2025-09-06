import { css } from '@emotion/react';
import { tokens } from '@horizon/tokens';

export type IconVariant = 'XS' | 'SM' | 'MD' | 'LG' | 'XL';

const makeIconStyle = (
  fontSizePx: string,
  fontWeight: keyof typeof tokens.fontWeight,
  opticalSize: keyof typeof tokens.icons.opticalSize,
) =>
  css({
    fontSize: fontSizePx,
    fontVariationSettings: `'FILL' 0, 'wght' ${tokens.fontWeight[fontWeight]}, 'GRAD' ${tokens.icons.grade[0]}, 'opsz' ${tokens.icons.opticalSize[opticalSize]}`,
  });

export const getIconStyle = (variant: IconVariant) => {
  const styles: Record<IconVariant, ReturnType<typeof css>> = {
    XS: makeIconStyle('16px', 'light', 20),
    SM: makeIconStyle('20px', 'regular', 24),
    MD: makeIconStyle('24px', 'regular', 24),
    LG: makeIconStyle('32px', 'medium', 40),
    XL: makeIconStyle('40px', 'semibold', 48),
  };

  return styles[variant];
};
