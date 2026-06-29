import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Pure client-side SPA build. Output: dist/index.html + assets.
// Host: GitHub Pages.
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
  ],
  resolve: {
    alias: {
      "@": new URL("./src/", import.meta.url).pathname,
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    // Sta de Cloudflare-tunnel-subdomeinen toe (test/dev/test26.kevinfroger.nl),
    // anders blokkeert de dev-server de tunnel-host met 403.
    allowedHosts: [".kevinfroger.nl"],
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    target: "es2022",
  },
});
