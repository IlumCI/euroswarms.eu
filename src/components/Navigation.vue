<template>
  <header class="border-b" style="border-color: #003399; background-color: #003399;">
    <nav class="max-w-content mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
      <router-link to="/" class="brand flex items-center no-underline border-0 hover:opacity-90 transition-opacity">
        <img 
          src="/assets/images/full-nobg.png" 
          alt="Euroswarms Research" 
          class="h-16 sm:h-20 md:h-24 lg:h-28 w-auto" 
        />
      </router-link>
      <div class="links flex gap-4 sm:gap-6 md:gap-8">
        <router-link to="/" class="text-xs sm:text-sm text-white hover:text-yellow-300 transition-colors font-medium">Home</router-link>
        <router-link to="/projects" class="text-xs sm:text-sm text-white hover:text-yellow-300 transition-colors font-medium">Projects</router-link>
        <router-link to="/publications" class="text-xs sm:text-sm text-white hover:text-yellow-300 transition-colors font-medium">Publications</router-link>
        <router-link to="/docs" class="text-xs sm:text-sm text-white hover:text-yellow-300 transition-colors font-medium">Documentation</router-link>
        <router-link to="/contact" class="text-xs sm:text-sm text-white hover:text-yellow-300 transition-colors font-medium">Contact</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Navigation component with Vue Router and HTMX-ready
</script>
