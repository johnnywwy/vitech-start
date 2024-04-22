<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <div>{{ msg }}</div>
  <div ref="target" class="p-5 bg-sky-500">
    <h1>Hello world</h1>
    x:{{ x }}
    y:{{ y }}
    isOutside:{{ isOutside }}
  </div>

</template>

<script setup lang='ts'>

const target = ref(null)

const msg = ref('泥猴啊啊啊')

const { x, y, isOutside } = useMouseInElement(target)

// const { x, y, isOut } = useMouseInElenent(target)



</script>

<style scoped></style>