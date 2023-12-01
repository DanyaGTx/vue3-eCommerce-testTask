<template>
  <v-card-title class="d-flex align-center pe-2">
    <div class="flex">
      <v-icon icon="mdi-cart"></v-icon> &nbsp;
      <h1>Product List</h1>
    </div>

    <v-spacer></v-spacer>

    <v-text-field
      :value="searchProduct"
      prepend-inner-icon="mdi-magnify"
      density="compact"
      label="Search"
      single-line
      flat
      hide-details
      variant="outlined"
      @update:model-value="updateField('update-search', $event)"
    ></v-text-field>
  </v-card-title>
</template>

<script setup>
defineProps({
  searchProduct: {
    type: String,
    default: "",
  },
});

const emit = defineEmits({
  "update-search": null,
});

const updateField = (type, value) => {
  emit(type, value);
};
</script>
