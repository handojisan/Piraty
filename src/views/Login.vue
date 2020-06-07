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
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(result => {
          //if (result) {
          // 成功時の処理
          console.log(result);
          this.$router.push("/");
          //}
        })
        .catch(error => {
          console.log(error);
          // エラー時の処理
          alert(error.message);
        });
      this.email = "";
      this.password = "";
    },
    LogIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(result => {
          if (result) {
            // 成功時の処理
            console.log(result);
            this.$router.push("/");
          }
        })
        .catch(error => {
          console.log(error);
          // エラー時の処理
          alert(error.message);
        });
      this.email = "";
      this.password = "";
    },
    GoogleLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
      this.$router.push("/");
    },
    signOut: function() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style lang="scss" scoped></style>
