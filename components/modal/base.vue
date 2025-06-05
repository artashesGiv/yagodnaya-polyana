<template>
  <transition name="fade">
    <div
      v-if="isModalOpen"
      v-on-click-outside="() => $emit('close')"
      class="fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 transform overflow-auto max-md:max-h-[80%] sm:w-[80%] lg:h-auto"
    >
      <slot />
    </div>
  </transition>
  <transition name="fade">
    <div v-if="isModalOpen" class="fixed inset-0 z-40 bg-black/50" />
  </transition>
</template>
<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'

type Props = {
  isModalOpen: boolean
}

type Emits = {
  (e: 'close'): void
}

const props = defineProps<Props>()
defineEmits<Emits>()

const updateBodyClass = () => {
  if (props.isModalOpen) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
}

watch(() => props.isModalOpen, updateBodyClass)
</script>
