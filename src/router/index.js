import { createRouter, createWebHistory } from 'vue-router'
import CartView from '../views/CartView.vue'
import ProductListView from '../views/ProductListView.vue'
import ProduktSida from '../views/ProduktSida.vue'
import BetalSida from '../views/BetalSida.vue'
import WishList from '../views/WishList.vue'

const router = createRouter({
  history: createWebHistory(),
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
      path: '/payment',
      name: 'payment',
      component: BetalSida
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishList
    }
  ]
})

export default router
