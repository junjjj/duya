<script setup>
import { appName } from '@/utils/app'
import {
  ElButton,
} from 'element-plus'
import { useRouter } from 'vue-router'
import './index.scss'
const router = useRouter()

const toLogin = () => {
  router.push({
    path: '/login',
    params: {
      duya: 'duyacode',
    },
  })
}
console.log('启动服务')
// 跳转到首页
const toHome = () => {
  router.push({
    path: '/dashboard'
  })
}

</script>
<template>
  <div class="duya-header">
    <span id="appName" @click="toHome">{{ appName }}</span>
    <div>
      <!-- 判读当前用户是否已经登录过了，如果没有登录，则展示 登录/注册 然后跳转到登录界面 -->
      <ElButton class="header-text" type="text" @click="toLogin">登录/注册</ElButton>
    </div>
  </div>
</template>