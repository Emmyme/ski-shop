<!-- ProduktListaContent.vue - Dummy view för att testa funktionaliteten av Produkt sidan så att man faktsikt kan klicka på en produkt och komma till produktsidan -->
<template>
  <div>
    <div class="produktlista" v-for="product in products" :key="product.id">
      <!-- Skapar en router-länk till ProduktSida.vue med produktens id som parameter -->
      <router-link :to="{ name: 'ProduktSida', params: { id: product.id } }">{{
        product.title
      }}</router-link>
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
    fetchData().then((data) => {
      /* Datan från APIn läggs in i Products arrayen */
      this.products = data
    })
  }
}
</script>

<style scoped>
.produktlista {
  padding: 1rem;
}
</style>
