<template>
  <div class="max-w-7xl m-auto p-5">
    <HeaderVue
      :search-product="searchProduct"
      @update-search="updateSearchValue"
    />

    <ProductList :search-product="searchProduct" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderVue from "./components/HeaderVue.vue";
import ProductList from "./components/products/ProductList.vue";

const searchProduct = ref("");

const updateSearchValue = (value) => {
  searchProduct.value = value;
};
</script>
