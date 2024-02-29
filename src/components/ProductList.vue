<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-card">
      <div @click="productClicked(product)">
        <img :src="product.image" alt="Product Image" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.price }} SEK</p>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchData } from '../services/service.js'

export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      try {
        const data = await fetchData()
        this.products = data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    productClicked(product) {
      console.log('Produkt klickad:', product)
    }
  }
}
</script>
<style scoped>
.product-list {
  display: grid;
  gap: 20px;
  justify-content: center;
}

.product-card {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.product-card img {
  max-width: 100%;
  height: auto;
}

@media (min-width: 768px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .product-card {
    width: 100%;
  }
}
</style>
