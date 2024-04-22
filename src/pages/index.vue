<template>
  <div>
    home
  </div>
</template>

<script setup lang='ts'>
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  console.log('我来了');

  registerSW({
    immediate: true,
    // onNeedRefresh() {
    //   // 显示刷新按钮
    //   console.log('需要进行刷新了');
    // },

    onRegisteredSW(url, registration) {
      setInterval(() => {
        registration?.update()
      }, 3600 * 1000)
    }
  })
})

</script>

<style scoped></style>


<route lang="yaml">
  meta:
    layout: default
</route>