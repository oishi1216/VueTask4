import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Modal from './components/Modal'

Vue.component('Modal', Modal)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')