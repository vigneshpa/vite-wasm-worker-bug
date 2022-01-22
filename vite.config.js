import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    // To prevent inlining this small test wasm file, in my problem i have to use wasm file of size 5MB.
    assetsInlineLimit: 0,
  },
});
