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
  <div>
    <h1>Product List</h1>
    <ProductList />
  </div>
</template>

<style scoped></style>
