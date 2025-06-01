<template>
  <section id="contacts" class="relative overflow-hidden">
    <nuxt-img
      src="/images/contacts/background.jpg"
      class="h-[150px] w-full object-cover sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-full"
    />
    <nuxt-img
      src="/images/contacts/decoration-1.png"
      class="absolute top-0 right-0 z-2 w-[80%] md:w-[60%]"
    />
    <nuxt-img
      src="/images/contacts/decoration-2.png"
      class="absolute top-0 left-[220px] z-3 w-[3860px] max-xl:hidden"
    />
    <h2
      class="font-druzhok absolute top-[24px] right-[24px] z-4 text-right text-[36px] text-white sm:right-[40px] sm:text-[50px] md:top-[40px] md:text-[60px] lg:top-[70px] lg:right-[70px] lg:text-[70px] xl:text-[100px] 2xl:top-[100px] 2xl:right-[100px]"
    >
      НАШИ <br />
      КОНТАКТЫ
    </h2>
    <contacts-form
      class="absolute top-[20%] right-[10%] z-5 hidden w-full xl:flex 2xl:top-[25%]"
    />
    <div class="relative z-5 w-full bg-white px-4 py-8 xl:hidden">
      <contacts-form class="mt-3" />
    </div>
    <div class="bg-secondary h-[1500px]">qwe</div>
  </section>
</template>
<script setup lang="ts"></script>
