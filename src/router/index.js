import { createRouter, createWebHistory } from 'vue-router'
import CartView from '../views/CartView.vue'
import ProductListView from '../views/ProductListView.vue'
import ProduktSida from '../views/ProduktSida.vue'
import BetalSida from '../components/BetalSida.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductListView
    },
    {
      path: '/product',
      name: 'product',
      component: ProduktSida
    },
    {
      path: '/payment',
      name: 'payment',
      component: BetalSida
    }

  ]
})

export default router
