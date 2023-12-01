<template>
  <div class="container">
    <HeaderVue
      :search-product="searchProduct"
      @update-search="updateSearchValue"
    />

    <ProductList ref="products" :search-product="searchProduct" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderVue from "./components/layout/HeaderVue.vue";
import ProductList from "./components/products/ProductList.vue";

const searchProduct = ref("");

const updateSearchValue = (value) => {
  searchProduct.value = value;
};
</script>
