<template>
  <form
    class="mx-auto flex max-w-md flex-col gap-6"
    @submit.prevent="handleSubmit"
  >
    <h3 class="text-right text-[24px] md:text-[32px]">
      Заполните форму бронирования
    </h3>
    <!-- Name -->
    <div>
      <label
        for="name"
        class="mb-1 block text-[18px] font-medium md:text-[24px]"
        >ваше имя</label
      >
      <ui-input-base
        v-model="form.name"
        input-id="name"
        placeholder="Введите имя"
        type="text"
      />
      <p v-if="errors.name" class="mt-1 text-sm text-red-500">
        {{ errors.name }}
      </p>
    </div>

    <!-- Phone -->
    <div>
      <label
        for="phone"
        class="mb-1 block text-[18px] font-medium md:text-[24px]"
        >телефон</label
      >
      <ui-input-base
        v-model="form.phone"
        input-id="phone"
        type="tel"
        placeholder="+7XXXXXXXXXX"
      />
      <p v-if="errors.phone" class="mt-1 text-sm text-red-500">
        {{ errors.phone }}
      </p>
    </div>

    <!-- Email -->
    <div>
      <label
        for="email"
        class="mb-1 block text-[18px] font-medium md:text-[24px]"
        >e-mail</label
      >
      <ui-input-base
        v-model="form.email"
        input-id="email"
        type="email"
        placeholder="example@mail.com"
      />
      <p v-if="errors.email" class="mt-1 text-sm text-red-500">
        {{ errors.email }}
      </p>
    </div>

    <!-- Persons -->
    <div>
      <label
        for="persons"
        class="mb-1 block text-[18px] font-medium md:text-[24px]"
        >количество человек</label
      >
      <ui-input-base
        v-model="form.persons"
        input-id="persons"
        type="number"
        min="1"
        placeholder="1"
      />
      <p v-if="errors.persons" class="mt-1 text-sm text-red-500">
        {{ errors.persons }}
      </p>
    </div>

    <!-- Arrival Dates -->
    <div>
      <p class="mb-2 block text-[18px] font-medium md:text-[24px]">
        выберите заезд
      </p>
      <ul class="space-y-2">
        <li
          v-for="option in arrivalOptions"
          :key="option"
          class="flex items-center gap-2"
        >
          <input
            :id="option"
            v-model="form.arrival"
            type="radio"
            :value="option"
            class="accent-primary h-4 w-4"
          />
          <label :for="option" class="text-[16px] md:text-[20px]">{{
            option
          }}</label>
        </li>
      </ul>
      <p v-if="errors.arrival" class="mt-1 text-sm text-red-500">
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
