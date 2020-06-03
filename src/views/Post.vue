<template>
  <div id="App">
    <PostForm />
    <PostList />
  </div>
</template>
<script>
import PostForm from "@/components/PostForm";

export default {
  name: "App",
  components: {
    PostForm
  }
};
</script>
