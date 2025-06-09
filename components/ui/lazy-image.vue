<template>
  <nuxt-img
    v-bind="$attrs"
    class="opacity-0 transition-opacity duration-700"
    :class="{ 'opacity-100': loaded }"
    loading="lazy"
    @load="onLoad"
  />
</template>

<script setup lang="ts">
const loaded = ref(false)
const onLoad = () => {
  loaded.value = true
}
</script>
