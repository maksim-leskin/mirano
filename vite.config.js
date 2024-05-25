import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import postcssConfig from "./postcss.config";

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
  css: {
    postcss: postcssConfig,
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
