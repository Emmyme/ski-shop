<!-- ProduktDetail.vue - En test view för att se om man faktsikt kan klicka på en produkt och komma till den rätta produktsidan -->

<template>
  <div>
    <h1>{{ product.title }}</h1>
    <img :src="product.image" alt="Product Image" />
    <p>{{ product.description }}</p>
    <p>Price: {{ product.price }} SEK</p>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore'

export default {
  computed: {
    product() {
      const productStore = useProductStore()
      return productStore.selectedProduct
    }
  }
}
</script>

<style scoped></style>
