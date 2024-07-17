<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useProductStore } from '@/widgets/ProductList/model/store';
import {useFiltersStore} from "@/features/Filters/model/store";

const productStore = useProductStore();
const filtersStore = useFiltersStore();

const categories = computed(() => Array.from(new Set(productStore.productList.map(product => product.category))));
const selectedCategories = ref<string[]>(filtersStore.selectedCategories);

watch(selectedCategories, (newSelectedCategories) => {
  filtersStore.setSelectedCategories(newSelectedCategories);
});
</script>


<template>
  <div class="mt-5">
    <span>Категории</span>
    <div class="mt-2 ml-3">
      <label v-for="category in categories" :key="category" class="flex items-center mt-2">
        <input type="checkbox" v-model="selectedCategories" :value="category" class="mr-2"/>
        <span>{{ category }}</span>
      </label>
    </div>
  </div>
</template>

<style scoped>

</style>
