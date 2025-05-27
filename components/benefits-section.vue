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
      class="flex flex-wrap justify-center gap-[20px] md:gap-[40px] lg:gap-[80px]"
    >
      <li
        v-for="benefit in benefits"
        :key="benefit"
        class="border-white-secondary text-white-secondary block w-full border-1 text-center text-[20px] md:w-[50%] md:text-[24px] lg:w-[30%] lg:text-[30px]"
      >
        {{ benefit }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  'Комфортные номера',
  'Интернет Wi-Fi',
  'Инфраструктура для детей',
  'Вегетарианское питание',
  'Стоянка на территории',
  'Семейная атмосфера',
  'Чистый воздух',
  'Видеонаблюдение',
  'Индивидуальный подход',
]
</script>
