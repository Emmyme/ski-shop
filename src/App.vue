<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '../src/stores/cart'

const cart = useCartStore()
</script>

<template>
  <header>
    <div>
      <nav>
        <!-- Tillfällig navbar -->
        <ul>
          <li><RouterLink to="/Produkt">Produktlista</RouterLink></li>
          <li>
            <RouterLink to="/cart">Kundvagn ({{ cart.itemCount }})</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
