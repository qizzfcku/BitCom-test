<script setup lang="ts">
import type { Product } from '@/entities/product/model/product';
import ProductCard from '@/entities/product/ui/ProductCard.vue';
import CartButton from '@/features/Cart/AddToCart/ui/CartButton.vue';

const props = defineProps<{ products: Product[] }>();

</script>

<template>
  <transition-group name="list" tag="div" class="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
    <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
    >
        <CartButton :product="product"/>
    </ProductCard>
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
