# Vue-router
梳理 Vue-router 方面的知识

## history 路由，为什么通过 nginx 会出现 404 的情况

Vue.js 使用的前端路由，分两种模式 `history` 和 `hash` 格式的。如果使用的是 `history` 模式，并且没有配置正确的路由重写规则，就会出现 `404` 错误。

在 nginx 的配置文件中，需要添加一个路由重写规则，将所有请求都重定向到 Vue.js 的入口文件（通常是 index.html。这样 Vue.js 就能正确的处理请求了。

```text
server {
  ...
  location / {
    try_files $uri $uri/ /index.html
  }
  ...
}
```

## 请说一下 hash 模式和 histroy 模式的区别

## 说一下 hash 模式和 histroy 模式的具体实现原理

## vue-router 中有哪些传参方式
