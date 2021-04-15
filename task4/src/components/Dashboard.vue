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
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      authUser: false
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    username() {
      return this.$store.getters.username
    },
    wallet() {
      return this.$store.getters.wallet
    },
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
</style>