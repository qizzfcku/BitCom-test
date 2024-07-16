<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';

const route = useRoute();

const showHeader = computed(() => route.path !== '/login');
</script>

<template>
  <Header v-if="showHeader"/>
  <RouterView />
</template>

<style scoped>
</style>
