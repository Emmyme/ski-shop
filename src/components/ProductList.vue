<!-- HTML logik för att visa produktlistan -->
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
import { useProductStore } from '@/stores/productStore'

export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    /* När komponenten skapas, hämta produkterna från API-tjänsten */
    this.fetchProducts()
  },
  methods: {
    /* Funktion för att hämta produkter från API-tjänsten */
    async fetchProducts() {
      try {
        const data = await fetchData()

        /* Tilldela hämtad data till komponentens lokala data (products) */
        this.products = data
      } catch (error) {
        /* Vid fel, logga felmeddelandet till konsolen */
        console.error('Error fetching products:', error)
      }
    },
    productClicked(product) {
      const productStore = useProductStore()

      /* Ange den valda produkten i store */
      productStore.setSelectedProduct(product)

      /* Navigera till produktdetaljvyen med rätt id */
      this.$router.push({ name: 'ProductDetail', params: { id: product.id.toString() } })
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  overflow-x: hidden;
  padding: 20px;
}

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
  overflow: hidden;
}

.product-card img {
  max-width: 100%;
  height: 150px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .product-list {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width: 767px) {
  .product-card {
    width: 100%;
  }
}
</style>
