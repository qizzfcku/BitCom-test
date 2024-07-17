<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useProductStore } from '@/widgets/ProductList/model/store';
import { useUserStore } from "@/entities/user/model/store";
import { useFiltersStore } from "@/features/Filters/model/store";

import SideBar from "@/widgets/SideBar";
import ProductList from '@/widgets/ProductList';
import PriceFilter from "@/features/Filters/ui/PriceFilter.vue";
import RatingFilter from "@/features/Filters/ui/RatingFilter.vue";
import CategoryFilter from "@/features/Filters/ui/CategoryFilter.vue";

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
      <div class="w-full py-2 rounded-xl bg-[#F1F1F1] text-center">
      <span class="text-[#0D0D0D]">
        Фильтрация
      </span>
      </div>
      <PriceFilter />
      <RatingFilter />
      <div :class="{'mt-5': loading}">
        <span v-if="loading">Загрузка...</span>
        <CategoryFilter v-else/>
      </div>
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
