import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import mime from 'mime';

export default defineConfig(({ mode }) => ({
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: mode === "development",
    rollupOptions: {
      output: {
        // CRITICAL FIX: Ensure proper file extensions
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (extType === 'css') return 'assets/[name]-[hash][extname]';
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/main.js'
      }
    }
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Add MIME type plugin
    {
      name: 'mime-fix',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.includes('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
          }
          next();
        });
      }
    }
  ].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  esbuild: { drop: mode === "production" ? ["console", "debugger"] : [] },
}));
