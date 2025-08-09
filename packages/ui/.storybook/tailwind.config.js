const mainConfig = require('../tailwind.config.js');

module.exports = {
  ...mainConfig,
  content: [
    '../src/**/*.{js,ts,jsx,tsx,mdx}',
    '../**/*.stories.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}'
  ],
};