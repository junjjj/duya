<script setup>
import Header from '@/components/Header/index.vue'
import './index.scss'
</script>
<template>
  <Header />
  <div class="box">
    <router-view></router-view>
  </div>
</template>