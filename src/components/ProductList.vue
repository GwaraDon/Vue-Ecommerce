<template>
  <section class="product-carousel py-8">
    <div class="container mx-auto p-0 px-4">
      <h2 class="mb-4 text-2xl font-bold" v-if="title">{{ title }}</h2>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="product in products"
          :key="product.id"
          class="rounded p-4 shadow-md hover:shadow-lg"
        >
          <img
            :src="product.image"
            alt="Product Image"
            class="h-48 w-full rounded-lg object-cover"
          />
          <h3 class="mt-2 text-xl font-medium">{{ product.name }}</h3>
          <p class="mb-2 text-gray-700">{{ product.description }}</p>
          <span class="font-bold text-green-500">{{ product.price }}</span>
          <RouterLink
            to="/product"
            class="float-right mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            >Add to Cart</RouterLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  required: false,
  default: "",
});
const test = () => {
  console.log("test");
};

const products = [
  {
    id: 1,
    name: "Product  1",
    description: "This is product  1",
    price: "$100",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product  2",
    description: "This is product  2",
    price: "$200",
    image: "https://via.placeholder.com/150",
  },
  // Add more products as needed
];
</script>
