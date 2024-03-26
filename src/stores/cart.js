import { defineStore } from "pinia";
import { ref, computed, watch, watchEffect } from "vue";

export const useCartStore = defineStore("cart", () => {
  const isCartModal = ref(false);
  const cartItems = ref([]); // Array to store cart items

  watchEffect(cartItems, (newValue, oldValue) => {
    if (newValue !== oldValue) {
      localStorage.setItem("cart", JSON.stringify(cartItems.value));
    }
  });

  // Load cart from localStorage on store initialization (unchanged)
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cartItems.value = JSON.parse(storedCart);
  }
  const totalPrice = computed(() => {
    return cartItems.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  });

  const addToCart = (product) => {
    const existingItem = cartItems.value.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (productId) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId);
    localStorage.removeItem("cart");
  };

  const updateQuantity = (productId, quantity) => {
    const item = cartItems.value.find((item) => item.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  };

  const clearCart = () => {
    cartItems.value = [];
  };

  return {
    isCartModal,
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
  };
});
