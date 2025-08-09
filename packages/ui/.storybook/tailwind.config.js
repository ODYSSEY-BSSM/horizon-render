import mainConfig from '../tailwind.config.js';

export default {
  ...mainConfig,
  content: [
    '../src/**/*.{js,ts,jsx,tsx,mdx}',
    '../**/*.stories.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}'
  ],
};