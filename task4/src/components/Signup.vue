<template>
  <div class="contents">
    <h1>新規登録画面</h1>
    <div class="form">
      <table>
        <tr>
          <td>ユーザ名</td>
          <td><input type="text" placeholder="UserName" @input="registUserName"></td>
        </tr>
        <tr>
          <td>メールアドレス</td>
          <td><input type="text" placeholder="E-mail" @input="registEmail"></td>
        </tr>
        <tr>
          <td>パスワード</td>
          <td><input type="text" placeholder="Password" @input="registPassword"></td>
        </tr>
      </table>
      <button @click="signUp">新規登録</button>
      <p><router-link to="/Signin">ログインはこちらから</router-link></p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Signup',
  methods: {
    registUserName(e) {
      this.$store.commit('registUserName',e.target.value)
    },
    registEmail(e) {
      this.$store.commit('registEmail',e.target.value)
    },
    registPassword(e) {
      this.$store.commit('registPassword',e.target.value)
    },    
    signUp() {
      this.$store.dispatch('signUp')
    },
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