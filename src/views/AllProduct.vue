<template>
  <section class="product-carousel py-8">
    <div class="container mx-auto p-0 px-4">
      <div class="flex items-center justify-center">
        <h2 class="mb-4 text-2xl font-bold">All Product</h2>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-if="products.length"
          v-for="(product, id) in products"
          :key="id"
          class="rounded p-4 shadow-md hover:shadow-lg"
        >
          <img
            :src="product.image"
            alt="Product Image"
            class="h-48 w-full rounded-lg object-cover"
          />
          <RouterLink
            :to="`/product/${id}`"
            class="mt-2 line-clamp-2 text-xl font-medium"
          >
            {{ product.title }}
          </RouterLink>
          <p class="mb-2 line-clamp-3 text-gray-700">
            {{ product.description }}
          </p>
          <span class="font-bold text-green-500">{{ product.price }}</span>
          <button
            type="button"
            class="float-right mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import useProduct from "../composables/product";

defineProps({
  title: String,
  required: false,
  default: "",
});

const { getAllProducts, products } = useProduct();

onMounted(() => {
  getAllProducts();
});
</script>
