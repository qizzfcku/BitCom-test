<script setup lang="ts">
import {ref, watch} from 'vue';
import {useFiltersStore} from "@/features/Filters/model/store";

const filtersStore = useFiltersStore()

const priceFrom = ref<number | null>(null);
const priceTo = ref<number | null>(null);

watch([priceFrom, priceTo], ([newMin, newMax]) => {
  filtersStore.setPriceRange([newMin, newMax]);
})
</script>

<template>
  <div class="mt-5">
    <div class="w-full">
      <span>Цена, $</span>
      <div class="flex justify-between items-center gap-2 w-full mt-2">
        <input v-model.number="priceFrom" type="number" min="0" placeholder="От" class="h-8 w-1/2 border rounded-lg px-2 py-1 hover:border-slate-400"/>
        <input v-model.number="priceTo" type="number" min="0" placeholder="До" class="h-8 w-1/2 border rounded-lg px-2 py-1 hover:border-slate-400"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
