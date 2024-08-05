import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          VITE_GOOGLE_ANALYTICS_ID: process.env.VITE_GOOGLE_ANALYTICS_ID,
        },
      },
    }),
  ],
  assetsInclude: ['**/*.exe'],
})
