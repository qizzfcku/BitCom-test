<script setup lang="ts">
import type { userInfo } from "@/widgets/OrderForm/model/type";

import InputField from "@/shared/ui/InputField.vue";
import CartTotal from "@/features/Cart/CartTotal";
import TextAreaField from "@/shared/ui/TextAreaField.vue";

const props = defineProps<{
  userForm: userInfo,
  totalPrice: number,
}>();

const emits = defineEmits(['submit']);

const submitForm = () => {
  emits('submit');
};

const validateLetters = (value: string) => {
  return value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
};

const validatePhoneNumber = (value: string) => {
  return value.replace(/\D/g, '');
};

const validateCommentLength = (value: string) => {
  return value.slice(0, 300);
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="flex flex-col gap-3 px-5">
      <div>
        <h1 class="text-xl">Информация: </h1>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row gap-3">
          <InputField
              class="w-1/2 md:w-full"
              placeholder="Имя"
              v-model="userForm.firstName"
              :validator="validateLetters"
              type="text"
          />
          <InputField
              class="w-1/2 md:w-full"
              placeholder="Фамилия"
              v-model="userForm.lastName"
              :validator="validateLetters"
              type="text"
          />
        </div>
        <InputField
            placeholder="Телефон"
            v-model="userForm.phoneNumber"
            :validator="validatePhoneNumber"
            type="tel"
        />
        <InputField
            placeholder="Адрес"
            v-model="userForm.address"
            type="text"
        />
        <TextAreaField
            placeholder="Комментарий"
            v-model="userForm.comment"
            :validator="validateCommentLength"
        />
      </div>
    </div>
    <div class="flex flex-col gap-5 mt-10">
      <CartTotal :totalPrice="totalPrice" />
      <div class="w-full px-5">
        <button class="w-full py-2 bg-green-500 text-white rounded-xl hover:bg-green-400 shadow-xl text-xl">Заказать</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
</style>
