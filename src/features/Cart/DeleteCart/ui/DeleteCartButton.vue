<script setup lang="ts">

import type {Product} from "@/entities/product/model/product";

const props = defineProps<{
  id: number,
}>()

const emit = defineEmits<{
  (e: 'remove', productId: number): void;
}>();

const removeFromCart = (productId: number) => {
  emit('remove', productId);
};
</script>

<template>
  <div>
    <button @click="removeFromCart(id)" class="px-3 py-2 border rounded-xl">Удалить</button>
  </div>
</template>

<style scoped>

</style>
