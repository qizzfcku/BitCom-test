<template>
  <div class="px-5 py-2">
    <h1 class="text-xl">Общая сумма: </h1>
    <div class="w-full flex justify-end text-lg text-red-700">
      <span>{{ totalPrice }} $</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  totalPrice: number
}>();
</script>

<style scoped>

</style>
