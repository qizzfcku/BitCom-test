<script setup lang="ts">
import { ref } from 'vue';
import type {Product} from "@/modules/products/types/products";

const props = defineProps<{
  product: Product,
}>();

const isHovered = ref(false);

function handleMouseEnter() {
  isHovered.value = true;
}

function handleMouseLeave() {
  isHovered.value = false;
}
</script>

<template>
  <div class="container flex flex-col"
       @mouseenter="handleMouseEnter"
       @mouseleave="handleMouseLeave">
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
          <img src="/public/icon/star.svg" alt="star"/>
          <span>{{ product.rating.rate }}</span>
          <span class="text-gray-500">({{ product.rating.count }})</span>
        </div>
        <div :class="{'visible': isHovered, 'invisible': !isHovered}">
          <span>{{ product.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
