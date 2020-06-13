<template>
  <div>
    <div class="center">
      <div>{{ userName }}さん、こんにちは！</div>

      <div v-if="$store.getters.isSignedIn" class="center">
        <UserProfileForm />
        <div>{{ userStatusMessage }}</div>
        <button @click="signOut">サインアウト</button>
      </div>
      <div v-else>
        <button @click="signIn">サインイン</button>
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

<style lang="scss" scoped></style>
