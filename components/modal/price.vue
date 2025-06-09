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
          <strong class="font-extrabold">19 600 руб.</strong> <br />
          Стоимость 10-дневного заезда (питание включено) –
          <strong class="font-extrabold">28 000 руб.</strong>
        </p>
        <ul
          class="grid list-disc grid-cols-1 gap-1 pl-5 text-[18px] lg:grid-cols-2 lg:text-[22px] xl:text-[24px]"
        >
          <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
      </div>

      <lazy-image
        src="/images/price/decoration-1.png"
        class="absolute top-0 right-0 hidden h-full 2xl:block"
      />
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

const list = [
  '30 сентября – 07 октября',
  '21-28 октября',
  '18-28 ноября',
  '02-09 декабря',
  '16-23 декабря',
  '30 декабря – 06 января',
  '13-23 января',
  '27 января – 03 февраля',
  '10-17 февраля',
]
</script>
