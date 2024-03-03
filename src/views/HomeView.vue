<script setup>
import ProductList from "@/components/ProductList.vue";
import BannerCarousel from "@/components/BannerCarousel.vue";
</script>

<template>
  <main>
    <section class="hero h-[300px] bg-cover bg-center">
      <div
        class="container relative z-10 mx-auto flex flex-col items-center justify-center bg-black px-4 py-16 text-center opacity-90"
      >
        <h1 class="text-4xl font-bold text-white">Welcome to Your Store</h1>
        <p class="m-2 mt-4 text-xl text-gray-200">
          Find the best products for your needs.
        </p>
        <a
          href="#"
          class="btn btn-primary mt-8 border border-gray-200 p-2 text-white"
          >Shop Now</a
        >
      </div>
      <!-- <div class="absolute top-0 left-0 w-full h-full">
        <BannerCarousel />
    </div>   -->
    </section>
    <section class="product-carousel py-8">
      <div class="container mx-auto px-4">
        <ProductList title="Featured Products" />
      </div>
    </section>
    <section class="cta bg-gray-100 py-8">
      <div
        class="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:flex-row"
      >
        <p class="text-center text-xl font-bold md:text-left">
          Ready to start shopping?
        </p>
        <a href="#" class="btn btn-primary ml-4 md:ml-0"
          >Explore Our Products</a
        >
      </div>
    </section>
    <ProductList title="All Products" />
  </main>
</template>
