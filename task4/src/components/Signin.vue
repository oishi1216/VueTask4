<template>
  <div class="contents">
    <h1>ログイン画面</h1>
    <div class="form">
      <table>
        <tr>
          <td>メールアドレス</td>
          <td><input type="text" placeholder="E-mail" v-model="loginEmail"></td>
        </tr>
        <tr>
          <td>パスワード</td>
          <td><input type="text" placeholder="Password" v-model="loginPassword"></td>
        </tr>
      </table>
      <button @click="signIn">ログイン</button>
      <p><router-link to="/">新規登録はこちらから</router-link></p>
    </div>
  </div>
</template>

<script>
import firebase from "/src/utiles/firebase";

export default {
  name: 'Signin',
  data() {
    return {
      loginEmail: '',
      loginPassword: ''
    };
  },
  methods: { 
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
      .then(user => {
        alert('ログインしました', user)
      })
      .catch(error => {
        alert('エラー', error)
      })
    }
  },
}
</script>
