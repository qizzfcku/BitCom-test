<script setup lang="ts">
import type { Product } from '@/entities/product/model/product'
import ProductForm from "@/features/ProductCard/ui/ProductForm.vue";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <transition-group name="list" tag="div" class="grid grid-cols-4 gap-4 w-full">
    <ProductForm v-for="product in products"
                 :key="product.id"
                 :product="product"
    />
  </transition-group>
</template>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
