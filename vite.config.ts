import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Оптимизация для продакшена
    minify: "terser",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделение vendor библиотек
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  // Базовый путь для деплоя (если нужен подпапка)
  base: "/",
  // Настройки для разработки
  server: {
    port: 3000,
    open: true,
  },
});
