import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/variables.scss";
        `,
      }
    }
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
