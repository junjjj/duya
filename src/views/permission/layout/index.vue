<script setup>
import { computed } from 'vue'
import { ElMenu } from 'element-plus'
import { useRouter, } from 'vue-router';
import './index.scss'

const useRoute = useRouter()

const menus = computed(() => [
  {
    path: 'list',
    name: 'list',
    title: '权限列表',
  },
  {
    path: 'list',
    name: 'list',
    title: '设置权限',
  },
  {
    path: 'list',
    name: 'list',
    title: '人员管理',
  }
])

// 菜单点击事件
const handleMenuClick = (menu) => {
  useRoute.push({
    path: `/permission/${menu.path}`
  })
}

// 权限首页
const handleToMenuMain = () => {
  useRoute.push({
    path: '/permission'
  })
}

</script>

<template>
  <div class="permission">
    <aside class="aside">
      <h5 @click="handleToMenuMain">权限中心</h5>
      <!-- 具体的菜单 -->
      <ul>
        <li v-for="menu in menus" @click="handleMenuClick(menu)">
          {{ menu.title }}
        </li>
      </ul>
    </aside>
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>