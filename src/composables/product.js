import { ref } from "vue";
import axios from "axios";

export default function useProduct() {
  const url = "https://fakestoreapi.com/";
  const products = ref([]);
  const singleProduct = ref({});
  const errorMessage = ref(null);

  const getAllProducts = async () => {
    errorMessage.value = null;
    products.value = [];
    try {
      const res = await axios.get(url + "products");
      products.value = res.data;
    } catch (error) {
      errorMessage.value = error.message;
    }
  };
  const getProduct = async (id) => {
    errorMessage.value = null;
    singleProduct.value = {};
    try {
      const res = await axios.get(url + "products/" + id);
      singleProduct.value = res.data;
    } catch (error) {
      errorMessage.value = error.message;
    }
  };

  return { singleProduct, products, errorMessage, getProduct, getAllProducts };
}
