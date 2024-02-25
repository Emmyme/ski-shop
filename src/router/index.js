import { createRouter, createWebHistory } from 'vue-router'
import Betalsida from '../views/BetalSida.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Betalsida',
      name: 'Betalsida',
      component: Betalsida
    }
  ]
})

export default router