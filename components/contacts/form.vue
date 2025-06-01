<template>
  <form
    class="2xl-max-w-3xl mx-auto flex max-w-lg flex-col gap-6 xl:max-w-[50%]"
    @submit.prevent="handleSubmit"
  >
    <h3
      class="3xl:text-[60px] text-right text-[24px] md:text-[32px] 2xl:text-[40px]"
    >
      Заполните форму бронирования
    </h3>
    <!-- Name -->
    <div class="relative">
      <label
        for="name"
        class="3xl:text-[45px] mb-1 block text-right text-[18px] font-medium md:text-[24px] 2xl:text-[32px]"
      >
        ваше имя
      </label>
      <ui-input-base
        v-model="form.name"
        input-id="name"
        placeholder="Введите имя"
        type="text"
      />
      <p v-if="errors.name" class="absolute mt-1 text-sm text-red-500">
        {{ errors.name }}
      </p>
    </div>

    <!-- Phone -->
    <div class="relative">
      <label
        for="phone"
        class="3xl:text-[45px] mb-1 block text-right text-[18px] font-medium md:text-[24px] 2xl:text-[32px]"
      >
        телефон
      </label>
      <ui-input-base
        v-model="form.phone"
        input-id="phone"
        type="tel"
        placeholder="+7XXXXXXXXXX"
      />
      <p v-if="errors.phone" class="absolute mt-1 text-sm text-red-500">
        {{ errors.phone }}
      </p>
    </div>

    <!-- Email -->
    <div class="relative">
      <label
        for="email"
        class="3xl:text-[45px] mb-1 block text-right text-[18px] font-medium md:text-[24px] 2xl:text-[32px]"
      >
        e-mail
      </label>
      <ui-input-base
        v-model="form.email"
        input-id="email"
        type="email"
        placeholder="example@mail.com"
      />
      <p v-if="errors.email" class="absolute mt-1 text-sm text-red-500">
        {{ errors.email }}
      </p>
    </div>

    <!-- Persons -->
    <div class="relative">
      <label
        for="persons"
        class="3xl:text-[45px] mb-1 block text-right text-[18px] font-medium md:text-[24px] 2xl:text-[32px]"
      >
        количество человек
      </label>
      <ui-input-base
        v-model="form.persons"
        input-id="persons"
        type="number"
        min="1"
        placeholder="1"
      />
      <p v-if="errors.persons" class="absolute mt-1 text-sm text-red-500">
        {{ errors.persons }}
      </p>
    </div>

    <!-- Arrival Dates -->
    <div>
      <p
        class="3xl:text-[45px] mb-2 block text-right text-[18px] font-medium md:text-[24px] 2xl:text-[32px]"
      >
        выберите заезд
      </p>
      <ul class="flex flex-col items-end gap-2">
        <li
          v-for="option in arrivalOptions"
          :key="option"
          class="flex items-center gap-2"
        >
          <label
            :for="option"
            class="3xl:text-[35px] cursor-pointer text-[16px] md:text-[20px] 2xl:text-[26px]"
            @click="form.arrival = option"
          >
            {{ option }}
            <input
              :id="option"
              v-model="form.arrival"
              type="radio"
              :value="option"
              class="accent-primary 2xl:w- 3xl:h-7 3xl:w-7 h-4 w-4 2xl:h-5"
            />
          </label>
        </li>
      </ul>
      <p v-if="errors.arrival" class="absolute mt-1 text-sm text-red-500">
        {{ errors.arrival }}
      </p>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="button button-primary disabled:cursor-not-allowed disabled:opacity-50"
      :disabled="submitting"
    >
      отправить
    </button>

    <!-- Success Message -->
    <Teleport to="body">
      <div
        v-if="success"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      >
        <div
          class="max-w-sm space-y-4 rounded-2xl bg-white p-8 text-center shadow-lg"
        >
          <h2 class="text-2xl font-semibold text-emerald-700">Спасибо!</h2>
          <p>
            Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее
            время.
          </p>
          <button class="button button-primary" @click="success = false">
            Закрыть
          </button>
        </div>
      </div>
    </Teleport>
  </form>
</template>

<script setup lang="ts">
interface BookingForm {
  name: string
  phone: string
  email: string
  persons: number
  arrival: string
}

const form = reactive<BookingForm>({
  name: '',
  phone: '',
  email: '',
  persons: 0,
  arrival: '',
})

const errors = reactive<Record<keyof BookingForm, string | null>>({
  name: null,
  phone: null,
  email: null,
  persons: null,
  arrival: null,
})

const submitting = ref(false)
const success = ref(false)

const arrivalOptions = [
  '30 сентября – 07 октября',
  '21–28 октября',
  '18–28 ноября',
  '02–09 декабря',
  '16–23 декабря',
  '30 декабря – 06 января',
  '13–23 января',
  '27 января – 03 февраля',
  '10–17 февраля',
]

function resetErrors() {
  ;(Object.keys(errors) as (keyof BookingForm)[]).forEach(
    key => (errors[key] = null),
  )
}

function validate(): boolean {
  let valid = true
  resetErrors()

  if (!form.name.trim()) {
    errors.name = 'Введите имя'
    valid = false
  }

  const phonePattern = /^\+?\d{10,15}$/
  if (!phonePattern.test(form.phone)) {
    errors.phone = 'Введите корректный номер'
    valid = false
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(form.email)) {
    errors.email = 'Введите корректный e-mail'
    valid = false
  }

  if (!form.persons || form.persons < 1) {
    errors.persons = 'Укажите количество человек'
    valid = false
  }

  if (!form.arrival) {
    errors.arrival = 'Выберите даты заезда'
    valid = false
  }

  return valid
}

async function handleSubmit() {
  if (!validate()) return

  submitting.value = true
  try {
    // POST to /api/booking (create the corresponding server route)
    // await $fetch('/api/booking', {
    //   method: 'POST',
    //   body: form,
    // })

    console.log(form)

    success.value = true
    // reset form
    form.name = ''
    form.phone = ''
    form.email = ''
    form.persons = 0
    form.arrival = ''
  } catch (e) {
    console.error(e)
    alert('Ошибка при отправке заявки. Попробуйте позже.')
  } finally {
    submitting.value = false
  }
}
</script>
