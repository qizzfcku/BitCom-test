<script setup lang="ts">

import {ref} from "vue";
import type {Product} from "@/entities/product/model/product";
import ProductCard from '@/entities/product/ui/ProductCard.vue'

defineProps<{
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
    <ProductCard :product="product" :isHovered="isHovered"/>
  </div>
</template>

<style scoped>

</style>
