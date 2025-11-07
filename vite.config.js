// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(),],
  define: {
    __COLORS__: {
      primary: '#E63946',
      secondary: '#F8C1C1',
      secondaryNav: '#FFFFFF',
      accent: '#E5E5E5',
      text: '#1E1E1E',
      white: '#FFFFFF',
    },
  },
})