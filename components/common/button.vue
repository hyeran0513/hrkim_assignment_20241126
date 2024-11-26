<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'medium',
  },
  onClick: {
    type: Function,
    default: () => {},
  },
});

const buttonClass = computed(() => {
  return {
    'btn': true,
    'btn-small': props.size === 'small',
    'btn-medium': props.size === 'medium',
    'btn-large': props.size === 'large',
  };
});

const handleClick = (event) => {
  props.onClick(event);
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/button.scss" as button;
</style>
