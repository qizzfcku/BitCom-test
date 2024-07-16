<script setup lang="ts">

import { SideBar } from "@/modules/sidebar";
import { computed, onMounted } from 'vue'
import { useUserStore } from "@/modules/authentication/store";

import ProductList from "@/modules/products/components/ProductList.vue";

const userStore = useUserStore()
const user = computed(() => userStore.userData)

onMounted(() => {
  userStore.loadUser()
})
</script>

<template>
  <div class="flex">
    <SideBar class="sticky top-[75px] h-[calc(100vh-75px)] basis-1/6"/>
    <div class="basis-5/6 h-[150vh] p-20">
      <ProductList/>
    </div>
  </div>
</template>

<style scoped>

</style>
