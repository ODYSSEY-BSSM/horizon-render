/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.build = config.build || {};
    config.build.rollupOptions = config.build.rollupOptions || {};
    config.build.rollupOptions.output = config.build.rollupOptions.output || {};

    // Manual chunks로 번들 분할 (함수형으로 더 세밀한 제어)
    config.build.rollupOptions.output.manualChunks = (id) => {
      // node_modules의 패키지들을 벤더 청크로 분리
      if (id.includes('node_modules')) {
        // React 관련
        if (id.includes('react') || id.includes('react-dom')) {
          return 'react-vendor';
        }
        // Storybook 관련
        if (id.includes('@storybook')) {
          return 'storybook-vendor';
        }
        // Emotion 스타일링
        if (id.includes('@emotion')) {
          return 'emotion-vendor';
        }
        // 기타 큰 라이브러리들
        if (id.includes('lodash') || id.includes('moment')) {
          return 'utils-vendor';
        }
        // 나머지 vendor들
        return 'vendor';
      }

      // 우리 패키지들
      if (id.includes('@horizon')) {
        return 'horizon-ui';
      }
    };

    // 청크 크기 경고 임계값 증가 (500kb → 800kb)
    config.build.chunkSizeWarningLimit = 800;

    return config;
  },
};
export default config;
