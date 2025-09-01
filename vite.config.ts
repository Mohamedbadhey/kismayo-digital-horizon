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
