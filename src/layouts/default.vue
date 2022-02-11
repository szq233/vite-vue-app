<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="header">
    <router-link to="/">首页</router-link>
    |
    <router-link to="/about">关于</router-link>
  </div>
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 100px;
}
.body {
  height: calc(100% - 100px);
}
</style>