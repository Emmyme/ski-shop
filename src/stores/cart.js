import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addProduct(product) {
      this.items.push(product) /* Lägg till produkten i items-arrayen */
    }
  },
  getters: {
    /* Getter för att beräkna totala antalet objekt i kundvagnen */
    itemCount: (state) => state.items.length
  }
})
