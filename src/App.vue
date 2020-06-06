<template>
  <div id="app">
    <div v-if="user">
      <div>{{ user.email }}</div>
      <a v-on:click="SignOut">ログアウト</a>
    </div>
    <div v-else>
      <router-link to="/login">新規登録/ログイン</router-link>
    </div>

    <div class="title">
      <h1>PIRATY</h1>
    </div>
    <div id="nav">
      <router-link to="/">トップページ</router-link> |
      <router-link to="/about">PIRATYについて</router-link> |
      <router-link to="/ranking">ランキング</router-link> |
      <router-link to="/post">投稿</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: null
    };
  },
  methods: {
    SignOut: function() {
      firebase.auth().signOut();
    }
  },
  created() {
    // firebase auth ログイン状態を確認
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkdit-font-smoothing: antialiased;
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
