<template>
  <div class="LoginComponent">
    <span>メールアドレス：<input type="email" v-model="email"/></span>
    <tr />
    <span>パスワード：<input type="password" v-model="password"/></span>
    <tr />
    <button v-on:click="SignUp">新規登録</button>
    <button v-on:click="LogIn">ログイン</button>
    <button v-on:click="GoogleLogin">Google</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    SignUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
      //this.email = "";
      //this.password = "";
      //ホームに戻る(vue.jsページ遷移)
      this.$router.push("/");
    },
    LogIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password);
      this.$router.push("/");
    },
    GoogleLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    signOut: function() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style lang="scss" scoped></style>
