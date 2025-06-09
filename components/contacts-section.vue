<template>
  <section id="reservation" class="relative overflow-hidden">
    <lazy-image
      src="/images/contacts/background.jpg"
      class="h-[150px] w-full object-cover sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-full"
    />
    <lazy-image
      src="/images/contacts/decoration-1.png"
      class="absolute top-0 right-0 z-2 w-[80%] md:w-[60%]"
    />
    <lazy-image
      src="/images/contacts/decoration-2.png"
      class="3xl:max-h-[2600px] absolute top-0 left-[220px] z-3 w-full max-xl:hidden xl:max-h-[2000px] 2xl:max-h-[2300px]"
    />
    <h2
      class="font-druzhok absolute top-[24px] right-[24px] z-4 text-right text-[36px] text-white sm:right-[40px] sm:text-[50px] md:top-[40px] md:text-[60px] lg:top-[70px] lg:right-[70px] lg:text-[70px] xl:text-[100px] 2xl:top-[100px] 2xl:right-[100px]"
    >
      НАШИ <br />
      КОНТАКТЫ
    </h2>
    <contacts-form
      class="3xl:top-[20%] absolute top-[25%] right-[10%] z-5 hidden w-full xl:flex 2xl:top-[23%]"
    />
    <div class="relative z-5 w-full bg-white px-4 py-8 xl:hidden">
      <contacts-form class="mt-3" />
    </div>
    <div
      class="bg-secondary section-container text-white-secondary important 3xl:gap-6 flex flex-col gap-4 sm:gap-[20px] sm:px-[80px]! md:px-[120px]! xl:pt-[500px]! 2xl:px-[300px]! 2xl:pt-[600px]!"
    >
      <h3 class="text-h3">Наш адрес:</h3>
      <span class="text-base">
        Татищевский р-н, Саратовская обл., с. Ягодная Поляна, ул. Иванникова, 12
      </span>

      <h3 class="text-h3">Как добраться до нас:</h3>
      <span class="text-base">
        От Саратова ехать автобусом №349 (Расписание) до конечной остановки
        “Ягодная Поляна”. Автобусом №632 (Расписание) до поворота на Ягодную
        Поляну, а на повороте мы вас встретим. Автовокзал находится рядом с ж/д
        вокзалом – с поезда можно дойти пешком. Чтобы мы вас встретили,
        необходимо заранее позвонить и сообщить о себе по телефону.
      </span>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
