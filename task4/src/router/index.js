import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../components/Signup.vue'
import Signin from '../components/Signin.vue'
import Dashboard from '../components/Dashboard.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
