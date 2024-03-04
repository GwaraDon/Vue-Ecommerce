<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="sticky top-0 z-50">
    <header
      class="flex items-center justify-between bg-gray-800 px-6 py-4 text-white"
    >
      <h2 class="text-3xl font-bold">
        <RouterLink to="/"> E-commerce</RouterLink>
      </h2>
      <nav class="space-x-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </header>
  </div>
  <RouterView />
  <footer
    class="flex items-center justify-between bg-gray-800 px-6 py-4 text-white"
  >
    <p>&copy; 2023 Your Shop Name. All rights reserved.</p>
    <nav class="space-x-4">
      <RouterLink to="/" class="hover:text-gray-400">Home</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-400">About</RouterLink>
      <RouterLink to="/contact" class="hover:text-gray-400">Contact</RouterLink>
    </nav>
  </footer>
</template>
