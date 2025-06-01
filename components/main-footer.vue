<template>
  <section
    class="section-container flex flex-col gap-4 bg-white text-center md:gap-6 lg:gap-10"
  >
    <h3 class="text-base">Звоните, если возникли вопросы:</h3>
    <div
      class="flex flex-col items-center justify-center gap-2 sm:flex-row md:gap-10 xl:gap-20 2xl:gap-40"
    >
      <a href="tel:+79878003413" type="phone">
        <nuxt-img
          src="/images/footer/phone.png"
          class="md:size-[100px] 2xl:size-[140px]"
        />
      </a>
      <a href="https://wa.me/79878003413" target="_blank">
        <nuxt-img
          src="/images/footer/whatsapp.png"
          class="md:size-[100px] 2xl:size-[140px]"
        />
      </a>
      <a href="https://vk.com" target="_blank">
        <nuxt-img
          src="/images/footer/vk.png"
          class="md:size-[100px] 2xl:size-[140px]"
        />
      </a>
    </div>
    <span class="text-small">+7(987)800-34-13 (WhatsApp)</span>
  </section>
</template>
