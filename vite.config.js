import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: "import jsx from '@/jsx.js'",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 90,
      },
      png: {
        quality: 90,
      },
      webp: {
        quality: 90,
      },
      avif: {
        quality: 80,
      },
    }),
  ],
});
