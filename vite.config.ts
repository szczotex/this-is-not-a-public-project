import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./", // KLUCZOWA ZMIANA: względna ścieżka dla GitHub Pages
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: mode === "development",
    rollupOptions: {
      output: {
        // UPROSZCZONE I POPRAWIONE NAZWY PLIKÓW
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/main.tsx", // STAŁA NAZWA BEZ HASHA
      }
    }
  },
  plugins: [
    react(),
    // USUNIĘTO componentTagger - powodował problemy w produkcji
    
    // DODANO PLUGIN DO AUTOMATYCZNEJ POPRAWY ŚCIEŻEK
    {
      name: 'asset-path-corrector',
      transformIndexHtml(html) {
        return html
          .replace(/(src|href)="\/assets\//g, '$1="./assets/')
          .replace(/src="\//g, 'src="./');
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // USUNIĘTO esbuild - niepotrzebne z drop (może powodować konflikty)
}));
