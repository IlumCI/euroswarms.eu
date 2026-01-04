<template>
  <BaseLayout title="Euroswarms Research" description="Independent Research in Agentic and Causal AI Systems">
    <section class="mb-24">
      <h1 class="font-serif">Independent Research in Agentic and Causal AI Systems</h1>
      <p class="text-lg leading-relaxed max-w-4xl">
        Euroswarms Research is an independent research organization focused on
        agentic reasoning architectures, causal modeling, and constraint-driven
        AI systems for real-world decision processes.
      </p>
    </section>

    <div class="divider"></div>

    <section class="mb-24">
      <h2 class="font-serif">Active Research Areas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
        <router-link to="/projects/crca" class="card p-8 block group">
          <div class="mb-4">
            <span class="status" style="color: #f4c430;">Official</span>
          </div>
          <h3 class="font-serif text-2xl mb-3">CR-CA</h3>
          <p class="leading-relaxed">
            Causal Reasoning and Counterfactual Analysis architectures for
            deterministic, explainable agent systems.
          </p>
        </router-link>
        <router-link to="/projects/lucre" class="card p-8 block group">
          <div class="mb-4">
            <span class="status" style="color: #f4c430;">Official</span>
          </div>
          <h3 class="font-serif text-2xl mb-3">Project LUCRE</h3>
          <p class="leading-relaxed">
            Multi-agent coordination and incentive-aware execution frameworks.
          </p>
        </router-link>
      </div>
    </section>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '../components/BaseLayout.vue';

// Update document title
import { onMounted } from 'vue';
onMounted(() => {
  document.title = 'Euroswarms Research';
});
</script>
