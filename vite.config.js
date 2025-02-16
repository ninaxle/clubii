import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: resolve(__dirname, "src"), // Make sure this is an absolute path
  build: {
    emptyOutDir: true, // Add this to clear the output directory
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
  server: {
    port: 5173,
  },
  publicDir: resolve(__dirname, "assets"), // Use absolute path for public directory
  plugins: [
    tailwindcss(),
  ],
});
