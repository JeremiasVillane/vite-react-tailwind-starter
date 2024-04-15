/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import path from "path";
import react from "@vitejs/plugin-react-swc";
import million from "million/compiler";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig((env) => ({
  plugins: [
    million.vite({ auto: true }),
    react(),
    env.mode !== "test" &&
      checker({
        typescript: true,
        eslint: { lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"' },
      }),
    tsConfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: [".vitest/setup.ts"],
    include: ["**/?(*.)test.ts?(x)"],
  },
}));
