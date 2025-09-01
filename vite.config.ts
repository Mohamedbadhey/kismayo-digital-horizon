import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",   // Allow access via IPv6 and localhost
    port: 8080,   // Dev server port
  },
  assetsInclude: ["**/*.JPG", "**/*.jpg"],
  plugins: [
    react(),                     // React plugin for compilation
    mode === "development" && componentTagger(), // Only run in dev
  ].filter(Boolean),             // Filter out falsy plugins
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias @ -> src
    },
  },
}));
