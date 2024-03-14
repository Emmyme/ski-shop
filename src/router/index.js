import { createRouter, createWebHistory } from 'vue-router'
import CartView from '../views/CartView.vue'
import ProductListView from '../views/ProductListView.vue'
import ProduktSida from '../views/ProduktSida.vue'
import WishList from '../views/WishList.vue'
import HomePage from '../views/HomeView.vue'
import FAQView from '../views/FAQView.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
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
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQView
    }
  ]
})

export default router
