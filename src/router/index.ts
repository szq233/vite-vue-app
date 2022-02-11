import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/default.vue'

import HomeRoute from '@/views/home/routes'
import AboutRoute from '@/views/about/routes'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        ...HomeRoute,
        ...AboutRoute
      ]
    }
  ]
})
export default router