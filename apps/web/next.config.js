/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@horizon/ui', '@horizon/hooks', '@horizon/tokens'],
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
