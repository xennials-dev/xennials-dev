import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        playground: resolve(__dirname, 'playground.html'),
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
