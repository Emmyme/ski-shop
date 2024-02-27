import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '../views/ProductListView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/ProductListView',
      name: 'ProductListView',
      component: ProductListView
    }
  ]
})

export default router
