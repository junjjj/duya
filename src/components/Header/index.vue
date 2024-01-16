<script setup>
import { appName } from '@/utils/app'
import {
  ElButton,
} from 'element-plus'
import './index.scss'
</script>
<template>
  <div class="duya-header">
    <span>{{ appName }}</span>
    <div>
      <!-- 判读当前用户是否已经登录过了，如果没有登录，则展示 登录/注册 然后跳转到登录界面 -->
      <ElButton size="small" type="primary">登录/注册</ElButton>
    </div>
  </div>
</template>