<script setup>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import './index.scss'
</script>
<template>
  <Header />
  <div class="box">
    <router-view></router-view>
  </div>
  <Footer />
</template>