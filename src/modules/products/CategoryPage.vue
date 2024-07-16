<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useProductStore } from '@/modules/products/store';
import { useUserStore } from "@/modules/authentication/store";

import { SideBar } from '@/modules/sidebar';
import ProductList from '@/modules/products/components/ProductList.vue';

const userStore = useUserStore();
const productStore = useProductStore();

const products = computed(() => productStore.productList);
const loading = computed(() => productStore.isLoading);
const error = computed(() => productStore.getError);

onMounted(() => {
  userStore.loadUser();
  productStore.fetchProducts();
});
</script>

<template>
  <div class="flex">
    <SideBar class="sticky top-[75px] h-[calc(100vh-75px)] basis-1/6" />
    <div class="basis-5/6 p-20">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <ProductList v-else :products="products" />
    </div>
  </div>
</template>

<style scoped>

</style>
