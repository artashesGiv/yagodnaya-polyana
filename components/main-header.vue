<template>
  <header
    class="bg-white-secondary flex h-[80px] items-center gap-[30px] px-[20px] py-[10px] sm:h-[120px] md:gap-[50px] md:py-[40px] lg:h-[150px]"
  >
    <div class="grow cursor-pointer" @click="scrollTo('main')">
      <nuxt-img
        src="/images/logo/logo-header.png"
        alt="Ягодная поляна - логотип"
        class="3xl:h-[150px] h-[50px] sm:h-[80px] md:h-[100px] lg:h-[120px]"
      />
    </div>

    <ul class="hidden gap-[37px] 2xl:flex">
      <li
        v-for="link in links"
        :key="link.id"
        class="text-primary transition-base cursor-pointer text-[25px] whitespace-nowrap uppercase transition-colors hover:text-green-800"
        @click="scrollTo(link.id)"
      >
        {{ link.title }}
      </li>
    </ul>

    <icon-phone class="text-primary hidden size-[60px] 2xl:block" />
    <div
      class="hidden cursor-pointer items-center max-2xl:block"
      @click="onToggleMenu(true)"
    >
      <icon-hamburger-button
        class="text-primary size-[30px] sm:size-[40px] md:size-[60px]"
      />
    </div>
    <teleport to="body">
      <transition name="dropdown">
        <div
          v-if="isOpenMenu"
          ref="target"
          v-on-click-outside="() => onToggleMenu(false)"
          class="absolute inset-x-0 top-0 z-50 w-full 2xl:hidden"
          @keydown.esc="onToggleMenu(false)"
        >
          <mobile-menu :links="links" @close="onToggleMenu(false)" />
        </div>
      </transition>
    </teleport>
  </header>
</template>

<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll'
import { vOnClickOutside } from '@vueuse/components'

const links: { title: string; id: string }[] = [
  // { title: 'Главная', id: 'main' },
  { title: 'О нас', id: 'about' },
  { title: 'Услуги', id: 'benefits' },
  { title: 'Галерея', id: 'gallery' },
  { title: 'Бронирование', id: 'reservation' },
  { title: 'Контакты', id: 'contacts' },
]

const isOpenMenu = ref(false)
const onToggleMenu = (value: boolean) => {
  isOpenMenu.value = value
}

const { scrollTo } = useSmoothScroll()
</script>
