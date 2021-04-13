import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "/src/utiles/firebase";
import 'firebase/firestore';
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    email: '',
    password: '',
    wallet: '',
    uid: ''
  },
  getters: {
    username: (state) => state.username,
    email: (state) => state.email,
    password: (state) => state.password,
    wallet: (state) => state.wallet
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
    setUser(state, { nameData, walletData }) {
      state.username = nameData
      state.wallet = walletData
    }
  },
  actions: {
    signUp({commit, state}) {
      firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
      .then(function() {

        const userInfo = firebase.auth().currentUser
        userInfo.updateProfile({
          displayName: state.username
        
        }).then(function() {
        
          const db = firebase.firestore()
          db.collection("userData").doc(userInfo.uid).set({
            uid: userInfo.uid,
            userName: userInfo.displayName,
            email: userInfo.email,
            wallet: 500
          
          }).then(function() {
     
            const user = db.collection('userData').doc(userInfo.uid);
            user.get().then((doc) => {
          
              const nameData = doc.data().userName;
              const walletData = doc.data().wallet;
              commit('setUser', { nameData, walletData });
          
            }).catch((error)=>{
              alert(error.message)
            });

          }).catch(function(error) {
            alert(error.message)
          });

          router.push('/Dashboard')

        })
        .catch(error => {
          alert(error.message)
        })
      })
    },
    signIn({ commit }, { email, password }) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function() {
      
        const userInfo = firebase.auth().currentUser
        commit('registUserName', userInfo.displayName)
        const db = firebase.firestore()
        const user = db.collection('userData').doc(userInfo.uid);
      
        user.get().then((doc) => {
      
          const data = doc.data();
          commit('setUser', data);
      
        }).catch((error)=>{
          alert(error.message)
        });
      
        router.push('/Dashboard')
      
      })
      .catch(error => {
        alert('エラー', error)
      })
    }
  },
  modules: {
  }
})
