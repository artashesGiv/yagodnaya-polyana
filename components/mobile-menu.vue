<template>
  <div
    class="shadow-base relative rounded-b-[16px] bg-white px-[18px] py-[24px]"
  >
    <ul class="flex flex-col items-center gap-[8px]">
      <li
        v-for="link in links"
        :key="link.id"
        class="text-main-black transition-base cursor-pointer py-[10px] text-[24px] transition-colors hover:text-green-800"
        @click="onScroll(link.id)"
      >
        {{ link.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
export type MobileMenuProps = {
  links: { title: string; id: string }[]
}

type Emits = {
  (e: 'close'): void
}

defineProps<MobileMenuProps>()

const emit = defineEmits<Emits>()

const { scrollTo } = useSmoothScroll()

const onScroll = (id: string) => {
  scrollTo(id)
  emit('close')
}
</script>
