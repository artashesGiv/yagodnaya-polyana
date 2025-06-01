<template>
  <section
    id="main"
    class="group relative [height:calc(100vh-100px)] overflow-hidden md:[height:calc(100vh-120px)] lg:[height:calc(100vh-150px)]"
  >
    <nuxt-img
      src="/images/main-bg.jpg"
      class="h-full w-full object-cover transition-all duration-2000 group-hover:scale-120"
    />
    <div
      class="section-container absolute top-1/2 left-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 text-white"
    >
      <nuxt-img
        src="/images/logo/logo-min.png"
        class="mx-auto block md:hidden"
        alt="Логотип (мобильный)"
      />

      <nuxt-img
        src="/images/logo/logo-big.png"
        class="mx-auto hidden md:block"
        alt="Логотип (десктоп)"
      />
      <h4
        class="mb-4 hidden text-center text-[32px] md:block lg:text-[40px] xl:text-[50px]"
      >
        центр здорового образа жизни
      </h4>
    </div>
  </section>
</template>
