import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1600,
  },
  // Force le compilateur à ignorer les alertes et finaliser le build
  logLevel: 'silent'
})
