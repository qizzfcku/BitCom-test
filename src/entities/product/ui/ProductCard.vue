<script setup lang="ts">
import type {Product} from "@/entities/product/model/product";

defineProps<{
  product: Product,
  isHovered: boolean,
}>();
</script>

<template>


  <div class="h-3/4 p-5 flex items-center">
    <img class="object-contain" :src="product.image" :alt="product.title"/>
  </div>
  <div class="h-1/4 py-1 px-2">
    <div class="text-lg text-red-700">
      {{ product.price }} $
    </div>
    <div class="text-sm flex flex-col gap-1">
      <span>{{ product.title }}</span>
      <div class="flex items-center gap-1" v-if="product.rating.rate">
        <img src="/icon/star.svg" alt="star"/>
        <span>{{ product.rating.rate }}</span>
        <span class="text-gray-500">({{ product.rating.count }})</span>
      </div>
      <div :class="{'visible': isHovered, 'invisible': !isHovered}">
        <span>{{ product.category }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
