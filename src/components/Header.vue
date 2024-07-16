<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '@/modules/authentication/store';

const userStore = useUserStore();

const user = computed(() => userStore.getUserData);
const isAuth = computed(() => !!user.value);

const logout = () => {
  userStore.deleteUser();
};
</script>


<template>
  <header class="sticky top-0 p-4 bg-white border-b border-gray-500 flex justify-between items-center">
    <h1 class="text-3xl">
      Vue Shop
    </h1>
    <div v-if="!isAuth">
      <router-link to="/login">
        <button class="py-2 px-4 border rounded-xl hover:shadow-blue-glow">Войти</button>
      </router-link>
    </div>
    <div v-else>
      <button @click="logout" class="flex justify-between items-center gap-3 py-2 px-4 border ml-4 rounded-xl hover:shadow-blue-glow" v-if="user">
        {{ user.login }}
        <img class="h-4" src="/icon/exit.png" alt="exit"/>
      </button>
    </div>
  </header>
</template>

<style scoped>

</style>
