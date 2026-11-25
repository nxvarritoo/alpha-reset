import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Una base relativa funciona tanto en local como en cualquier subruta de GitHub Pages.
  base: './',
})
