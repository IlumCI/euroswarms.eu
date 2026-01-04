<template>
  <BaseLayout title="Project LUCRE — Euroswarms Research">
    <section class="mb-16">
      <div class="mb-6">
        <span class="status" style="color: #f4c430;">Official Project</span>
      </div>
      <h1 class="font-serif">Project LUCRE</h1>
    </section>

    <div class="divider"></div>

    <section class="mb-16">
      <h2 class="font-serif">Overview</h2>
      <p class="text-lg leading-relaxed">
        Project LUCRE focuses on multi-agent coordination and incentive-aware
        execution frameworks for distributed agentic systems. The project addresses
        fundamental challenges in scalable agent coordination and resource allocation.
      </p>
    </section>

    <section class="mb-16">
      <h2 class="font-serif">Core Concepts</h2>
      <p class="leading-relaxed mb-4">
        The project explores three key research directions:
      </p>
      <ul class="space-y-3">
        <li>Agent coordination protocols for distributed execution</li>
        <li>Incentive alignment mechanisms for multi-agent systems</li>
        <li>Scalable execution frameworks for large-scale deployments</li>
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
  document.title = 'Project LUCRE — Euroswarms Research';
});
</script>
