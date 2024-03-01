import { createRouter, createWebHistory } from 'vue-router'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }
  ]
})

export default router
