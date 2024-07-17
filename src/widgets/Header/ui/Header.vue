<script setup lang="ts">
import { computed } from 'vue';
import LoginButton from "@/features/Auth/ui/LoginButton.vue";
import LogoutButton from "@/features/Auth/ui/LogoutButton.vue";
import {useUserStore} from "@/entities/user/model/store";

const userStore = useUserStore();

const user = computed(() => userStore.getUserData);
const isAuth = computed(() => !!userStore.getUserData);

</script>

<template>
  <header class="sticky top-0 p-4 bg-white border-b border-gray-500 flex justify-between items-center">
    <h1 class="text-3xl">
      Vue Shop
    </h1>
    <div v-if="!isAuth">
      <login-button>Войти</login-button>
    </div>
    <div v-else>
      <logout-button v-if="user">
        {{ user.login }}
      </logout-button>
    </div>
  </header>
</template>

<style scoped>

</style>
