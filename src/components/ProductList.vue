<!-- Komponent för produktlistan -->

<!-- HTML logik för att visa produkterna på sidan -->
<template>
  <div class="product-list">
    <div v-for="product in products" class="product-card">
      <img :src="product.image" alt="Product Image" />
      <h3>{{ product.ProductName }}</h3>
      <p>{{ product.price }} SEK</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [] // produktlistan kommer att gå här
    }
  },
  mounted() {
    // Hämta produkter när komponenten monteras
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      // Hämta produktlistan från API eller lokal datafil
      try {
        const response = await fetch('src/products.json')
        const data = await response.json()
        this.products = data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
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
    width: 100%; /* Visa ett kort per rad i mobilt läge */
  }
}
</style>
