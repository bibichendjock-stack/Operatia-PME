import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration simplifiée et robuste pour Vite 8 et Vercel
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1600,
  }
})
