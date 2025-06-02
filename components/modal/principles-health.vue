<template>
  <modal-base :is-modal-open="isModalOpen" @close="$emit('close')">
    <div class="bg-primary flex flex-col gap-8 p-8 sm:p-12">
      <h2
        class="font-druzhok text-white-secondary 3xl:text-[60px] text-center text-[24px] sm:text-[36px] lg:text-[40px]"
      >
        8 принципов здоровья
      </h2>

      <ul class="flex flex-col gap-8 lg:grid lg:grid-cols-2">
        <li
          v-for="(principle, index) in principles"
          :key="principle.title"
          class="font-druzhok 3xl:text-[40px] flex items-center gap-4 text-[18px] sm:text-[24px] xl:gap-8 xl:text-[30px]"
        >
          <p class="text-white-secondary">
            {{ index + 1 }}
          </p>
          <nuxt-img
            :src="principle.img"
            :alt="principle.title"
            class="3xl:size-[160px] size-[60px] sm:size-[80px] xl:size-[120px]"
          />
          <p class="text-white-secondary">
            {{ principle.title }}
          </p>
        </li>
      </ul>
    </div>
  </modal-base>
</template>

<script setup lang="ts">
type Props = {
  isModalOpen: boolean
}
type Emits = {
  (e: 'close'): void
}

defineProps<Props>()
defineEmits<Emits>()

const principles = [
  {
    img: '/images/principles-health/nutrition.png',
    title: 'ПРАВИЛЬНОЕ ПИТАНИЕ',
  },
  {
    img: '/images/principles-health/air.png',
    title: 'ЧИСТЫЙ ВОЗДУХ',
  },
  {
    img: '/images/principles-health/water.png',
    title: 'ВОДА',
  },
  {
    img: '/images/principles-health/faith.png',
    title: 'ВЕРА',
  },
  {
    img: '/images/principles-health/sun.png',
    title: 'СОЛНЕЧНЫЙ СВЕТ',
  },
  {
    img: '/images/principles-health/abstinence.png',
    title: 'ВОЗДЕРЖАНИЕ',
  },
  {
    img: '/images/principles-health/sport.png',
    title: 'ФИЗИЧЕСКИЕ УПРАЖНЕНИЯ',
  },
  {
    img: '/images/principles-health/rest.png',
    title: 'ОТДЫХ',
  },
]
</script>
