import { tokens } from '@horizon/tokens';

const preset = {
  content: [],
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
    function({ addUtilities }) {
      // Helper function to generate font-variation-settings string
      function getFontVariationSettings(settings) {
        return Object.entries(settings)
          .map(([axis, value]) => `'${axis}' ${value}`)
          .join(', ');
      }

      const iconUtilities = {};

      // Fill utilities
      Object.entries(tokens.icons.fill).forEach(([key, value]) => {
        iconUtilities[`.icon-fill-${key}`] = {
          'font-variation-settings': getFontVariationSettings({ FILL: value, wght: 400, GRAD: 0 }),
        };
      });

      // Grade utilities
      Object.entries(tokens.icons.grade).forEach(([key, value]) => {
        iconUtilities[`.icon-grade-${key}`] = {
          'font-variation-settings': getFontVariationSettings({ FILL: 0, wght: 400, GRAD: value }),
        };
      });

      // OpticalSize utilities
      Object.entries(tokens.icons.opticalSize).forEach(([key, value]) => {
        iconUtilities[`.icon-size-${key}`] = {
          'font-variation-settings': getFontVariationSettings({ FILL: 0, wght: 400, GRAD: 0, opsz: value }),
        };
      });

      addUtilities(iconUtilities);
    },
    function({ addUtilities }) {
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
        }
      };

      addUtilities(layoutUtilities);
    }
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  ...preset,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
};

export { preset };