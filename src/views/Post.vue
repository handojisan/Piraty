<template>
  <div id="App">
    <PostForm />
  </div>
</template>
<script>
import PostForm from "@/components/PostForm";

export default {
  name: "App",
  components: {
    PostForm
  },
  mounted() {
    if (!this.$store.state.user) {
      alert("投稿するにはログインが必要です．");
      this.$router.push("/login");
    }
  }
};
</script>
