<template>
  <div id="app">
    <div class="logo">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
      <router-view/>
    <div class="copy-right">
      Copyright &copy;2019○○Inc. All rights reserved.
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.copy-right {
  margin-top: 50px;
}

</style>
