<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // HTMX will handle dynamic interactions
  if (typeof window !== 'undefined' && window.htmx) {
    console.log('HTMX loaded');
  }
});
</script>

