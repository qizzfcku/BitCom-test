<script setup lang="ts">

import type {Product} from "@/entities/product/model/product";

const props = defineProps<{
  cart: Product
}>()
</script>

<template>
  <div class="h-32 w-full flex justify-between items-center border rounded-r-xl pl-3 pr-6">
    <div class="flex gap-5 items-center">
      <img class="h-28 w-28 object-contain hidden md:block" :src="cart.image" :alt="cart.title"/>
      <div class="">
        {{cart.title}}
      </div>

    </div>
    <div class="flex items-center gap-2 md:gap-10">
      <div class="text-red-700 text-center">
        {{cart.price}} $
      </div>
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>
