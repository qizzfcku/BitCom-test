<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useProductStore } from '@/widgets/ProductList/model/store';
import { useUserStore } from "@/entities/user/model/store";
import { useFiltersStore } from "@/features/Filters/model/store";

import SideBar from "@/widgets/SideBar";
import ProductList from '@/widgets/ProductList';
import FilterForm from "@/widgets/Filter";

const userStore = useUserStore();
const productStore = useProductStore();
const filtersStore = useFiltersStore()

const products = computed(() => filtersStore.filteredProducts);
const loading = computed(() => productStore.isLoading);
const error = computed(() => productStore.getError);

onMounted(() => {
  userStore.loadUser();
  productStore.fetchProducts();
});
</script>

<template>
  <div class="flex">
    <side-bar class="sticky top-[75px] h-[calc(100vh-75px)] basis-1/6" >
      <FilterForm :loading="loading"/>
    </side-bar>
    <div class="basis-5/6 p-20">
      <div v-if="loading">Загрузка...</div>
      <div v-else-if="error">{{ error }}</div>
      <ProductList v-else :products="products" />
    </div>
  </div>
</template>

<style scoped>

</style>
