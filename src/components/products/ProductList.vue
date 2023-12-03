<template>
  <div class="mt-10">
    <FilterProducts
      :sort-options="sortOptions"
      :sort-order="sortOrder"
      @update-sort-order="updateSortOrder"
    />

    <div v-if="filteredProducts.length">
      <v-infinite-scroll @load="getMoreProducts">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductItem
            v-for="product in filteredProducts"
            :key="product.key"
            :product="product"
          />
        </div>
        <template #empty>
          <v-alert type="warning">No more items!</v-alert>
        </template>
      </v-infinite-scroll>
    </div>
    <div v-else-if="isProductsLoading">
      <img
        width="100"
        class="m-auto"
        src="../../assets/images/loader.gif"
        alt="Loading..."
      />
    </div>
    <div
      v-else-if="isErrorOccured || !filteredProducts.length"
      class="text-center text-2xl"
    >
      Oops, nothing found :(
    </div>
  </div>
</template>

<script setup>
import { api } from "../../api/api";
import { computed, onMounted, ref, watch } from "vue";
import {
  sortOptions,
  sortProductTypes,
  sortTypeMap,
  sortVariants,
} from "../../constants/sort.js";
import { toastOptions } from "../../plugins/toast/toastOptions.js";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";

import FilterProducts from "./FilterProducts.vue";
import ProductItem from "./ProductItem.vue";

const toast = useToast();

const isProductsLoading = ref(false);
const isErrorOccured = ref(false);

const sortType = ref(null);
const sortOrder = ref(null);

const store = useStore();

const props = defineProps({
  searchProduct: {
    type: String,
    default: "",
  },
});

const getMoreProducts = async ({ done }) => {
  store.commit("setLimitPerPage", store.getters.getLimitPerPage + 5);
  await getProducts();
  if (store.getters.getLimitPerPage >= 20) {
    done("empty");
  } else {
    done("ok");
  }
};

const getProducts = async () => {
  try {
    isProductsLoading.value = true;
    const { data } = await api.products.getProducts(
      store.getters.getLimitPerPage
    );

    store.commit("setProducts", data);
  } catch (error) {
    isErrorOccured.value = true;
    toast.error("Error: " + error, toastOptions);
  } finally {
    isProductsLoading.value = false;
  }
};

const filteredProducts = computed(() => {
  return store.getters.getProducts.filter((product) =>
    product.title.toLowerCase().includes(props.searchProduct.toLowerCase())
  );
});

const sortProducts = (sortBy, order) => {
  const products = store.getters.getProducts;

  switch (sortBy) {
    case sortProductTypes.price:
      if (order === sortVariants.price.fromHighest) {
        store.commit(
          "setProducts",
          products.sort((a, b) => b.price - a.price)
        );
      } else if (order === sortVariants.price.fromLowest) {
        store.commit(
          "setProducts",
          products.sort((a, b) => a.price - b.price)
        );
      }
      break;
    case sortProductTypes.rating:
      if (order === sortVariants.rating.fromHighest) {
        store.commit(
          "setProducts",
          products.sort((a, b) => b.rating.rate - a.rating.rate)
        );
      } else if (order === sortVariants.rating.fromLowest) {
        store.commit(
          "setProducts",
          products.sort((a, b) => a.rating.rate - b.rating.rate)
        );
      }
      break;
    case sortProductTypes.title:
      store.commit(
        "setProducts",
        products.sort((a, b) => {
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();

          if (order === sortVariants.title.fromAZ) {
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
          } else if (order === sortVariants.title.fromZA) {
            if (titleA > titleB) return -1;
            if (titleA < titleB) return 1;
            return 0;
          }
        })
      );
      break;
  }
};

const updateSortOrder = (value) => {
  sortOrder.value = value;
};

watch(sortOrder, (value) => {
  if (Object.prototype.hasOwnProperty.call(sortTypeMap, value)) {
    sortType.value = sortTypeMap[value];
  }
});

watch([sortType, sortOrder], ([type, order]) => {
  sortProducts(type, order);
});

onMounted(() => {
  getProducts();
});
</script>
