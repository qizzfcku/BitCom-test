<script setup lang="ts">
import {defineProps, defineEmits } from 'vue';

interface Props {
  modelValue: string;
  type: string;
  placeholder: string;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

</script>

<template>
  <input
      :type="type"
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      class="h-10 px-3 rounded-sm border border-slate-300 outline-blue-500 text-lg hover:border-slate-400"
      required
  />
</template>

