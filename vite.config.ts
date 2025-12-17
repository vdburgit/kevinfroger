import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  esbuild: {
    target: 'es2022',
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  build: {
    outDir: 'dist',
    target: 'es2022',
    cssCodeSplit: false,
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 2048,
    reportCompressedSize: false,
    cssMinify: 'esbuild',
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
        },
      },
      external: [],
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
        warn(warning)
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    exclude: ['@vite/client', '@vite/env'],
    force: false,
  },
  server: {
    host: true,                 // bind op 0.0.0.0
    port: 3000,
    cors: true,
    headers: { 'Cache-Control': 'no-cache' },

    // ✅ sta je publieke host toe (Cloudflare Tunnel)
    allowedHosts: ['dev.kevinfroger.nl'],

    // ✅ HMR via je HTTPS-tunnel
    hmr: {
      host: 'dev.kevinfroger.nl',
      clientPort: 443,
      protocol: 'wss',
    },

    // (optioneel, maar helpt soms met absolute URLs achter proxy)
    origin: 'https://dev.kevinfroger.nl',
    strictPort: true,
  },
})
