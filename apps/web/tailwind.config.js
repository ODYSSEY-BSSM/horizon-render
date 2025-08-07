/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@horizon/ui/tailwind-preset')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};