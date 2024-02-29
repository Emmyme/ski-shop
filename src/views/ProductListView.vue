<script>
// Importerar ProductList komponenten
import ProductList from '@/components/ProductList.vue'

// Denna komponent inkluderar ProductList för att använda den i mallen.
export default {
  components: {
    ProductList
  }
}
</script>

<!-- Vy för att visa produktlistan -->
<template>
  <main>
    <ProductList />
  </main>
</template>

<style scoped></style>
