<script setup lang="ts">

import PriceFilter from "@/features/Filters/ui/PriceFilter.vue";
import RatingFilter from "@/features/Filters/ui/RatingFilter.vue";
import CategoryFilter from "@/features/Filters/ui/CategoryFilter.vue";

const props = defineProps<{
  loading: boolean
}>()

</script>

<template>
  <div class="w-full py-2 rounded-xl bg-[#F1F1F1] text-center">
      <span class="text-[#0D0D0D]">
        Фильтрация
      </span>
  </div>
  <PriceFilter />
  <RatingFilter />
  <div :class="{'mt-5': props.loading}">
    <span v-if="loading">Загрузка...</span>
    <CategoryFilter v-else/>
  </div>
</template>

<style scoped>

</style>
