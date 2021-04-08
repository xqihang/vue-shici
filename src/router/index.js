import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '墨凡说'
    }
  },
  {
    path: '/all',
    name: 'All',
    component: () => import('../views/All.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/author/:id',
    name: 'AuthorDetail',
    component: () => import('../views/author/detail.vue'),
    meta: {
      title: '专栏作者'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
