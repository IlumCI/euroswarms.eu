<template>
  <BaseLayout title="CR-CA — Euroswarms Research">
    <section class="mb-16">
      <div class="mb-6">
        <span class="status" style="color: #f4c430;">Official Project</span>
      </div>
      <h1 class="font-serif">CR-CA — Causal Reasoning & Counterfactual Analysis</h1>
    </section>

    <div class="divider"></div>

    <section class="mb-16">
      <h2 class="font-serif">Overview</h2>
      <p class="text-lg leading-relaxed">
        CR-CA is a reasoning architecture designed to model causal structure,
        constraints, and counterfactual outcomes in agentic systems. The framework
        provides a formal foundation for deterministic, explainable decision-making
        in complex environments.
      </p>
    </section>

    <section class="mb-16">
      <h2 class="font-serif">Core Concepts</h2>
      <p class="leading-relaxed mb-4">
        The architecture focuses on three primary components:
      </p>
      <ul class="space-y-3">
        <li>Structural causality modeling for deterministic inference</li>
        <li>Constraint validation and verification systems</li>
        <li>Explainable counterfactual analysis for decision transparency</li>
      </ul>
    </section>

    <div class="divider"></div>

    <section class="mb-16">
      <h2 class="font-serif">Artifacts</h2>
      <ul class="space-y-3">
        <li><a href="#" class="text-blue-300 hover:text-white">Technical Documentation</a></li>
        <li><a href="#" class="text-blue-300 hover:text-white">arXiv Preprint</a></li>
        <li><a href="#" class="text-blue-300 hover:text-white">Source Repository</a></li>
      </ul>
    </section>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '../../components/BaseLayout.vue';

import { onMounted } from 'vue';
onMounted(() => {
  document.title = 'CR-CA — Euroswarms Research';
});
</script>
