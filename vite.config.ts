import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import path, { resolve } from 'path'

export default defineConfig({
  plugins: [
    Vue(),
    ElementPlus({
      useSource: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~/': `${path.resolve(__dirname, 'src')}/`,
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
