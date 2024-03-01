<!-- ShoppingCart.vue - Dummy view för att testa funktionaliteten av Produkt sidan så att man faktiskt kan lägga till produkter i kundvagnen -->
<template>
  <div>
    <h1>Kundvagn: {{ cart.itemCount }} objekt</h1>
    <ul>
      <!-- Hämtar items från pinians items, cart = pinia store-->
      <li v-for="item in cart.items" :key="item.id">
        {{ item.title }} - {{ item.price }}

        <img class="image" :src="item.image" alt="produktbild" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const cart = useCartStore() /* Konstanten använder cart store */
</script>

<style scoped>
.image {
  width: 2rem;
}
</style>
