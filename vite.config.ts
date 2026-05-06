import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  define: {
    // Bakes the build timestamp into the bundle at compile time.
    // Every Netlify deploy produces a new value, which the version-check
    // hook uses to detect when a fresh deploy has landed.
    __BUILD_TIME__: JSON.stringify(String(Date.now())),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})