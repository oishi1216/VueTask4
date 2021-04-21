<template>
  <div class="contents">
    <div class="loginUser">
      <p class="name">{{ username }}さんようこそ！！</p>
    </div>
    <div class="info">
      <p class="wallet">残高：{{ wallet }}</p>
      <button class="logOut" @click="logOut">ログアウト</button>
    </div>
    <h1>ユーザ一覧</h1>
      <table class="list">
        <thead>
          <tr>
            <th>ユーザー名</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userList" :value="user" :key="user.id">
            <td class="userName"> {{user.userName}} </td>
            <td><button @click="openModal1({ user, index })">walletを見る</button></td>
            <td><button @click="openModal2({ user, index })">送る</button></td>
          </tr>
        </tbody>        
      </table>
      <modal1 v-if="showModal1"></modal1>
      <modal2 v-if="showModal2"></modal2>
  </div>
</template>

<script>
import Modal1 from "/src/components/Modal1";
import Modal2 from "/src/components/Modal2";

export default {
  name: 'Dashboard',
  data() {
    return {
      authUser: false,
    };
  },
  mounted() {
    this.$store.commit('resetUserList')
    this.$store.dispatch('createUserList')
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut')
    },
    openModal1: function({ user, index }){
      this.$store.commit('openModal1')
      this.$store.commit('setUserInfo', { user, index })
    },
    openModal2: function({ user, index }){
      this.$store.commit('openModal2')
      this.$store.commit('setUserInfo', { user, index })
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
    userList() {
      return this.$store.getters.userList
    },
  },
  components: {
    Modal1,
    Modal2
  },
}
</script>

<style>
button.logOut {
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