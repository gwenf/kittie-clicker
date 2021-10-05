import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Main from '../views/Main.vue'

import store from '../store'

const routes = [
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/',
    name: 'Main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Main' && (!store.state.kittenName || !store.state.kittenUrl)) {
    next({ name: 'Welcome' })
  }
  next()
})

export default router
