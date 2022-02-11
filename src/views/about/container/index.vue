<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <p>这是一个关于的页面</p>
</template>

<style lang="scss" scoped>

</style>