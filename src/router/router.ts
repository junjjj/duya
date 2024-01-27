export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard', // 工作台首页
        component: () => import('@/views/dashboard/index.vue'),
        name: 'dashboard',
        meta: {
          title: '首页',
        },
      },
      {
        path: 'permission', // 权限中心
        name: 'permission',
        component: () => import('@/views/permission/layout/index.vue'),
        children: [
          {
            path: '', // 默认权限首页
            name: 'permissionIndex',
            component: () => import('@/views/permission/index.vue'),
          },
          {
            path: 'list',
            name: 'permissionList',
            component: () => import('@/views/permission/list/index.vue'),
          }
        ],
        meta: {
          meta: '权限中心',
        },
      },
      {
        path: '/404',
        name: 'NotFound',
        component: () => import('@/views/exception/404.vue'),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
    redirect: "/404",
    name: "ErrorPage",
    meta: {
      hidden: true
    }
  },
]
