import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/about',
    component: () => import('../pages/About.vue')
  },


  // 404 route - must be the last one
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../pages/404.vue')
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
