<template>
  <div>
    <h1>404</h1>
    <RouterView />
    <button @click="router.back()">返回</button>
  </div>
</template>

<script setup lang='ts'>
const router = useRouter()

</script>

<style lang='scss' scoped></style>