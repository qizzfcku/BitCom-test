<script setup lang="ts">
import type { Product } from '@/modules/products/types/products'
import ProductCard from "@/modules/products/components/ProductCard.vue";

const props = defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="grid grid-cols-4 gap-4 w-full">
    <ProductCard v-for="product in products"
                 :key="product.id"
                 :product="product"
    />
  </div>
</template>

<style scoped>

</style>
