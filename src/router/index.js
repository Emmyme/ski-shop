import { createRouter, createWebHistory } from 'vue-router'
import ProduktSida from '../views/ProduktSida.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ProduktSida',
      name: 'ProduktSida',
      component: ProduktSida
    }
  ]
})

export default router
