<template>
  <BaseLayout title="Contact — Euroswarms Research">
    <section class="mb-24">
      <h1 class="font-serif">Contact</h1>
      <p class="text-lg leading-relaxed max-w-4xl mb-8">
        For research inquiries, collaboration proposals, or technical discussion:
      </p>
      <div class="card p-8 max-w-2xl">
        <p class="text-2xl font-serif mb-2">
          <a href="mailto:research@euroswarms.eu" class="text-blue-300 hover:text-white border-0">
            research@euroswarms.eu
          </a>
        </p>
        <p class="mt-4" style="color: #d4e3f0;">
          We welcome inquiries from researchers, institutions, and organizations
          interested in collaboration or technical exchange.
        </p>
      </div>
    </section>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '../components/BaseLayout.vue';

import { onMounted } from 'vue';
onMounted(() => {
  document.title = 'Contact — Euroswarms Research';
});
</script>
