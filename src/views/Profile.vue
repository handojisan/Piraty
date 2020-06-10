<template>
  <div>
    <div class="center">
      <div>{{ userName }}さん、こんにちは！</div>
      <div v-if="$store.getters.isSignedIn" class="center">
        <UserProfileForm />
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
  data() {
    return {
      inputName: "",
      inputImage: null,
      inputStatusMessage: ""
    };
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
    }
    // user: function() {
    //   return this.$store.state.user;
  }
};
</script>

<style lang="scss" scoped></style>
