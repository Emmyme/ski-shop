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
    <div class="category-buttons">
      <button class="category-button" @click="selectCategory('Category 1')">Kategori 1</button>
      <button class="category-button" @click="selectCategory('Category 2')">Kategori 2</button>
      <button class="category-button" @click="selectCategory('Category 3')">Kategori 3</button>
      <button class="category-button" @click="selectCategory('Category 4')">Kategori 4</button>
      <button class="category-button" @click="selectCategory('Category 5')">Kategori 5</button>
    </div>
    <ProductList />
  </main>
</template>

<style scoped>
.category-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
}

.category-button {
  background-color: #87ceeb;
  color: white;
  padding: 8px 16px; /* Minska padding för mindre knappar */
  margin: 8px; /* Minska marginal för mindre avstånd mellan knapparna */
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 100px; /* Ange en fast bredd för varje knapp */
}

/* Justera stilar för mindre skärmar */
@media (max-width: 767px) {
  .category-button {
    width: calc(100% - 16px); /* Göra knapparna fullbredd minus marginal */
  }
}
</style>
