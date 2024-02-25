<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav >
        <RouterLink to="/BetalSida">BetalSida</RouterLink>
        <RouterLink to="/ProduktSida">Produktsida</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>