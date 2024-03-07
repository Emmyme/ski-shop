<!-- HTML logik för att visa produktlistan -->
<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-card">
      <div @click="productClicked(product)">
        <div class="image-container">
          <img :src="product.image" alt="Product Image" class="product-image" />
        </div>
        <div class="product-details">
          <h3 class="product-title">{{ product.title }}</h3>
          <p class="price">{{ product.price }} SEK</p>
        </div>
      </div>

      <!-- Önskelista -->
      <!-- Toggle knapp för att lägga till producten i önskelistan  -->
      <button @click.stop="toggleWishlist(product)" class="wishlist-toggle">
        <span v-if="isProductInWishlist(product)" class="wishlist-icon filled">
          <!-- Hjärt ikon från font-awsome -->
          <i class="fas fa-heart"></i>
        </span>
        <span v-else class="wishlist-icon"><i class="far fa-heart"></i> </span>
      </button>
    </div>
  </div>
</template>

<script>
import { fetchData } from '../services/service.js'
import { useProductStore } from '@/stores/productStore'
import { useWishlistStore } from '../stores/wishList.js'

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
    },

    // Önskelista :)
    // Funktion för att lägga till/ta bort produkt från önskelistan
    toggleWishlist(product) {
      const wishlistStore = useWishlistStore()
      wishlistStore.toggleProductInWishlist(product)
    },
    // Funktion för att kontrollera om produkten finns i önskelistan
    isProductInWishlist(product) {
      const wishlistStore = useWishlistStore()
      return wishlistStore.isInWishlist(product.id)
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.product-list {
  display: grid;
  gap: 20px;
  justify-content: center;
}

.product-card {
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card div {
  padding: 10px;
  width: 100%;
}

.image-container {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.product-details {
  text-align: center;
}

.product-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.price {
  font-size: 1rem;
  color: rgb(0, 0, 0);
}

@media (min-width: 768px) {
  .product-list {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
