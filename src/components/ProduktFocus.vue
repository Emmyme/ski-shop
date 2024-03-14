<template>
  <!-- V-if rendrerar bara product när den har laddats -->
  <div class="Produktsida" v-if="product">
    <div>
      <!-- Brödsmulor för navigering -->
      <ul class="breadcrumb">
        <li><router-link to="/">Hem</router-link></li>
        <li><router-link to="/products">Produktlista</router-link></li>
        <li>{{ product.title }}</li>
      </ul>
    </div>

    <div class="image">
      <!-- Produktbild -->
      <img :src="product.image" alt="Product Image" />
    </div>

    <div class="info">
      <h1>{{ product.title }}</h1>
      <h2>Beskrivning:</h2>
      <p>{{ product.description }}</p>
    </div>

    <div class="purchase">
      <!-- Lägg till i varukorgen-knapp-->
      <router-link to="/cart"><button @click="addToCart">Lägg till i varukorg</button></router-link>
    </div>
  </div>
</template>

<script>
import { fetchData } from '../services/service.js'
import { useCartStore } from '../stores/cart'

export default {
  data() {
    return { product: null }
  },
  created() {
    /* Fetchar datan baserat på vilket id som används i adressfältet.
    Om vi använder id 5 så hämtas array[4]. */
    fetchData().then((data) => (this.product = data[this.$route.params.id - 1]))
  },
  methods: {
    addToCart() {
      /* Lägger till den nuvaranda produkten i varukorgen (se cart.js för förstå hur den fungerar) */
      useCartStore().addProduct(this.product)
    }
  }
}
</script>

<style scoped>
.Produktsida {
  padding: 0 6rem;
  margin: 3rem;
}

.breadcrumb {
  background-color: grey;
  padding: 1rem 2rem;
  background-color: rgb(229, 229, 229);
  border-radius: 2rem;
  margin-bottom: 2rem;
}
ul.breadcrumb li {
  display: inline;
}

/* Lägger till slash-tecken för att "dela upp" breadcrumbs */
ul.breadcrumb li + li:before {
  padding: 8px;
  content: '/';
}

.image {
  background-color: rgb(229, 229, 229);
  display: block;
  border-radius: 2rem;
}

.image img {
  margin: auto;
  display: block;
  padding: 2rem;
  max-height: 500px;
  border-radius: 3rem;
}

.info h1 {
  margin-top: 2rem;
  font-size: 3rem;
}

.info p {
  width: 50%;
  font-size: 1.5rem;
  margin-top: 1rem;
}

.purchase button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #056cb7;
  padding: 20px;
  border-radius: 20px;
  border-style: none;
  color: white;
  font-size: 1.5rem;
  margin-top: 3rem;
}

.purchase button:hover {
  background-color: #7db9e4;
}

.purchase a {
  text-decoration: none;
}

@media (max-width: 768px) {
  .Produktsida {
    padding: 0;
  }

  .Produktsida {
    padding: 0;
  }
}
</style>
