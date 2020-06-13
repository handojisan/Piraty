<template>
  <div id="app">
    <header>
      <!-- <div id="container-example2">
        <div class="strip colour-1"> -->
      <div class="background">
        <div class="hanburger">
          <a
            class="menu-trigger"
            v-bind:class="{ active: isclicked }"
            v-on:click="isclicked = !isclicked"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div class="menuLine" v-show="isclicked">
            <div v-if="user" class="user-app">
              <div class="user-email">
                <router-link to="/profile"
                  >{{ user.email }}でログイン中</router-link
                >
              </div>
              <div class="userLogout">
                <a v-on:click="SignOut">ログアウト</a>
              </div>
            </div>
            <div v-else>
              <router-link to="/login">SignIn Login</router-link>
            </div>
            <!-- <div id="container-example2">
              <div class="strip colour-1"> -->
          </div>
        </div>

        <div class="title">
          <vue-particles
            class="particles"
            color="#FFFF99"
            :particleOpacity="1"
            :particlesNumber="200"
            shapeType="circle"
            :particleSize="1"
            linesColor="#FFCC66"
            :linesWidth="4"
            :lineLinked="true"
            :lineOpacity="0.7"
            :linesDistance="180"
            :moveSpeed="5"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
          >
          </vue-particles>
          <div class="titleName"><h1>PIRATY</h1></div>
        </div>
      </div>
    </header>
    <div id="container-example">
      <div class="menu-bar colour-1">
        <router-link to="/"
          ><img src="@/images/190_b_24.png" alt="home" />Top</router-link
        >
        <router-link to="/about"
          ><img src="@/images/169_t_24.png" alt="" />About</router-link
        >
        <router-link to="/profile"
          ><img src="@/images/789_me_f.png" alt="" />Myprofile</router-link
        >
        <router-link to="/ranking"
          ><img src="@/images/157_w_24.png" alt="" />Ranking</router-link
        >
        <router-link to="/post"
          ><img src="@/images/787_me_f.png" alt="" />Post</router-link
        >
      </div>
    </div>
    <router-view />
    <footer class="footer">
      <p>©︎2020.team-piranha</p>
      <p class="p">PIRATY-Project</p>
      <p class="p-1">お問い合わせ：piraty0123@gmail.com</p>
    </footer>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: null,
      isclicked: false
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

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkdit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
// #container-example2 {
//   position: relative;

//   *,
//   *::after,
//   *::before {
//     box-sizing: border-box;
//   }
//   .strip {
//     width: 100%;
//     height: 80px;
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//     justify-content: space-around;
//     background: #ffcc99;
//   }
//   a {
//     font-size: 10pt;
//     font-family: sans-serif;
//     color: #fff;
//     text-decoration: none;
//     letter-spacing: 2px;
//     position: relative;
//     text-align: right;
//     padding: 15px 50px;
//     width: 300px;
//   }

//   .colour-1 {
//     background: #ffcc99;
//     a::after {
//       width: 100%;
//       height: 0;
//       background: #fff;
//       content: "";
//       position: absolute;
//       top: 75%;
//       left: 0;
//       opacity: 0;
//       transition: all 0.3s ease-out;
//       margin: auto;
//     }
//     a:hover::after {
//       opacity: 1;
//       top: 80%;
//       height: 2px;
//     }
//   }
// }
.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
}
.menu-trigger {
  position: relative;
  width: 50px;
  height: 44px;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: black;
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 0;
}
.menu-trigger span:nth-of-type(2) {
  top: 20px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}
.menu-trigger.active {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
.menu-trigger.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-45deg);
  transform: translateY(20px) rotate(-45deg);
}
.menu-trigger.active span:nth-of-type(2) {
  -webkit-transform: translateY(0) rotate(45deg);
  transform: translateY(0) rotate(45deg);
}
.menu-trigger.active span:nth-of-type(3) {
  opacity: 0;
}
.hanburger {
  position: fixed;
  display: inline-block;
  color: #fff;
  left: 30px;
  top: 20px;
  z-index: 4;
  .menuLine {
    z-index: 5;
    position: absolute;
    top: 50px;
    left: 0;
  }
}
.user-app {
  font-size: 20px;
  .user-email {
    position: relative;
  }
  .userLogout {
    position: relative;
    right: 58px;
    top: 5px;
  }
}

#container-example {
  position: relative;

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  .menu-bar {
    width: 100%;
    height: 170px;
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
      top: 100%;
      height: 4px;
    }
  }
}
.title {
  height: 700px;
  width: 100%;
  position: relative;
  .titleName {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      //height: 300px;
      align-items: center;
      padding: 10px;
      font-size: 150pt;
      font-family: "Noto Serif JP", sans-serif;
      color: #ff6633;
      font-family: "Vollkorn", serif;
    }
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
    z-index: 1;
  }
}
// .background {
//background-image: url("./assets/image/space2.jpg");
//}
.footer {
  font-size: 16px;
  font-family: sans-serif;
  background-color: #ffcc99;
  width: 100%;
  height: 100px;
  padding-top: 10px;
  .p {
    font-size: 18px;
  }
  .p-1 {
    text-align: right;
  }
}
</style>
