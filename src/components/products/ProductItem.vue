<template>
  <v-card :loading="loading" class="mx-auto">
    <div class="p-3">
      <v-img height="250" :src="product.image"></v-img>
    </div>

    <v-card-item>
      <v-card-title>{{ product.title }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">{{ product.category }}</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="product.rating.rate"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">{{ product.rating.rate }}</div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ {{ product.price }}</div>

      <div>
        {{ product.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
