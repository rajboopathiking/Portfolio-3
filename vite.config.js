// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', 
  },
  server: {
    port: 0.0.0.0, 
  },
});
