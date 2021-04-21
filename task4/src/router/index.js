import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../components/Signup.vue'
import Signin from '../components/Signin.vue'
import Dashboard from '../components/Dashboard.vue'
import Modal1  from '../components/Modal1.vue'
import Modal2  from '../components/Modal2.vue'
import firebase from "/src/utiles/firebase";

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
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/Modal1',
    name: 'Modal1',
    component: Modal1,
  },
  {
    path: '/Modal2',
    name: 'Modal2',
    component: Modal2,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/Signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
})

export default router
