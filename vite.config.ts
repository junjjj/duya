import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
  },
})
