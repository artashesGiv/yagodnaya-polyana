<template>
  <modal-base :is-modal-open="isModalOpen" @close="$emit('close')">
    <div
      class="bg-white-secondary relative flex flex-col gap-6 overflow-hidden p-8 sm:p-12"
    >
      <h3 class="text-primary text-2xl">СТОИМОСТЬ ОТДЫХА И ДАТЫ ЗАЕЗДОВ</h3>
      <p class="text-primary">
        Стоимость 7-дневного заезда (питание включено) –
        <strong>19 600 руб.</strong> <br />
        Стоимость 10-дневного заезда (питание включено) –
        <strong>28 000 руб.</strong>
      </p>
      <ul class="flex list-disc flex-col gap-1 pl-5">
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
      <!--      <nuxt-img-->
      <!--        src="/images/price/decoration.png"-->
      <!--        class="absolute right-0 bottom-0 w-full"-->
      <!--      />-->
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
