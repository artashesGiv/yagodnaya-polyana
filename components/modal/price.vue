<template>
  <modal-base :is-modal-open="isModalOpen" @close="$emit('close')">
    <div
      class="bg-white-secondary relative flex flex-col gap-6 overflow-hidden p-8 sm:p-12 xl:p-20"
    >
      <div class="flex flex-col gap-6 2xl:w-[60%]">
        <h3 class="text-primary text-3xl lg:text-5xl">
          СТОИМОСТЬ ОТДЫХА И ДАТЫ ЗАЕЗДОВ
        </h3>
        <p
          class="text-primary text-[20px] italic lg:text-[24px] xl:text-[28px]"
        >
          Стоимость 7-дневного заезда (питание включено) –
          <strong class="font-extrabold">24 500 - 25 900 руб.</strong> <br />
          Стоимость 10-дневного заезда (питание включено) –
          <strong class="font-extrabold">35 000 - 37 000 руб.</strong>
        </p>
        <ul
          class="list-disc columns-2 justify-items-start gap-1 pl-5 text-[18px] lg:grid-cols-2 lg:text-[22px] xl:text-[24px]"
        >
          <li v-for="item in dateArrivals" :key="item">{{ item }}</li>
        </ul>
      </div>

      <nuxt-img
        src="/images/price/decoration-1.png"
        class="absolute top-0 right-0 hidden h-full 2xl:block"
      />
    </div>
  </modal-base>
</template>
<script setup lang="ts">
import { dateArrivals } from 'assets/content'

type Props = {
  isModalOpen: boolean
}
type Emits = {
  (e: 'close'): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>
