import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mygift',
    name: 'MyGift',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyGift.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/Store.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
