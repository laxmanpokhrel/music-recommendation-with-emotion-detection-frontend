import dotenv from 'dotenv';
import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react';

dotenv.config();
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '@': new URL('./src/', import.meta.url).pathname,
      '@Assets': new URL('./src/assets/', import.meta.url).pathname,
      '@Atoms': new URL('./src/ui/atoms/', import.meta.url).pathname,
      '@Molecules': new URL('./src/ui/molecules/', import.meta.url).pathname,
      '@Organisms': new URL('./src/ui/organisms/', import.meta.url).pathname,
      '@Templates': new URL('./src/ui/templates/', import.meta.url).pathname,
      '@Pages': new URL('./src/ui/pages/', import.meta.url).pathname,
      '@CustomComponents': new URL('./src/ui/customComponents/', import.meta.url).pathname,
      '@Utils': new URL('./src/utils/', import.meta.url).pathname,
      '@Store': new URL('./src/store/', import.meta.url).pathname,
      '@Schemas': new URL('./src/schemas/', import.meta.url).pathname,
      '@Hooks': new URL('./src/hooks/', import.meta.url).pathname,
      '@Api': new URL('./src/api/', import.meta.url).pathname,
      '@Services': new URL('./src/api/services/', import.meta.url).pathname,
      '@Constants': new URL('./src/constants/', import.meta.url).pathname,
      '@Queries': new URL('./src/api/queries/', import.meta.url).pathname,
      '@Routes': new URL('./src/routes/', import.meta.url).pathname,
    },
  },
  build: {
    sourcemap: true,
  },
  define: {
    'process.env': {
      BASE_URL: process.env.BASE_URL,
      SITE_NAME: process.env.SITE_NAME,
      FAST_API: process.env.FAST_API,
    },
  },
  server: {
    open: true,
    port: 3030,
    proxy: {
      '/api': {
        target: process.env.BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/fastapi': {
        target: process.env.FAST_API,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fastapi/, ''),
      },
    },
  },
});
