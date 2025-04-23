import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    svgr({ include: '**/*.svg?react' }),
    tsconfigPaths()
  ],
  base: '/solva-tech',
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      'assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  build: {
    sourcemap: true,
  },
});

