<template>
  <main>
    <div class="category-buttons">
      <button class="category-button" @click="selectCategory('')">Visa alla</button>
      <button class="category-button" @click="selectCategory('men\'s clothing')">Skidor</button>
      <button class="category-button" @click="selectCategory('jewelery')">Snowboards</button>
      <button class="category-button" @click="selectCategory('electronics')">Kläder</button>
      <button class="category-button" @click="selectCategory('women\'s clothing')">Skor</button>
    </div>
    <ProductList :selectedCategory="selectedCategory" />
  </main>
</template>

<script>
import ProductList from '@/components/ProductList.vue'

export default {
  components: {
    ProductList
  },
  data() {
    return {
      selectedCategory: ''
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category
    }
  }
}
</script>

<style scoped>
.category-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
}

.category-button {
  background-color: #056cb7;
  color: white;
  padding: 8px 16px;
  margin: 8px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 100px;
}

.category-button:hover {
  background-color: #7db9e4;
  transition: 0.15s;
}

@media (max-width: 767px) {
  .category-button {
    width: calc(100% - 16px);
  }
}
</style>
