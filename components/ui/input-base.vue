<template>
  <input
    :id="inputId"
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    class="focus:ring-primary bg-white-secondary transition-base hover:shadow-base 3xl:text-[34px] w-full rounded-xl p-[12px] text-[16px] ring-1 ring-gray-400 outline-none focus:ring-2 md:p-[18px] md:text-[20px] xl:p-[24px] 2xl:p-[32px] 2xl:text-[28px]"
  />
</template>

<script setup lang="ts">
export type Props = {
  modelValue: string | number
  inputId?: string
  type?: 'text' | 'password' | 'email' | 'tel' | 'number'
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  inputId: '',
})
const value = defineModel<Props['modelValue']>('modelValue')
</script>

<style scoped></style>
