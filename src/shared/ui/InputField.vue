<template>
  <input
      :type="type"
      :placeholder="placeholder"
      class="h-10 px-3 rounded-sm border border-slate-300 outline-blue-500 text-lg hover:border-slate-400"
      :value="modelValue"
      @input="onInput"
      required
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  modelValue: string,
  placeholder: string,
  type: string,
  validator?: (value: string) => string
}>();

const emits = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  let value = input.value;
  if (props.validator) {
    value = props.validator(value);
    input.value = value;
  }
  emits('update:modelValue', value);
};
</script>

<style scoped>
</style>
