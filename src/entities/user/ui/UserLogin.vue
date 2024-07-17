<script setup lang="ts">
import {computed} from "vue";
import {useUserStore} from "@/entities/user/model/store";

const userStore = useUserStore();

const user = computed(() => userStore.getUserData);
</script>

<template>
  <span v-if="user">{{ user.login }}</span>
</template>

<style scoped>

</style>
