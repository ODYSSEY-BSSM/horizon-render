import { tokens } from "@horizon/tokens";

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
    ({ addUtilities }) => {
      // Helper function to generate font-variation-settings string
      function getFontVariationSettings(settings) {
        return Object.entries(settings)
          .map(([axis, value]) => `'${axis}' ${value}`)
          .join(", ");
      }

      const iconUtilities = {};

      // Fill utilities
      for (const [key, value] of Object.entries(tokens.icons.fill)) {
        iconUtilities[`.icon-fill-${key}`] = {
          "font-variation-settings": getFontVariationSettings({ FILL: value, wght: 400, GRAD: 0 }),
        };
      }

      // Grade utilities
      for (const [key, value] of Object.entries(tokens.icons.grade)) {
        iconUtilities[`.icon-grade-${key}`] = {
          "font-variation-settings": getFontVariationSettings({ FILL: 0, wght: 400, GRAD: value }),
        };
      }

      // OpticalSize utilities
      for (const [key, value] of Object.entries(tokens.icons.opticalSize)) {
        iconUtilities[`.icon-size-${key}`] = {
          "font-variation-settings": getFontVariationSettings({
            FILL: 0,
            wght: 400,
            GRAD: 0,
            opsz: value,
          }),
        };
      }

      addUtilities(iconUtilities);
    },
    ({ addUtilities }) => {
      const layoutUtilities = {
        ".grid": {
          display: "grid",
          gridTemplateColumns: `repeat(${tokens.grid.columns}, 1fr)`,
          gap: tokens.grid.gutterWidth,
          margin: `0 ${tokens.grid.margin}`,
        },
        ".stroke": {
          borderWidth: tokens.stroke.weight,
          borderColor: tokens.stroke.color,
        },
        ".rounding-object": {
          borderRadius: tokens.rounding.object,
        },
        ".rounding-section": {
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
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};

export { preset };
