import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",   // Allow access via IPv6 and localhost
    port: 8080,   // Dev server port
  },
  assetsInclude: ["**/*.JPG", "**/*.jpg"],
  build: {
    target: 'es2015',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  plugins: [
    react(),                     // React plugin for compilation
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias @ -> src
    },
  },
});
