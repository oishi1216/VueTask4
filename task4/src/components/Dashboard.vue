<template>
  <div class="contents">
    <div class="loginUser">
      <p class="name">{{ username }}さんようこそ！！</p>
    </div>
    <div class="info">
      <p class="wallet">残高：{{ wallet }}</p>
      <button class="logout" @click="logout">ログアウト</button>
    </div>
    <h1>ユーザ一覧</h1>
      <table class="list">
        <thead>
          <tr>
            <th>ユーザー名</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user) in userList" :value="user" :key="user.id">
            <td class="userName"> {{user.userName}} </td>
            <td><button @click="openModal1(user)">walletを見る</button></td>
            <td><button @click="openModal2(user)">送る</button></td>
          </tr>
        </tbody>        
      </table>
      <modal1 v-if="showModal1"></modal1>
      <modal2 v-if="showModal2"></modal2>
  </div>
</template>

<script>
import firebase from "/src/utiles/firebase";
import Modal1 from "/src/components/Modal1";
import Modal2 from "/src/components/Modal2";

export default {
  name: 'Dashboard',
  data() {
    return {
      authUser: false,
      userList: [],
    };
  },
  mounted() {
    const db = firebase.firestore();
    db.collection('userData').get().then(snap => {
      snap.forEach(doc => {
        this.userList.push(doc.data());
      });
    });
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut')
    },
    openModal1: function(user){
      this.$store.commit('openModal1')
      this.$store.commit('setUserInfo', user)
    },
    openModal2: function(user){
      this.$store.commit('openModal2')
      this.$store.commit('setUserInfo', user)
    },

  },
  computed: {
    username() {
      return this.$store.getters.username
    },
    wallet() {
      return this.$store.getters.wallet
    },
    showModal1() {
      return this.$store.getters.showModal1
    },
    showModal2() {
      return this.$store.getters.showModal2
    },
  },
  components: {
    Modal1,
    Modal2
  },
}
</script>

<style>
button.logout {
  padding: 1px 5px;
  margin: 0 0 0 10px;
}

.contents {
  margin: 0 auto;
  width: 80%;
}

.loginUser {
  float: left;
  height: 50px;
  width: 50%;
}

.info {
  float: right;
  height: 50px;
  width: 50%;
}

.wallet {
  display: inline-block;
}

.list th {
  text-align: left;
}

.userName{
  padding-right: 100%;
}

.list button {
  padding: 5px;
  margin: 0 auto;
  color: #fff;
  background-color: #00b3b3;
  border: 2px solid #00b3b3;
  outline: 0px
}

.list button:hover {
  background-color: #008080;
  border: 2px solid #008080;
}
</style>