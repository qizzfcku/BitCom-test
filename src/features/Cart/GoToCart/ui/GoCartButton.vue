<script setup lang="ts">


import type {Product} from "@/entities/product/model/product";

const props = defineProps<{
  items: Product[]
}>()

</script>

<template>
  <router-link to="/cart" class=" flex justify-center items-center bg-white rounded-full h-12 w-12 border hover:scale-125 hover:border-slate-300 transition">
    <div v-show="items.length" class="absolute top-0 right-0 bg-red-600 h-4 w-4 flex justify-center items-center text-white rounded-full z-10">
      <span class="text-xs">{{items.length}}</span>
    </div>
    <img class="h-7 w-7 mr-1 z-0" src="/public/icon/cart.png" alt="cart"/>
  </router-link>
</template>

<style scoped>

</style>
