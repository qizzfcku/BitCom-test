<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useProductStore } from '@/widgets/ProductList/model/store';
import { useUserStore } from "@/entities/user/model/store";
import { useFiltersStore } from "@/features/Filters/model/store";
import {useCartStore} from "@/entities/Cart/model/store";

import SideBar from "@/widgets/SideBar";
import ProductList from '@/widgets/ProductList';
import FilterForm from "@/widgets/Filter";
import GoCartButton from "@/features/Cart/GoToCart/ui/GoCartButton.vue";

const userStore = useUserStore();
const productStore = useProductStore();
const filtersStore = useFiltersStore()
const cartStore = useCartStore();

const products = computed(() => filtersStore.filteredProducts);
const cartItems = computed(() => cartStore.cartItems)
const loading = computed(() => productStore.isLoading);
const error = computed(() => productStore.getError);

onMounted(() => {
  userStore.loadUser();
  productStore.fetchProducts();
  cartStore.loadCart()
});
</script>

<template>
  <div class="flex relative">
    <side-bar class="sticky top-[75px] h-[calc(100vh-75px)] border-r border-[#303030] basis-2/6 lg:basis-1/6" >
      <FilterForm :loading="loading"/>
    </side-bar>
    <GoCartButton :items="cartItems" class="fixed top-24 right-8 z-10"/>
    <div class="basis-4/6 lg:basis-5/6 p-5 lg:px-15 lg:py-20">
      <div v-if="loading">Загрузка...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <ProductList :products="products" v-if="products.length"/>
        <div v-else>Список пуст</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
