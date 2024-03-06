<template>
  <div class="wishlist">
    <h2>My Wishlist</h2>
    <div v-for="product in wishlist.items" :key="product.id" class="product-card">
      <div class="image-container">
        <img :src="product.image" alt="Product Image" class="product-image" />
      </div>
      <div class="product-details">
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="price">{{ product.price }} SEK</p>
      </div>
      <button @click="removeFromWishlist(product.id)">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from '../stores/wishList.js'

const wishlist = useWishlistStore()

function removeFromWishlist(productId) {
  wishlist.toggleProductInWishlist({ id: productId })
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
}

.wishlist {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
}

h2 {
  margin-bottom: 3rem;
}

.product-card {
  width: 60%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.253) 0px 3px 8px;
  border-radius: 10px;
}

.image-container {
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-right: 20px;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.product-details {
  flex-grow: 1;
}

.product-title {
  margin-bottom: 5px;
}

.price {
  font-weight: bold;
}

button {
  padding: 10px 20px;
  background-color: #056cb7;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 1000px) {
  .wishlist {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }

  .product-card {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  .image-container {
    width: 150px;
    height: 300px;
    margin-right: 10px;
  }

  .product-details {
    margin-top: 10px;
  }

  .product-title {
    font-size: 16px;
  }

  .price {
    font-size: 14px;
  }

  button {
    margin: 1rem;
    font-size: 16px;
  }
}
</style>