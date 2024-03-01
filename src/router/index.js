import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '../views/ProductListView.vue'
import ProductDetail from '../views/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/ProductListView',
      name: 'ProductListView',
      component: ProductListView
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})

export default router
