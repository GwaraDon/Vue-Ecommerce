<template>
  <section class="product-carousel py-8">
    <div class="container mx-auto p-0 px-4">
      <div class="flex items-center justify-between">
        <h2 class="mb-4 text-2xl font-bold" v-if="title">{{ title }}</h2>
        <RouterLink
          :to="{ name: 'all-products' }"
          class="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
          >View All</RouterLink
        >
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-if="products.length"
          v-for="(product, id) in products.slice(0, 3)"
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
            @click="addToCart(product)"
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
const emit = defineEmits(["add-to-cart"]);

const { getAllProducts, products } = useProduct();
const addToCart = (product) => {
  console.log("Add to cart");
  emit("add-to-cart", product);
};

onMounted(() => {
  getAllProducts();
  console.log(products);
});
</script>
