<template>
  <v-select
    :value="sortOrder"
    class="max-w-[300px]"
    label="Sort products"
    :items="sortOptions"
    @update:model-value="updateField('update-sortOrder', $event)"
  ></v-select>
</template>

<script setup>
defineProps({
  sortOptions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits({
  "update-sortOrder": null,
});

const updateField = (type, value) => {
  emit(type, value);
};
</script>
