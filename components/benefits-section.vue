<template>
  <section
    id="benefits"
    class="section-container bg-primary flex flex-col gap-[20px] px-[20px] py-[50px] md:gap-[40px] lg:gap-[80px]"
  >
    <div>
      <h2
        class="font-druzhok text-white-secondary text-center text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px]"
      >
        ПРЕИМУЩЕСТВА
      </h2>
      <p
        class="text-white-secondary text-center text-[18px] italic sm:text-[24px] md:text-[30px]"
      >
        Всё для Вашего уютного и беззаботного отдыха!
      </p>
    </div>
    <ul
      class="grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:gap-[40px] lg:gap-[80px] xl:grid-cols-3"
    >
      <li
        v-for="benefit in benefits"
        :key="benefit.title"
        class="text-white-secondary flex w-full flex-col items-center gap-3 text-center text-[20px] sm:max-xl:last:col-span-2 sm:max-xl:last:place-self-center md:text-[24px] lg:text-[30px]"
      >
        <component
          :is="benefit.icon"
          class="size-[90px] md:size-[100px] lg:size-[120px]"
        />
        <span>
          {{ benefit.title }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    title: 'Комфортные номера',
    icon: defineAsyncComponent(() => import('@/components/icon/bed.vue')),
  },
  {
    title: 'Интернет Wi-Fi',
    icon: defineAsyncComponent(() => import('@/components/icon/wifi.vue')),
  },
  {
    title: 'Инфраструктура для детей',
    icon: defineAsyncComponent(() => import('@/components/icon/child.vue')),
  },
  {
    title: 'Вегетарианское питание',
    icon: defineAsyncComponent(() => import('@/components/icon/leaf.vue')),
  },
  {
    title: 'Стоянка на территории',
    icon: defineAsyncComponent(() => import('@/components/icon/car.vue')),
  },
  {
    title: 'Семейная атмосфера',
    icon: defineAsyncComponent(() => import('@/components/icon/people.vue')),
  },
  {
    title: 'Чистый воздух',
    icon: defineAsyncComponent(() => import('@/components/icon/air.vue')),
  },
  {
    title: 'Видеонаблюдение',
    icon: defineAsyncComponent(() => import('@/components/icon/camera.vue')),
  },
  {
    title: 'Индивидуальный подход',
    icon: defineAsyncComponent(() => import('@/components/icon/hands.vue')),
  },
]
</script>
