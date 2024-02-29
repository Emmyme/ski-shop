import { createRouter, createWebHistory } from 'vue-router'
import ProduktSida from '../views/ProduktSida.vue'
import ProduktLista from '../views/ProduktListaTest.vue'
import Cart from '../components/ShoppingCart.vue'; // Adjust the path as necessary


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Produkt/:id',
      name: 'ProduktSida',
      component: ProduktSida
    },
    {
      path: '/Produkt',
      name: 'ProduktLista',
      component: ProduktLista
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    }
  ]
})

export default router
