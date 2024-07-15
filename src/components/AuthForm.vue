<script setup lang="ts">
import { ref } from "vue"

const login = ref('');
const password = ref('');

</script>

<template>
  <form class="w-1/4 p-6 rounded-xl border border-slate-300 shadow-blue-glow">
    <p class="mb-5 text-slate-700 text-3xl text-center">Авторизация</p>
    <div class="mb-8 flex flex-col gap-2">
      <input v-model="login" class="h-10 px-3 rounded-sm border border-slate-300 outline-blue-500 text-lg" placeholder="Логин"/>
      <input v-model="password" type="password" class="h-10 px-3 rounded-sm border border-slate-300 outline-blue-500 text-lg" placeholder="Пароль"/>
    </div>
    <div class="flex">
      <button type="submit" class="h-10 w-1/2 mx-auto rounded-lg border border-slate-300 text-lg font-medium text-slate-700">Войти</button>
    </div>
  </form>
</template>


<style scoped>

</style>
