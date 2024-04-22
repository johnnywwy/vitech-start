<template>
  <div class='about'>
    <h1>This is an about page</h1>
    <div class="p-8 text-3xl bg-gray-500">
      hello unocss
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.about {
  width: 100%;
  height: 100%;
  background-color: skyblue;
}
</style>

<route lang="yaml">
  meta:
    layout: default
</route>