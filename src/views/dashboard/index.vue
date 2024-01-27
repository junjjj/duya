<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Footer from '@/components/Footer/index.vue'
import './index.scss'

const router = useRouter()

const Menu = computed(() => [
  {
    name: 'DevOps',
    path: 'devops',
    id: 'devops',
  },
  {
    name: '权限中心',
    path: 'permission',
    id: 'permission',
  }
])

const toRoute = menu => {
  console.log(router)
  router.push({
    path: menu.path,
  })
}

</script>
<template>
  <!-- 内容区域，做内容/功能推广 -->
  <div class="root-container">
    <div class="root-fl">
      <a
        v-for="menu in Menu"
        :key="menu.id"
        class="root-fl-item"
        @click="toRoute(menu)"
      >
        <h5>{{ menu.name }}</h5>
      </a>
    </div>
  </div>
  <Footer />
</template>