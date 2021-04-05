<template>
  <div class="contents">
    <h1>ログイン画面</h1>
    <div class="form">
      <table>
        <tr>
          <td>メールアドレス</td>
          <td><input type="text" placeholder="E-mail" @input="loginEmail"></td>
        </tr>
        <tr>
          <td>パスワード</td>
          <td><input type="text" placeholder="Password" @input="loginPassword"></td>
        </tr>
      </table>
      <button @click="signIn">ログイン</button>
      <p><router-link to="/">新規登録はこちらから</router-link></p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Signin',
  methods: {
    loginEmail(e) {
      this.$store.commit('loginEmail', e.target.value)
    },
    loginPassword(e) {
      this.$store.commit('loginPassword', e.target.value)
    },    
    signIn() {
      this.$store.dispatch('signIn')
    },
  },
}
</script>
