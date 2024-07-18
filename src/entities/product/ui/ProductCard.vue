<template>
  <div class="container flex flex-col z-0 lg:hover:scale-105 transition"
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
        <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 lg:gap-0">
          <div class="flex items-center gap-1" v-if="product.rating.rate">
            <img src="/icon/star.svg" alt="star"/>
            <span>{{ product.rating.rate }}</span>
            <span class="text-gray-500">({{ product.rating.count }})</span>
          </div>
          <slot />
        </div>
        <div :class="{'visible': isHovered, 'Lg:invisible': !isHovered}">
          <span>{{ product.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from '@/entities/product/model/product';

defineProps<{ product: Product }>();

const isHovered = ref(false);

const handleMouseEnter = () => {
  isHovered.value = true;
}

const handleMouseLeave = () => {
  isHovered.value = false;
}
</script>

<style scoped>

</style>
