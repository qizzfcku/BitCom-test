<script setup lang="ts">

import type {Product} from "@/entities/product/model/product";
import ProductCart from "@/entities/Cart";
import DeleteCartButton from "@/features/Cart/DeleteCart";

const props = defineProps<{
  items: Product[]
}>()

const emit = defineEmits<{
  (e: 'remove', productId: number): void;
}>();

const removeFromCart = (productId: number) => {
  emit('remove', productId);
};
</script>

<template>
  <transition-group name="list" tag="div" class="grid grid-cols-1 gap-3">
    <product-cart
        v-for="cart in items"
        :key="cart.id"
        :cart="cart"
    >
      <DeleteCartButton
          :id="cart.id"
          @remove="removeFromCart"
      />
    </product-cart>
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
