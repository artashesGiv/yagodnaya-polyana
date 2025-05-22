<template>
  <section
    id="main"
    class="group relative [height:calc(100vh-100px)] overflow-hidden md:[height:calc(100vh-120px)] lg:[height:calc(100vh-150px)]"
  >
    <nuxt-img
      src="/images/main-bg.jpg"
      class="h-full w-full object-cover transition-all duration-1000 group-hover:scale-120"
    />
    <div
      class="absolute top-1/2 left-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 text-white"
    >
      <h1
        class="font-druzhok mb-4 text-center text-[80px] md:text-[100px] lg:text-[120px]"
      >
        Ягодная поляна
      </h1>
      <h4 class="mb-4 text-center text-[40px] md:text-[60px] lg:text-[80px]">
        центр здорового образа жизни
      </h4>
    </div>
  </section>
</template>
