<script lang="ts" setup>
import Button from '@/components/Button/index.vue'
import request from '@/api/request'

const renderTemplate = () => {
  console.log('根据 Schema JSON 生成编译文件')
  request
    .post('/lowcode/compile',
    // <div><button @click="handleConsoleOutput">添加</button></div>
      {
        filename: 'button.vue',
        fileJSON: {
          tag: 'div',
          children: [
            {
              tag: 'h1',
              props: {
                title: 'String',
              },
            },
            {
              tag: 'button',
              events: {
                click: {
                  handleBtnClick: '() => { console.log("这是我的测试代码") }',
                  handleLogBtnClick: '() => { console.log("这是我的测试代码") }',
                }
              },
              text: '测试',
            }
          ]
        }
      }
    )
    .then(res => {
      console.log(res)
    })
}

</script>

<template>
  <div>
    <button @click="renderTemplate">生成</button>
    <Button title="测试" />
  </div>
</template>