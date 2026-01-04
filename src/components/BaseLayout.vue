<template>
  <div class="min-h-screen bg-bg">
    <Navigation />
    <main class="max-w-content mx-auto px-6 md:px-8 py-12 md:py-20" id="main-content">
      <slot />
    </main>
    <footer class="border-t mt-24" style="border-color: #9bb8d0; background-color: #d4e3f0;">
      <div class="max-w-content mx-auto px-6 md:px-8 py-8">
        <p class="text-sm text-muted text-center">
          © 2026 Euroswarms Research. Independent research in agentic and causal AI systems.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navigation from './Navigation.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'Euroswarms Research - Independent Research in Agentic and Causal AI Systems',
  },
});

// Update document title and meta
import { onMounted, watch } from 'vue';
onMounted(() => {
  document.title = props.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', props.description);
  }
});

watch(() => props.title, (newTitle) => {
  document.title = newTitle;
});
</script>
