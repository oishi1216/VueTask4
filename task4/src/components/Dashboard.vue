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
            <td><button @click="openModal(user)">walletを見る</button></td>
            <td><button>送る</button></td>
          </tr>
        </tbody>        
      </table>
      <modal v-if="showModal" @close="showModal = false" :name="userNm" :wallet="userWallet"></modal>
  </div>
</template>

<script>
import firebase from "/src/utiles/firebase";
import Modal from "/src/components/Modal";

export default {
  name: 'Dashboard',
  data() {
    return {
      authUser: false,
      showModal: false,
      userNm: '',
      userWallet: '',
      userList: []
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
    logout() {
      this.$store.dispatch('logout')
    },
    openModal: function(user){
      this.showModal = true
      this.userNm = user.userName
      this.userWallet = user.wallet
    },
  },
  computed: {
    username() {
      return this.$store.getters.username
    },
    wallet() {
      return this.$store.getters.wallet
    },
  },
  components: {
    Modal
  }
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