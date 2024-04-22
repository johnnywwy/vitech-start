<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <div>{{ msg }}</div>
  <HelloWorld />
  <div ref="target" class="p-5 bg-sky-300">
    <h1>

      <icon-mdi-account class="text-9xl color-red-500" />
      <!-- A basic anchor icon from Phosphor icons -->
      <div class="i-ph-anchor-simple-thin" />
      <!-- An orange alarm from Material Design Icons -->
      <div class="i-mdi-alarm text-orange-400" />
      <!-- A large Vue logo -->
      <div class="i-logos-vue text-3xl" />
      <!-- Sun in light mode, Moon in dark mode, from Carbon -->
      <button class="i-carbon-sun dark:i-carbon-moon" />
      <!-- Twemoji of laugh, turns to tear on hovering -->
      <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />

      <div class="i-cil:3d w-2em h-2em" />
      Hello world
    </h1>
    x:{{ x }}
    y:{{ y }}
    isOutside:{{ isOutside }}
  </div>

</template>

<script setup lang='ts'>
import { registerSW } from 'virtual:pwa-register'

const target = ref(null)

const msg = ref('泥猴啊啊啊')

const { x, y, isOutside } = useMouseInElement(target)

// const { x, y, isOut } = useMouseInElenent(target)


onMounted(() => {
  console.log('我来了');

  registerSW({
    immediate: true,

    onNeedRefresh() {
      // 显示刷新按钮
      console.log('需要进行刷新了');
    },

    onRegisteredSW(url, registration) {

      console.log('hfhfdhfhhfhf', url, registration);


      setInterval(() => {
        registration?.update()

      }, 5000)
    }
  })
})



</script>

<style scoped></style>


<route lang="yaml">
  meta:
    layout: default
</route>