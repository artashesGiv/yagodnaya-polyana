<template>
  <article
    class="group link-card relative overflow-hidden rounded-[40px]"
    @click="isModalOpen = !isModalOpen"
  >
    <div
      class="bg-primary absolute top-0 left-0 z-10 flex h-[45%] w-full items-center justify-center rounded-t-[40px]"
    >
      <span class="font-druzhok link-card-title leading-none text-white">
        НАШИ <br />ВРАЧИ
      </span>
    </div>
    <nuxt-img
      src="/images/links/8.png"
      class="h-full w-full duration-1500 group-hover:scale-120"
    />
  </article>
  <teleport to="body">
    <modal-principles-health
      :is-modal-open="isModalOpen"
      @close="isModalOpen = false"
    />
  </teleport>
</template>

<script setup lang="ts">
const isModalOpen = ref(false)
</script>
