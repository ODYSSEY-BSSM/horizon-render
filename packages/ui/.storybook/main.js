/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    const { default: tailwindcss } = await import('tailwindcss');
    const { default: autoprefixer } = await import('autoprefixer');
    const path = await import('node:path');

    config.css = {
      ...config.css,
      postcss: {
        plugins: [tailwindcss('./tailwind.config.js'), autoprefixer],
      },
    };

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, '../src'),
      },
    };

    return config;
  },
};
export default config;
