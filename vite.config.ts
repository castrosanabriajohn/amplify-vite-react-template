import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false, // Disable minification to save memory
    sourcemap: false, // Disable source map generation
  },
})
