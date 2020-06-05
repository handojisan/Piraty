<template>
  <div id="app">
    <div class="title">
      <h1>PIRATY</h1>
    </div>
    <div v-if="user">
      <button v-on:click="signOut">ログアウト</button>
    </div>
    <div v-else>
      <span>メールアドレス：<input type="email" v-model="email"/></span>
      <tr />
      <span>パスワード：<input type="password" v-model="password"/></span>
      <tr />
      <button v-on:click="SignUp">新規登録</button>
      <button v-on:click="LogIn">ログイン</button>
      <button v-on:click="GoogleLogin">Google</button>
    </div>

    <div id="nav">
      <router-link to="/">トップページ</router-link> |
      <router-link to="/about">PIRATYについて</router-link> |
      <router-link to="/ranking">ランキング</router-link> |
      <router-link :to="'post' + number">投稿</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: null,
      email: null,
      password: null
    };
  },
  methods: {
    SignUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
      //this.email = "";
      //this.password = "";
    },
    LogIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    },
    GoogleLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    signOut: function() {
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
