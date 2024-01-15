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
    extensions: ['.ts', '.js', '.vue'],
  },
  // 本地测试，配置跨域
  server: {
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
