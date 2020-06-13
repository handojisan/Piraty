<template>
  <div class="logInComponents">
    <span>メールアドレス：<input type="email" v-model="email"/></span>
    <tr />
    <span>パスワード：<input type="password" v-model="password"/></span>
    <tr />
    <div class="logInbutton">
      <span class="button1"><button v-on:click="SignUp">新規登録</button></span>
      <span class="button2"><button v-on:click="LogIn">ログイン</button></span>
      <span class="button3"
        ><button v-on:click="GoogleLogin">Google</button></span
      >
    </div>
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

<style lang="scss" scoped>
.logInComponents {
  background-color: #f2f2f2;
  padding-top: 40px;
  padding-bottom: 40px;
  font-family: sans-serif;
  font-size: 20px;
  .logInbutton {
    position: relative;
    display: inline-block;
    padding: 0.25em 0.5em;
    text-decoration: none;
    color: #fff;
    background: #f2f2f2;
    border-bottom: solid 2px #f2f2f2;
    border-radius: 4px; /*角の丸み*/
    box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2),
      0 2px 2px rgba(0, 0, 0, 0.19);
    font-weight: bold;
  }
  .logInbutton:active {
    border-bottom: solid 2px #f2f2f2;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }

  .button1 {
    padding: 10px, 10px, 10px, 10px;
  }
  .button2 {
    padding: 10px, 10px, 10px, 10px;
  }
  .button3 {
    padding: 10px, 10px, 10px, 10px;
  }
}
</style>
