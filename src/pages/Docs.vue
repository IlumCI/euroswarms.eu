<template>
  <BaseLayout title="Documentation — Euroswarms Research">
    <section class="mb-24">
      <h1 class="font-serif">Documentation</h1>
      <p class="text-lg leading-relaxed max-w-4xl">
        Technical documentation, specifications, and implementation guides for
        Euroswarms Research projects.
      </p>
    </section>

    <div class="divider"></div>

    <section class="mb-16">
      <h2 class="font-serif">Project Documentation</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
        <div class="card p-8 group">
          <h3 class="font-serif text-2xl mb-3">CR-CA Documentation</h3>
          <p class="leading-relaxed mb-4">
            Architecture, API reference, and usage guides for CR-CA systems.
          </p>
          <a href="#" class="text-blue-300 text-sm font-medium hover:text-white inline-block">
            View documentation →
          </a>
        </div>
        <div class="card p-8 group">
          <h3 class="font-serif text-2xl mb-3">Project LUCRE Documentation</h3>
          <p class="leading-relaxed mb-4">
            Coordination protocols, execution models, and integration guides.
          </p>
          <a href="#" class="text-blue-300 text-sm font-medium hover:text-white inline-block">
            View documentation →
          </a>
        </div>
      </div>
    </section>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '../components/BaseLayout.vue';

import { onMounted } from 'vue';
onMounted(() => {
  document.title = 'Documentation — Euroswarms Research';
});
</script>
