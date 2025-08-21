import { tokens } from '@horizon/tokens';

const preset = {
  content: [],
  safelist: ['text-13', 'text-14', 'text-16', 'text-20', 'text-24', 'text-32', 'text-40'],
  theme: {
    extend: {
      colors: tokens.colors,
      fontFamily: tokens.fontFamily,
      fontSize: tokens.fontSize,
      fontWeight: tokens.fontWeight,
      lineHeight: tokens.lineHeight,
      letterSpacing: tokens.letterSpacing,
    },
  },
  plugins: [
    ({ addUtilities }) => {
      const layoutUtilities = {
        '.grid': {
          display: 'grid',
          gridTemplateColumns: `repeat(${tokens.grid.columns}, 1fr)`,
          gap: tokens.grid.gutterWidth,
          margin: `0 ${tokens.grid.margin}`,
        },
        '.stroke': {
          borderWidth: tokens.stroke.weight,
          borderColor: tokens.stroke.color,
        },
        '.rounding-object': {
          borderRadius: tokens.rounding.object,
        },
        '.rounding-section': {
          borderRadius: tokens.rounding.section,
        },
      };

      addUtilities(layoutUtilities);
    },
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  ...preset,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};

export { preset };
