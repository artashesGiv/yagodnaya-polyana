<template>
  <section
    id="reviews"
    class="section-container relative -z-10 flex w-full flex-col gap-[24px] bg-[url('/images/reviews/bg.png')] bg-cover bg-center xl:gap-[54px] 2xl:flex-row"
  >
    <div class="absolute inset-0 -z-9 bg-[#3c3d18b8]" />
    <div
      class="bg-secondary flex flex-col gap-[24px] rounded-[24px] p-[24px] text-white xl:gap-[52px] xl:rounded-[54px] xl:p-[90px] 2xl:max-w-[700px]"
    >
      <div class="flex flex-col gap-[24px] sm:flex-row">
        <nuxt-img
          src="/images/reviews/man.jpg"
          class="aspect-square w-[100px] rounded-full object-cover xl:w-[150px] 2xl:w-[200px]"
        />

        <div class="flex gap-[13px] sm:self-end">
          <icon-star
            v-for="item in 5"
            :key="item"
            class="aspect-square w-[32px] xl:w-[53px]"
          />
        </div>
      </div>

      <p class="text-small">
        Это - территория добра и здоровья. Красивейшая природа, чистейшая вода,
        замечательная индивидуальная программа отдыха и оздоровления, как
        физического, так и духовного, делает это место незабываемым.
      </p>
    </div>
    <div class="flex flex-col justify-between gap-[32px]">
      <h3 class="text-big text-center text-white xl:text-left">
        Еще больше отзывов о нас
      </h3>

      <div
        class="flex content-baseline justify-center gap-[24px] xl:gap-[38px]"
      >
        <a
          href="https://vkvideo.ru/@yagodnaypolyana"
          target="_blank"
          class="hover-scale"
        >
          <icon-vk
            class="3xl:w-[250px] aspect-square w-[80px] md:w-[150px] 2xl:w-[220px]"
          />
        </a>

        <a
          href="https://youtube.com/@berry.field.health.center?si=ESh6kMdadbQFe4RF"
          target="_blank"
          class="hover-scale"
        >
          <icon-youtube
            class="3xl:w-[250px] aspect-square w-[80px] md:w-[150px] 2xl:w-[220px]"
          />
        </a>

        <a
          href="https://yandex.ru/maps/org/tsentr_zdorovogo_obraza_zhizni_yagodnaya_polyana/180448666231/?ll=45.602877%2C51.973081&z=15"
          target="_blank"
          class="hover-scale"
        >
          <icon-yandex
            class="3xl:w-[250px] aspect-square w-[80px] md:w-[150px] 2xl:w-[220px]"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
