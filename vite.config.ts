import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Critical for GitHub Pages
  base: "/",  // Ensures correct asset paths
  
  // Build configuration
  build: {
    outDir: "dist",  // Output directory for production build
    emptyOutDir: true,  // Clears dist folder before build
    sourcemap: mode === "development",  // Sourcemaps only in dev
    
    // CRITICAL ADDITION - Fixes asset paths
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        // Add this if you have a 404 page:
        // "404": path.resolve(__dirname, "public/404.html")
      },
      output: {
        // Ensures consistent asset paths
          assetFileNames: 'assets/[name]-[hash][extname]',
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
      }
    }
  },
  
  server: {
    host: "::",
    port: 8080,
  },
  
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Optional optimization
  esbuild: {
    drop: mode === "production" ? ["console", "debugger"] : [],
  },
}));
