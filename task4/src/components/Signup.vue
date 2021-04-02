<template>
  <div class="contents">
    <h1>新規登録画面</h1>
    <div class="form">
      <table>
        <tr>
          <td>ユーザ名</td>
          <td><input type="text" placeholder="UserName" v-model="username"></td>
        </tr>
        <tr>
          <td>メールアドレス</td>
          <td><input type="text" placeholder="E-mail" v-model="email"></td>
        </tr>
        <tr>
          <td>パスワード</td>
          <td><input type="text" placeholder="Password" v-model="password"></td>
        </tr>
      </table>
      <button @click="signUp">新規登録</button>
      <p><a href="#">ログインはこちらから</a></p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert('登録しました', user.username)
        })
        .catch(error => {
          alert(error.message)
        })
    }
  },
}
</script>

<style>
table {
    margin: 0 auto;
}

button {
  margin-top: 30px;
  background-color: #fff;
  color: #3399ff;
  padding: 5px 10px;
  border-radius: 4px;
  border: 2px solid #3399ff;
}

button:hover {
  background-color: #3399ff;
  color: #fff;
}

p {
  margin: 0;
}

a {
  font-size: 10px;
  color: #3399ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>