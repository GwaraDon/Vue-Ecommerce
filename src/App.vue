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
        <span @click="toggleCart" class="relative cursor-pointer"
          >Cart
          <span
            v-if="cartItems.length"
            class="absolute -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] text-white"
          >
            {{ cartItems.length > 0 ? cartItems.length : "" }}</span
          ></span
        >
      </nav>
    </header>
  </div>
  <RouterView />
  <Cart v-if="cartOpen" :open="cartOpen" />
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
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import Cart from "./components/Cart.vue";
import { useCartStore } from "./stores/cart";
import { storeToRefs } from "pinia";
const { isCartModal, cartItems } = storeToRefs(useCartStore());

const cartOpen = isCartModal;
const toggleCart = () => {
  cartOpen.value = !cartOpen.value;
};
</script>
