<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="handleBtnClick">测试</button>
  </div>
</template>
<script setup>
import { handleBtnClick } from './handlers'

const { title, } = defineProps({
  title: String,
})
</script>