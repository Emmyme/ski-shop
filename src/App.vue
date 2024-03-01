<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <div class="navbar">
        <nav>
          <ul>
            <li>
              <RouterLink to="/ProductListView" class="ProductListViewLink">Produkter</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  text-align: center;
}

li {
  list-style-type: none;
}
</style>
