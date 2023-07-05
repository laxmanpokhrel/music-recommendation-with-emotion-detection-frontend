import { defineConfig } from 'vite';
import dotenv from 'dotenv';
// import reactRefresh from '@vitejs/plugin-react-refresh';
import { domToCodePlugin } from 'dom-to-code/vite';
import react from '@vitejs/plugin-react';
dotenv.config();
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    process.env.NODE_ENV !== 'production'
      ? domToCodePlugin({
          mode: 'react',
        })
      : undefined,
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': '/src',
      '@Assets': '/src/assets',
      '@Atoms': '/src/ui/atoms',
      '@Molecules': '/src/ui/molecules',
      '@Organisms': '/src/ui/organisms',
      '@Templates': '/src/ui/templates',
      '@Pages': '/src/ui/pages',
      '@CustomComponents': '/src/ui/customComponents',
      '@Utils': '/src/utils',
      '@Store': '/src/store',
      '@Schemas': '/src/schemas',
      '@Hooks': '/src/hooks',
      '@Api': '/src/api',
      '@Services': '/src/api/services',
      '@Constants': '/src/constants',
      '@Queries': '/src/api/queries',
      '@Routes': '/src/routes',
      '@Animations': '/src/animations',
      '@Validation': '/src/validation',
      '@Ui': '/src/ui',
    },
  },
  define: {
    'process.env': {
      API_URL: process.env.API_URL,
      SITE_NAME: process.env.SITE_NAME,
      FAST_API_URL: process.env.FAST_API_URL,
    },
  },
  server: {
    open: true,
    port: 3040,
    proxy: {
      '/api': {
        target: process.env.API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/fastapi': {
        target: process.env.FAST_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fastapi/, ''),
      },
    },
  },
});
