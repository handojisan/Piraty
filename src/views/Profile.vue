<template>
  <div>
    <div v-if="user">
      <div>{{ user.displayName }}</div>
      <div>{{ user.email }}</div>
      <!-- 必要なだけかけばいい -->
    </div>
    <div v-else>
      ログインしてね
    </div>
  </div>
</template>

<script>
// import firebase from "firebase";
export default {
  computed: {
    user: function() {
      return this.$store.state.user;
      // {
      //   displayName: "ヒカキン",
      //   photoURL: "https://~~~",
      //   email: "takakurahikaru@gmail.com"
      // }
    }
  }
};
</script>

<style lang="scss" scoped></style>
