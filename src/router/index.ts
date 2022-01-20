import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import test from '../views/test.vue'
import Threats from '../views/Threats.vue'
import Industries from '../views/Industries.vue'
import SolutionPartners from '../views/SolutionPartners.vue'
import CreateSolutionPartner from '../components/SolutionPartners/CreateSolutionPartner.vue'

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
    path: '/solutionPartners',
    name: 'solutionPartners',
    component: SolutionPartners
  },
  {
    path: '/solutionPartners/edit',
    name: 'editSolutionPartners',
    component: CreateSolutionPartner
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
