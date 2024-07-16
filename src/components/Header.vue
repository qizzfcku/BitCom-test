<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '@/modules/authentication/store';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const user = computed(() => userStore.userData);
const isAuth = computed(() => !!user.value);

const logout = () => {
  userStore.deleteUser();
  router.push('/login');
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
        <img class="h-4" src="/public/exit.png" alt="exit"/>
      </button>
    </div>
  </header>
</template>

<style scoped>

</style>
