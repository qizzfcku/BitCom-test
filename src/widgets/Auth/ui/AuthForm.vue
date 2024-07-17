<script setup lang="ts">
import {ref, watch} from "vue"
import { useRouter } from 'vue-router'

import { credentialUser } from '@/features/Auth/model/CredentialUsers'
import type { User } from '@/entities/user/model/auth'
import {useUserStore} from "@/entities/user/model/store";

import LoginInput from "@/features/Auth/ui/AuthInput.vue";


const login = ref('')
const password = ref('')
const error = ref(false)

const router = useRouter()
const userStore = useUserStore()

watch([login, password], () => {
  error.value = false
})

const submitForm = () => {
  const user : User | undefined = credentialUser.user.find(user => user.login === login.value && user.password === password.value);
  if(user){
    userStore.getUser(user);
    router.push('/category');
  } else {
    error.value = true;
  }
}

</script>

<template>
  <form @submit.prevent="submitForm" class="w-1/4 p-6 rounded-xl border border-slate-300 shadow-blue-glow">
    <p class="mb-5 text-slate-700 text-3xl text-center">
      Авторизация
    </p>
    <div class="mb-8 flex flex-col gap-2" :class="{'mb-1': error}">
      <LoginInput v-model="login" type="text" placeholder="Логин" />
      <LoginInput v-model="password" type="password" placeholder="Пароль" />
    </div>
    <div v-if="error" class="text-center mb-1">
      <span class="text-red-700">Неверный логин / пароль.</span>
    </div>
    <div class="flex">
      <button type="submit" class="h-10 w-1/2 mx-auto rounded-lg border border-slate-300 text-lg font-medium text-slate-700">Войти</button>
    </div>
  </form>
</template>


<style scoped>

</style>
