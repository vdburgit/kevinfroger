import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
          seo: [
            'src/pages/seo/DJRotterdamPage.tsx',
            'src/pages/seo/DJDenHaagPage.tsx',
            'src/pages/seo/DJHoekscheWaardPage.tsx'
          ],
          components: [
            'src/components/ContactForm.tsx',
            'src/components/PartnersSection.tsx',
            'src/components/MusicGenresSection.tsx'
          ]
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    exclude: ['@vite/client', '@vite/env']
  },
  server: {
    hmr: { overlay: false },
    host: true,
  },
})
