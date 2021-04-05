import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "/src/utiles/firebase";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    email: '',
    password: ''
  },
  getters: {
    username: (state) => state.username,
    email: (state) => state.email,
    password: (state) => state.password
  },
  mutations: {
    registUserName(state, username) {
      state.username = username
    },
    registEmail(state, email) {
      state.email = email
    },
    registPassword(state, password) {
      state.password = password
    },
    loginEmail(state, email) {
      state.email = email
    },
    loginPassword(state, password) {
      state.password = password
    },
    successRegistration(user) {
      alert('登録しました', user)
    },
    successLogin(user) {
      alert('ログインしました', user)
    },
    errorMessage(error) {
      alert('エラー', error)
    },
  },
  actions: {
    signUp({ commit, state }) {
      firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
      .then(user => {
        commit('successRegistration', user.username)
      })
      .catch(error => {
        commit('errorMessage', error.message)
      })
    },
    signIn({ commit, state }) {
      firebase.auth().signInWithEmailAndPassword(state.email, state.password)
      .then(user => {
        commit('successLogin', user.username)
      })
      .catch(error => {
        commit('errorMessage', error.message)
      })
    }
  },
  modules: {
  }
})
