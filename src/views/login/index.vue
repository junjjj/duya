<script setup>
import { useRoute } from 'vue-router'
import {
  ElForm,
  ElInput,
  ElFormItem,
  ElButton,
} from 'element-plus'
import './index.scss'

const route = useRoute()

console.log(route)

</script>
<template>
  <div class="login">
    <div class="login-box">
      <div class="login-title">DuYa</div>
      <ElForm>
        <ElFormItem>
          <ElInput placeholder="账号" />
        </ElFormItem>
        <ElFormItem>
          <ElInput placeholder="请输入密码" type="password" show-password />
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary" class="login-btn">登录</ElButton>
        </ElFormItem>
      </ElForm>
    </div>
  </div>
</template>