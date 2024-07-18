<template>
  <textarea
      :placeholder="placeholder"
      class="h-32 px-3 resize-none rounded-sm border border-slate-300 outline-blue-500 text-lg hover:border-slate-400"
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
  validator?: (value: string) => string
}>();

const emits = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
  const input = event.target as HTMLTextAreaElement;
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
