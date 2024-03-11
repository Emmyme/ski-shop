import { createRouter, createWebHistory } from 'vue-router'
import CartView from '../views/CartView.vue'
import ProductListView from '../views/ProductListView.vue'
import ProduktSida from '../views/ProduktSida.vue'
import WishList from '../views/WishList.vue'

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
      path: '/:id',
      name: 'ProductDetail',
      component: ProduktSida
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishList
    } 

  ]
})

export default router
