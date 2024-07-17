<template>
  <div class="mt-5">
    <span>Рейтинг товара</span>
    <div class="mt-2 ml-3">
      <label class="flex items-center">
        <input type="radio" v-model="selectedRating" :value="4" class="mr-2"/>
        <span>4 звезды и выше</span>
      </label>
      <label class="flex items-center mt-2">
        <input type="radio" v-model="selectedRating" :value="0" class="mr-2"/>
        <span>Любой рейтинг</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import {useFiltersStore} from "@/features/Filters/model/store";

const filtersStore = useFiltersStore()

const selectedRating = ref(0);

watch(selectedRating, (newVal) => {
  filtersStore.setRating(newVal);
})
</script>

<style scoped>
</style>
