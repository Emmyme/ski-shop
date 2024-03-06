import { defineStore } from 'pinia';

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    // sätter items till antingen det som finns i localStorage med nyckeln "wishlist" eller en tom array om det inte finns något.
    items: JSON.parse(localStorage.getItem('wishlist')) || [],
  }),
  actions: {
    // Lägga till / ta bort en produkt från önskelistan.
    toggleProductInWishlist(product) {
      // Kollar om produkten redan finns i önskelistan genom att leta efter product.id.
      const existingIndex = this.items.findIndex((item) => item.id === product.id);
      
      // Kollar om vi ska ta bort eller lägga till produkten i önskelistan.
      if (existingIndex === -1) {
        this.items.push(product);
      } else { 
        this.items.splice(existingIndex, 1);
      }
    
      this.updateLocalStorage();
    },
    
    // Funktion för att ta bort en produkt från önskelistan baserat på product.id.
    removeFromWishlist(productId) {
      // Filtrera bort produkten med det angivna id:et från önskelistan.
      this.items = this.items.filter((item) => item.id !== productId);
      this.updateLocalStorage();
    },
    
    // kollar om en produkt finns i önskelistan baserat på dess id.
    isInWishlist(productId) {
      return this.items.some((item) => item.id === productId);
    },
    
    updateLocalStorage() {
      // Spara önskelistan som en json i localStorage med key = "wishlist".
      localStorage.setItem('wishlist', JSON.stringify(this.items));
    },

  },
});
