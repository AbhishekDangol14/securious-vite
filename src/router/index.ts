import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import test from '../views/test.vue'
import Threats from '../views/Threats.vue'
import Industries from '../views/Industries.vue'
import News from '../views/News.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/threats',
    name: 'threats',
    component: Threats
  },
  {
    path: '/industries',
    name: 'industries',
    component: Industries
  },
  {
    path: '/news',
    name: 'news',
    component: News
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
