import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export const createViteConfig = (options: {
  lib?: {
    entry: string;
    name: string;
    fileName: string;
  };
}) => {
  return defineConfig({
    plugins: [react()],
    build: options.lib
      ? {
          lib: {
            entry: options.lib.entry,
            name: options.lib.name,
            fileName: options.lib.fileName,
            formats: ['es', 'cjs'],
          },
          rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
              },
            },
          },
        }
      : undefined,
  });
};
