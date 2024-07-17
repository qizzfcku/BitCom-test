<script setup lang="ts">

import {useUserStore} from "@/entities/user/model/store";

const userStore = useUserStore();
const logout = () => {
  userStore.deleteUser();
};
</script>

<template>
  <button @click="logout" class="flex justify-between items-center gap-3 py-2 px-4 border ml-4 rounded-xl hover:shadow-blue-glow">
    <slot/>
    <img class="h-4" src="/icon/exit.png" alt="exit"/>
  </button>
</template>

<style scoped>

</style>
