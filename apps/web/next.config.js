/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@horizon/ui', '@horizon/utils', '@horizon/tokens'],
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
