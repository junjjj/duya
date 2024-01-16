import { createRouter, createWebHistory, } from 'vue-router'
import routes from './router'

const router = createRouter({
  // H5 histroy 路由
  // 文档存放在 docs/vue-router.md 文档中
  history: createWebHistory(),
  routes,
})

export default router
