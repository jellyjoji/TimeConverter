import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { env } from "node:process";

const isDev = env.NODE_ENV === "development";

// https://vitejs.dev/config/
export default defineConfig({
  // github pages 배포 주소 변경
  base: "/TimeConverter/",
  // base: env.PUBLIC_URL,
  plugins: [react()],
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: isDev
        ? "[name]_[local]__[hash:base64:5]"
        : "[hash:base64:4]",
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
