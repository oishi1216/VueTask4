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
    uid: '',
    showModal1: false,
    showModal2: false,
    userNm: '',
    userWt: '',
    userUd: '',
  },
  getters: {
    username: (state) => state.username,
    email: (state) => state.email,
    password: (state) => state.password,
    wallet: (state) => state.wallet,
    showModal1: (state) => state.showModal1,
    showModal2: (state) => state.showModal2,
    userNm: (state) => state.userNm,
    userWt: (state) => state.userWt,
    userUd: (state) => state.userUd,
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
    },
    setUserInfo(state, user) {
      state.userNm = user.userName
      state.userWt = user.wallet
      state.userUd = user.uid
    },
    setWallet(state, nowWallet) {
      state.wallet = nowWallet
      console.log(state.wallet)
    },
    setYourWallet(state, yourWallet) {
      state.userWt = yourWallet
      console.log(state.userWt)
    },
    openModal1(state) {
      state.showModal1 = true
    },
    openModal2(state) {
      state.showModal2 = true
    },
    closeModal1(state) {
      state.showModal1 = false
    },
    closeModal2(state) {
      state.showModal2 = false
    },
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
      
          const nameData = doc.data().userName;
          const walletData = doc.data().wallet;
          commit('setUser', { nameData, walletData });
      
        }).catch((error)=>{
          alert(error.message)
        });
      
        router.push('/Dashboard')
      
      })
      .catch(error => {
        alert('エラー', error)
      })
    },
    logOut() {
      firebase.auth().signOut()
      .then(() => {
        router.push('/Signin');
      })
      .catch(() => {
        alert('ログアウト失敗')
      });
    },
    sendWallet({ commit, state }, sendAmount) {
      let nowWallet = state.wallet - sendAmount
      const userInfo = firebase.auth().currentUser
      const db = firebase.firestore()
      db.collection("userData").doc(userInfo.uid).update({
        wallet: nowWallet
      }).then(() => {
        commit('setWallet', nowWallet);

        const num1 = parseInt(state.userWt)
        const num2 = parseInt(sendAmount)
        let yourWallet = num1 + num2
            
        const db = firebase.firestore()
        db.collection("userData").doc(state.userUd).update({
          wallet: yourWallet
        }).then(() => {
          commit('setYourWallet', yourWallet);
          commit('closeModal2');
        })
        .catch(() => {
          alert('送金失敗')
        });
      })
      .catch(() => {
        alert('送金失敗')
      });
    }
  },
  modules: {
  }
})
