import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../components/Signup.vue'
import Signin from '../components/Signin.vue'


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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
