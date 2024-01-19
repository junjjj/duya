<script setup>
import { useRouter } from 'vue-router'
import './index.scss'

const useRoute = useRouter()

const toHome = () => {
  useRoute.push({
    name: 'dashboard',
  })
}
</script>
<template>
  <div class="exception">
    <i class="iconfont icon-a-404cuowu exception-img" />
    <div class="exception-box">
      <span class="btn" @click="toHome">返回首页</span>
    </div>
  </div>
</template>