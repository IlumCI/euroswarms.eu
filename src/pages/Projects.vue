<template>
  <BaseLayout title="Projects — Euroswarms Research">
    <section class="mb-24">
      <h1 class="font-serif">Research Projects</h1>
      <p class="text-lg leading-relaxed max-w-4xl">
        Research projects maintained and published by Euroswarms Research.
        Projects may be in active development or released as stable artifacts.
      </p>
    </section>

    <div class="divider"></div>

    <section class="mb-24">
      <h2 class="font-serif">CR-CA Family</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
        <router-link to="/projects/crca" class="card p-8 block group">
          <div class="mb-4">
            <span class="status" style="color: #f4c430;">Official</span>
          </div>
          <h3 class="font-serif text-2xl mb-3">CR-CA Core</h3>
          <p class="leading-relaxed mb-4">
            Causal inference and constraint systems for deterministic agent architectures.
          </p>
          <span class="text-blue-300 text-sm font-medium group-hover:text-white">View project →</span>
        </router-link>

        <div class="card p-8">
          <div class="mb-4">
            <span class="status" style="color: #9bb8d0;">In Development</span>
          </div>
          <h3 class="font-serif text-2xl mb-3">CR-CA-Q</h3>
          <p class="leading-relaxed">
            Quantitative counterfactual extensions for probabilistic reasoning systems.
          </p>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <section class="mb-24">
      <h2 class="font-serif">Project LUCRE</h2>
      <div class="card p-8 max-w-2xl mt-8">
        <div class="mb-4">
          <span class="status" style="color: #f4c430;">Official</span>
        </div>
        <h3 class="font-serif text-2xl mb-3">LUCRE Core</h3>
        <p class="leading-relaxed mb-4">
          Multi-agent coordination and incentive-aware execution frameworks for distributed systems.
        </p>
        <router-link to="/projects/lucre" class="text-blue-300 text-sm font-medium hover:text-white inline-block">
          View project →
        </router-link>
      </div>
    </section>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '../components/BaseLayout.vue';

import { onMounted } from 'vue';
onMounted(() => {
  document.title = 'Projects — Euroswarms Research';
});
</script>
