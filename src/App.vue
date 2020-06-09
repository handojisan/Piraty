<template>
  <div id="app">
    <header>
      <div id="container-example2">
        <div class="strip colour-1">
          <div v-if="user">
            <a>{{ user.email }}</a>
            <a v-on:click="SignOut">Logout</a>
          </div>
          <div v-else>
            <router-link to="/login">SignIn Login</router-link>
          </div>
        </div>
      </div>
    </header>

    <div class="title">
      <h1>PIRATY</h1>
    </div>
    <div id="container-example">
      <div class="strip colour-1">
        <router-link to="/">Top</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/ranking">Ranking</router-link>
        <router-link to="/post">Post</router-link>
      </div>
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
#container-example2 {
  position: relative;

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  .strip {
    width: 100%;
    height: 80px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    background: #ffcc99;
  }
  a {
    font-size: 10pt;
    font-family: sans-serif;
    color: #fff;
    text-decoration: none;
    letter-spacing: 2px;
    position: relative;
    text-align: right;
    padding: 15px 50px;
    width: 300px;
  }

  .colour-1 {
    background: #ffcc99;
    a::after {
      width: 100%;
      height: 0;
      background: #fff;
      content: "";
      position: absolute;
      top: 75%;
      left: 0;
      opacity: 0;
      transition: all 0.3s ease-out;
      margin: auto;
    }
    a:hover::after {
      opacity: 1;
      top: 80%;
      height: 2px;
    }
  }
}
#container-example {
  position: relative;

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  .strip {
    width: 100%;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    background: #a3d7ef;
  }
  a {
    font-size: 12pt;
    font-family: sans-serif;
    color: #fff;
    text-decoration: none;
    letter-spacing: 2px;
    position: relative;
    text-align: center;
    padding: 15px 50px;
    width: 200px;
  }

  .colour-1 {
    background: #a3d7ef;
    a::after {
      width: 100%;
      height: 0;
      background: #fff;
      content: "";
      position: absolute;
      top: 75%;
      left: 0;
      opacity: 0;
      transition: all 0.3s ease-out;
      margin: auto;
    }
    a:hover::after {
      opacity: 1;
      top: 100%;
      height: 4px;
    }
  }
}
.title {
  height: 300px;
  h1 {
    height: 300px;
    align-items: center;
    padding: 10px;
    font-size: 80pt;
    font-family: "Noto Serif JP", sans-serif;
  }
}
</style>
