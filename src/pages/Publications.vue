<template>
  <BaseLayout title="Publications — Euroswarms Research">
    <section class="mb-24">
      <h1 class="font-serif">Publications</h1>
      <p class="text-lg leading-relaxed max-w-4xl">
        Peer-reviewed publications, preprints, and technical reports from Euroswarms Research.
      </p>
    </section>

    <div class="divider"></div>

    <section class="mb-16">
      <div class="card p-8 max-w-3xl">
        <h3 class="font-serif text-2xl mb-3">Causal Reasoning Architectures for Deterministic Agent Systems</h3>
        <p class="meta mb-4">Arron Leilion — 2026</p>
        <p class="leading-relaxed mb-4">
          A formal framework for structural causality modeling in agentic systems with
          applications to explainable AI and constraint-driven decision processes.
        </p>
        <a href="#" class="text-blue-300 hover:text-white font-medium">arXiv:2026.xxxxx →</a>
      </div>
    </section>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '../components/BaseLayout.vue';

import { onMounted } from 'vue';
onMounted(() => {
  document.title = 'Publications — Euroswarms Research';
});
</script>
