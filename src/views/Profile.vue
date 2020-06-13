<template>
  <div class="profile">
    <div class="center">
      <div class="hello-profile">{{ userName }}さん、こんにちは！</div>
      <div class="statusMessage">{{ userStatusMessage }}</div>
      <div v-if="$store.getters.isSignedIn" class="center">
        <UserProfileForm />
        <button @click="signOut">サインアウト</button>
      </div>
      <div v-else>
        <button @click="signIn" class="signIn-profile">サインイン</button>
      </div>
    </div>
  </div>
</template>

<script>
import { signIn, signOut } from "@/firebase";
import UserProfileForm from "@/components/UserProfileForm";

export default {
  components: {
    UserProfileForm
  },
  methods: {
    signIn,
    signOut
  },
  computed: {
    user() {
      // getters の user なのがポイント！
      return this.$store.getters.user;
    },
    userName() {
      return this.user.name || this.user.displayName || "ゲスト";
    },
    userStatusMessage() {
      return this.user.userMessage;
    }
    // user: function() {
    //   return this.$store.state.user;
  }
};
</script>

<style lang="scss" scoped>
.profile {
  font-family: sans-serif;
}
.hello-profile {
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
}
.statusMessage {
  // text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  // height: 30px;
  // width: 885px;
  // position: relative;
  // z-index: 5000;
}
.signIn-profile {
  font-size: 20px;
  font-family: sans-serif;
}
</style>
