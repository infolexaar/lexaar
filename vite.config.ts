import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    sourcemap: false,
    // SVG не инлайним — они слишком большие и так не попали бы (>4KB),
    // но явно ставим 0 чтобы исключить случайные мелкие ассеты
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
        // Хэш в имени файла для долгосрочного кэширования
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  base: "/",
  server: {
    port: 3000,
    open: true,
  },
});
