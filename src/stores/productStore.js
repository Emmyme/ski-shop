import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    selectedProduct: null
  }),

  actions: {
    setSelectedProduct(product) {
      this.selectedProduct = product
    }
  }
})
