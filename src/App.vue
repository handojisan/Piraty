<template>
  <div id="app">
    <div class="title">
      <h1>PIRATY</h1>
    </div>
    <div id="nav">
      <router-link to="/">トップページ</router-link> |
      <router-link to="/about">PIRATYについて</router-link> |
      <router-link to="/ranking">ランキング</router-link> |
    </div>
    <router-view />
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
.title {
  text-align: center;
  font-size: 28px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
