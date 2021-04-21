import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Modal1 from './components/Modal1'
import Modal2 from './components/Modal2'

Vue.component('Modal1', Modal1 ,'Modal2', Modal2)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')