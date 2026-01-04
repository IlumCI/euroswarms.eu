import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  // base: '/', // Uncomment and set if deploying to a subdirectory
  server: {
    port: 4321,
  },
});
