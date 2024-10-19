import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "jsdom", // for React testing
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"), // This matches your Next.js alias for "@"
    },
  },
});
