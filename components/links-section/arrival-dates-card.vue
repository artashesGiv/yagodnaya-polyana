<template>
  <article
    class="group link-card relative overflow-hidden rounded-[40px]"
    @click="isModalOpen = !isModalOpen"
  >
    <nuxt-img
      src="/images/links/2.png"
      class="h-full w-full duration-1500 group-hover:scale-120"
    />
    <nuxt-img
      src="/images/links/2-bg.png"
      class="absolute bottom-0 left-0 w-[93%]"
    />
    <span
      class="text-primary link-card-title absolute bottom-[12%] left-[12%] leading-none"
    >
      ДАТЫ <br />ЗАЕЗДОВ
    </span>
  </article>
  <teleport to="body">
    <modal-price :is-modal-open="isModalOpen" @close="isModalOpen = false" />
  </teleport>
</template>
<script setup lang="ts">
const isModalOpen = ref(false)
</script>
